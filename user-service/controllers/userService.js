const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
    /**
     * Adds a user to the database.
     * @param {any} req 
     * @param {any} res 
     */
    addUser: function (req, res) {
        User.create(req.body)
            .catch(err => {
                console.error(err);
                return [];
        });
        return res.redirect('http://localhost:4200/');
    },

    /**
     * Edits a user in the database.
     * @param {Number} id 
     * @param {JSON} newUserDetails 
     */
    editUser: function (id, newUserDetails) {
        return User.findByIdAndUpdate(id, newUserDetails, { new: true })
            .catch(err => {
                console.error(err);
                return [];
            });
    },

    /**
     * 
     * @param {Number} id 
     */
    getUser: function (id) {
        return User.findOne({ _id: id }).exec()
            .catch(err => {
                return res.send(500, 'db error');
            })
    }
}