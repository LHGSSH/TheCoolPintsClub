const { createProxyMiddleware } = require('http-proxy-middleware');

const test = createProxyMiddleware({
    target: 'http://localhost:3050/',
    changeOrigin: true
});

//Route for adding new user
const addUser = createProxyMiddleware({
    target: 'http://localhost:3050/',
    headers: {
        accept: 'text/html',
        method: 'POST'
    },
    changeOrigin: true
});

//Route for editing user
const editUser = async function(req, res) {
    let id = req.params.id;
    //let editedUser = await userService.editUser(id, req.body);
    res.json(editedStore);
}

//Route for getting user by ID
const getUser = async function(req, res) {
    let id = req.params.id;
    //let user = await userService.getUser(id);
    res.json(user);
}

module.exports = {
    test,
    addUser,
    editUser,
    getUser
};