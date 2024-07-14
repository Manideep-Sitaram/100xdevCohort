const jwt = require("jsonwebtoken");
const { JWT_PASSWORD } = require("../Secrets");
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const jwtToken = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(jwtToken,JWT_PASSWORD)
    console.log(decodedToken)
    if(decodedToken.username){
        req.username = decodedToken.username;
        next();
    }
    else{
        res.status(403).send("You are not Authenticated")
    }

}

module.exports = userMiddleware;