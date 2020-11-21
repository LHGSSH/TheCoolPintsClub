const { createProxyMiddleware } = require('http-proxy-middleware');

const test = createProxyMiddleware({
    target: process.env.USER_SERVICE_ENDPOINT,
    changeOrigin: true
});

const inventoryTest = createProxyMiddleware({
    target: process.env.INVENTORY_SERVICE_ENDPOINT,
    changeOrigin: true
})

//Route for adding new user
const register = createProxyMiddleware({
    target: process.env.USER_SERVICE_ENDPOINT,
    headers: {
        method: 'POST'
    },
    changeOrigin: true
});

//Route for editing user
const editUser = createProxyMiddleware({
    target: process.env.USER_SERVICE_ENDPOINT,
    headers: {
        method: 'PUT'
    },
    changeOrigin: true
});

//Route for getting user by ID
const login = createProxyMiddleware({
    target: process.env.USER_SERVICE_ENDPOINT,
    headers: {
        method: 'POST'
    },
    changeOrigin: true
});

//Route for searching inventory DB
const search = createProxyMiddleware({
    target: process.env.INVENTORY_SERVICE_ENDPOINT,
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