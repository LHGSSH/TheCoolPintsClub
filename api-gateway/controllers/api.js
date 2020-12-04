const { createProxyMiddleware } = require('http-proxy-middleware');
const axios = require("axios");

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

const checkout = function(req,res){
    axios
    .post(`${process.env.SCHEDULING_SERVICE_ENDPOINT}addSchedule`, req.body)
    .then((response) => res.send(response.data))
    .catch((err) => console.log(err));
};

module.exports = {
    test,
    inventoryTest,
    register,
    editUser,
    login,
    search,
    checkout
};