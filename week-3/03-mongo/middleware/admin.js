const {Admin} = require('../db')
// Middleware for handling auth

async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const name = req.headers.username;
    const password = req.headers.password;
    
    const user = await Admin.find({name,password})

    if(user.length ==0)return res.status(404).message("No User found with this credentials")

    next()
}

module.exports = adminMiddleware;