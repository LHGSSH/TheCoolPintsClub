const { createProxyMiddleware } = require('http-proxy-middleware');
const axios = require("axios");

const log = function (req, res, next) {
    let path = req.path;
    let service = "";
    let date = new Date();

    switch (path) {
        case "/register":
        case "/editUser":
        case "/login":
            service = "userService";
            break;
        case "/search":
            service = "inventoryService";
            break;
        case "/checkout":
            service = "schedulingService";
        default:
            break;
    }

    let request_ID = date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2) + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + Math.floor(Math.random() * 90000);
    let response_ID = date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2) + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " " + Math.floor(Math.random() * 90000);

    let log = {
        service: service,
        route: path,
        request_ID: request_ID,
        response_ID: response_ID,
        message: res.statusCode
    }
    console.log(log);

    axios.post(`${process.env.LOGGING_LIBRARY_ENDPOINT}addLog`, log);
    next();
}

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
    headers: {
        method: 'POST'
    },
    changeOrigin: true
});

const checkout = function (req, res) {
    axios.all([
        axios.post(`${process.env.SCHEDULING_SERVICE_ENDPOINT}addSchedule`, req.body),
        axios.put(`${process.env.INVENTORY_SERVICE_ENDPOINT}decreaseStock`, req.body)
    ])
        .then(res.status(200).json())
        .catch((err) => res.status(404).json(err));
};

module.exports = {
    log,
    test,
    inventoryTest,
    register,
    editUser,
    login,
    search,
    checkout
};