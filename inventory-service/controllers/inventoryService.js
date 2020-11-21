const mongoose = require('mongoose');
const Inventory = mongoose.model('Inventory');

module.exports = {
    /**
     * Searches the database.
     * @param {*} req 
     * @param {*} res 
     */
    search: async function (req, res) {
        let searchQuery = req.body.searchQuery.toLowerCase();
        await Inventory.find({ flavor: searchQuery }, function (err, result) {
            if (err) {
                return res.status(404).json(err);
            } else {
                res.status(200).json({ result });
            }
        });
    }
}