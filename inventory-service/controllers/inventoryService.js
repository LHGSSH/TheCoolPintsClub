const mongoose = require('mongoose');
const Flavor = mongoose.model('Flavor');

module.exports = {

    /**
     * 
     */
    search: function (req, res){
        Flavor.find({ flavor: 'Apple Cinnamon' }).exec();
        
    }
}