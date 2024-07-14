const jwt = require("jsonwebtoken");
const { JWT_PASSWORD } = require("../Secrets");
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const jwtToken = req.headers.authorization.split(" ")[1];
    if(jwt.verify(jwtToken,JWT_PASSWORD)){
        next();
    }
}

module.exports = adminMiddleware;