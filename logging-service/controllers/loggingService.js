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

    findByService: async function (req,res){
        let data = await Log.findOne({ service: req.body.service})
        
        res.json(data);
    },

    findByRequestID: async function (req,res){
        let data = await Log.findOne({ request_ID: req.body.request_ID})
        console.log(data);
        res.json(data);
    },

    findByResponseID: async function (req,res){
        let data = await Log.findOne({ response_ID: req.body.response_ID})

        res.json(data);
    },

    findByDate: async function (req,res){
        let data = await Log.findOne({ date: req.body.date})

        res.json(data);
    }


    
}