require('../../user-service/models/user');
const userService = require('../../user-service/userService');

//Route for adding new user
const addUser = function(req, res) {    
    let newUser = req.body;
    userService.addUser(newUser);
    return res.redirect('http://localhost:4200/');
}

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
    addUser,
    editUser,
    getUser
};