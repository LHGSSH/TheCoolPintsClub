const mongoose = require('mongoose');
const Inventory = mongoose.model('inventory');

module.exports = {
    /**
     * 
     */
    search: async function (req, res) {
        return await Inventory.findOne({ flavor: 'Apple Cinnamon' })
    },

    testsearch: async function (req, res) {
        await Inventory.find(function (err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
            }
        });
    }
}