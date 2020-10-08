//const userService = require( location of userService )

//Route for adding new user
const addUser = async function(req, res) {    
    //let newUser = await userService.addUser(req.body);
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