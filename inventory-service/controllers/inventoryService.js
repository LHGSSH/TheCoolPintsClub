const mongoose = require('mongoose');
const Inventory = mongoose.model('inventory');

module.exports = {
    /**
     * Searches the database.
     * @param {*} req 
     * @param {*} res 
     */
    search: async function (req, res) {
        console.log(req.body);
        // await Inventory.findOne({ flavor: req.body }, function (err, result) {
        //     if (err) {
        //         return res.status(404).json(err);
        //     } else {
        //         res.status(200).json({ result });
        //     }
        // })(req, res);
    }
}