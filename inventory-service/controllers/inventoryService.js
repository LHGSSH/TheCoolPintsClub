const mongoose = require('mongoose');
const Inventory = mongoose.model('inventory');

module.exports = {
    /**
     * 
     */
    search: async function (req, res) {
        await Inventory.findOne({flavor: req.body}, function (err, result) {
            if (err) {
                return res.status(404).json(err);
            } else {
                res.status(200).json({ result });
            }
        })(req, res);
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