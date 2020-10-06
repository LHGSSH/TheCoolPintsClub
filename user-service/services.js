const mongoose = require('mongoose');
const Account = mongoose.model('Account');


module.exports = {
    
    /**
     * returns all accounts in DB
     */
    getAllAccounts: function() {
        return Account.find().exec()
        .catch(err => {
            return resizeBy.send(500, 'db error');
        });
    },

    /**
     * 
     * @param {JSON} account 
     */
    addUser: function(account) {
        return Account.create(account)
        .catch(err => {
            console.error(err);
            return [];
          });
    },

    /**
     * 
     * @param {Number} id 
     * @param {JSON} newAccountDetails 
     */
    editUser: function(id, newAccountDetails) {
        return Account.findByIdAndUpdate(id, newAccountDetails, {new: true})
        .catch(err => {
            console.error(err);
            return [];
          });
    },

    /**
     * 
     * @param {Number} id 
     */
    getStore: function(id) {
        return Account.findOne( { _id: id } ).exec()
        .catch(err => {
            return res.send(500, 'db error');
        })
    }



}