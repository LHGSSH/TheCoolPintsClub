const mongoose = require('mongoose');
const Schedule = mongoose.model('schedule');

module.exports = {
    /**
     * 
     * @param {*} req 
     * @param {*} res 
     */
    addSchedule: async function (req,res){
        console.log("schedule time");
        let schedule = new Schedule;
        schedule = req.body;
        console.log(schedule);

        schedule.save((err) => {
            if (err) {
                res.status(404).json(err);
            } else {
                res.status(200);
            }
        });
    }
}