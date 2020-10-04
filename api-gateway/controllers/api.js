//const userService = require( location of userService )

//Route for adding new user
const addUser = async function(req, res) {
    //Make sure that all items are being passed in
    if (req.body.username &&
        req.body.password &&
        req.body.email &&
        req.body.fullName &&
        req.body.address) {
            //let newUser = await userService.addUser(req.body);
            res.json({
                status: "success",
                data: newUser
            });
        }
    else {
        res.json({
            status: "Invalid object passed in",
            data: {}
        });
    }
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