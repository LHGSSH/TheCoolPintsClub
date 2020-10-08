const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
    /**
     * Adds a user to the database.
     * @param {Object} formSubmission
     */
    addUser: function (formSubmission) {
        return User.create(user)
            .catch(err => {
                console.error(err);
                return [];
            });
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