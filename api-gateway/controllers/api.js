const { createProxyMiddleware } = require('http-proxy-middleware');

const test = createProxyMiddleware({
    target: 'http://user:3050/',
    changeOrigin: true
});

const inventoryTest = createProxyMiddleware({
    target: 'http://inventory:3060/',
    changeOrigin: true
})

//Route for adding new user
const register = createProxyMiddleware({
    target: 'http://user:3050/',
    headers: {
        method: 'POST'
    },
    changeOrigin: true
});

//Route for editing user
const editUser = createProxyMiddleware({
    target: 'http://user:3050/',
    headers: {
        method: 'PUT'
    },
    changeOrigin: true
});

//Route for getting user by ID
const login = createProxyMiddleware({
    target: 'http://user:3050/',
    headers: {
        method: 'POST'
    },
    changeOrigin: true
});

//Route for searching inventory DB
const search = createProxyMiddleware({
    target: 'http://inventory:3060/',
    headers:{
        method: 'POST'
    },
    changeOrigin: true
});

module.exports = {
    test,
    inventoryTest,
    register,
    editUser,
    login,
    search
};