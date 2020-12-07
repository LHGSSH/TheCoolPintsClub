const mongoose = require('mongoose');
const Schedule = mongoose.model('Schedule');

module.exports = {
    /**
     * 
     * @param {*} req 
     * @param {*} res 
     */
    addSchedule: function (req,res){
        console.log("schedule time");
        console.log(req.body);
        let newSchedule = new Schedule(req.body);

        return newSchedule.save((err) => {
            if (err) {
                res.status(404).json(err);
            } else {
                res.status(200).json();
            }
        });
    }
}