const { createProxyMiddleware } = require('http-proxy-middleware');

const test = createProxyMiddleware({
    target: 'http://localhost:3050/',
    changeOrigin: true
});

//Route for adding new user
const addUser = createProxyMiddleware({
    target: 'http://localhost:3050/',
    headers: {
        method: 'POST'
    },
    changeOrigin: true
});

//Route for editing user
const editUser = createProxyMiddleware({
    target: 'http://localhost:3050/',
    headers: {
        method: 'PUT'
    },
    changeOrigin: true
});

//Route for getting user by ID
const login = createProxyMiddleware({
    target: 'http://localhost:3050/',
    headers: {
        method: 'GET'
    },
    changeOrigin: true
});

module.exports = {
    test,
    addUser,
    editUser,
    login
};