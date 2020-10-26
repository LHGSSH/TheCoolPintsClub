const mongoose = require('mongoose');
const Flavor = mongoose.model('Flavor');

module.exports = {

    /**
     * 
     */
    search: function (req, res){
        Flavor.findOne({flavor: 'Apple Cinnamon'}).exec();
        
    }
}