const mongoose = require('mongoose');
const Flavor = mongoose.model('Flavor');

module.exports = {

    /**
     * 
     */
    search: async function (req, res){
        return await Flavor.findOne({ flavor: 'Apple Cinnamon' }).exec();
    },

    testsearch: async function (req, res){
        return await Flavor.findOne({ flavor: 'Apple Cinnamon' }).exec();
    }
}