const { User } = require("../db");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const name = req.headers.username;
    const password = req.headers.password;

    const user = await User.find({name,password});

    if(user.length ==0) return res.status(404).message("No User Found")
    
    next()

}

module.exports = userMiddleware;