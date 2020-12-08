const mongoose = require('mongoose');
const Log = mongoose.model('Log');

module.exports = {

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     */
    addLog: function (req,res){
        let newLog = new Log({
            service: req.body.service,
            route: req.body.route,
            request_ID: req.body.request_ID,
            response_ID: req.body.response_ID,
            message: req.body.message
        });

        newLog.save((err) => {
            if (err) {
                res.status(404).json(err);
            } else {
                res.status(200).json();
            }
        });
    },

    findByService: function (req,res){
        let data = Log.findOne({ service: req.body})

        res.json(data);
    },

    findByRequestID: function (req,res){
        let data = Log.findOne({ request_ID: req.body})

        res.json(data);
    },

    findByResponseID: function (req,res){
        let data = Log.findOne({ response_ID: req.body})

        res.json(data);
    },

    findByDate: function (req,res){
        let data = Log.findOne({ date: req.body})

        res.json(data);
    }


    
}