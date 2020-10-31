const mongoose = require('mongoose');
const User = mongoose.model('User');
const passport = require('passport');
const token = process.env.TOKEN || "recipeT0k3n";



// verifyToken: (req, res, next) => { 
//     let token = req.query.apiToken; 
//     if (token) { User.findOne({ apiToken: token }) 
//         .then(user => { 
//             if (user) next(); 
//             else next(new Error("Invalid API token.")); }) .catch(error => { next(new Error(error.message)); }); } else { next(new Error("Invalid API token.")); } }


// .use(usersController.verifyToken)






module.exports = {
    /**
     * Adds a user to the database. Also generates an API key and a JWT for the user.
     * @param {any} req 
     * @param {any} res 
     */
    register: function (req, res) {
        newUser = new User(req.body);
        newUser.apiKey = Math.random().toString(36).substring(7);
        newUser.save((err) => {
            if (err) {
                res.status(404).json(err);
            } else {
                const token = newUser.generateJwt();
                res.status(200).json({ token });
            }
        });
    },

    /**
     * Middleware function to verify API token in usersController, called in a separate part
     * @param {Number} id 
     * @param {JSON} newUserDetails 
     */ 
    verifyToken: (req, res, next) => { 
        if (req.query.apiToken === token) next();
        else next(new Error("Invalid API token.")); 
    },

    /**
     * Edits a user in the database.
     * @param {Number} id 
     * @param {JSON} newUserDetails 
     */
    editUser: function (id, newUserDetails) {
        //Mongoose to find API token--Compare it
        var token = req.query.token;
        // jwt.verify(token,)
        return User.findByIdAndUpdate(id, newUserDetails, { new: true })
            .catch(err => {
                console.error(err);
                return [];
            });
    },

    /**
     * 
     * @param {any} req
     * @param {any} res
     */
    login: function (req, res) {
        // Check API Key
        // var token = req.query.token;
        
        passport.authenticate('local', (err, user, info) => {
            let token;
            if (err) {
                return res
                    .status(404)
                    .json(err);
            }
            if (user) {
                token = user.generateJwt();
                res
                    .status(200)
                    .json({ token });
            } else {
                res
                    .status(401)
                    .json(info);
            }
        })(req, res);
    }
}