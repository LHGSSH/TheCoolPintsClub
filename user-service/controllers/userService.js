const mongoose = require('mongoose');
const User = mongoose.model('User');
const passport = require('passport');
const token = process.env.TOKEN || "recipeT0k3n";

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
                // Print out the generated ApiKey -- Works
                console.log("Api Key: " + newUser.apiKey);
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
        let token = req.query.apiToken;
        // Check whether a token exists as the query parameter
        if (token) {
            // Search for a user with the provided API token
            User.findOne({ apiToken: token })
                .then(user => {
                    // Call next if a user with the API token exists
                    if (user) next();
                    else next(new Error("Invalid API token."));
                })
                // Pass an error to the error handler
                .catch(error => {
                    next(new Error(error.message));
                });
        } else {
            next(new Error("Invalid API token."));
        }
    },

    /**
     * Edits a user in the database.
     * @param {any} req
     * @param {any} res
     */
    editUser: async function (req, res) {
        editedUserDetails = req.body;
        editedUser = await User.findOneAndUpdate({username: editedUserDetails.username}, editedUserDetails, { new: true })
            .catch(err => {
                console.error(err);
                return [];
            });
        const token = editedUser.generateJwt();
        res.status(200).json({ token });
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
                // let signedToken = jsonWebToken.sign;
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