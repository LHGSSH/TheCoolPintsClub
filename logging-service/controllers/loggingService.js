const mongoose = require('mongoose');
const Log = mongoose.model('Log');

module.exports = {

    /**
     * 
     * @param {*} req 
     * @param {*} res 
     */
    addLog: function (req,res){
        let newLog = new Log(req.body)

        newLog.save((err) => {
            if (err) {
                res.status(404).json(err);
            } else {
                res.status(200).json();
            }
        });
    },

    findByService: function (req,res){
        let Log = new Log(Log.findOne({ service: req.body}))

        res.json({Log});
    },

    findByRequestID: function (req,res){
        let Log = new Log(Log.findOne({ request_ID: req.body}))

        res.json({Log});
    },

    findByResponseID: function (req,res){
        let Log = new Log(Log.findOne({ response_ID: req.body}))

        res.json({Log});
    },

    findByDate: function (req,res){
        let Log = new Log(Log.findOne({ date: req.body}))

        res.json({Log});
    }


    
}