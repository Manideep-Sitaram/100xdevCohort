const { Router } = require("express");
const { User,Coarse } = require("../db");

const router = Router();

router.post("/signup", function(req,res){
    const name = req.body.username;
    const password = req.body.password;

    const newUser = new User({name,password});
    newUser.save().then(() => res.send("User is saved"))
})

router.get("/coarses", function(req,res){
    Coarse.find()
    .then(function (data){
        res.json(data)
    })
})

router.post("/coarses/:coarseId", async function(req,res){

    const name = req.headers.name;
    const password = req.headers.password;

    const coarseId = req.params.coarseId;

    console.log(name,password,coarseId)

    // User.updateOne({name:name},{"$push":{
    //     purchasedCoarses: coarseId
    // }})
    // .then(() => res.send("User purchased the coarse"))

    await User.updateOne({
        name: name
    }, {
        "$push": {
            purchasedCoarses: coarseId
        }
    })
    res.json({
        message: "Purchase complete!"
    })

});


module.exports = router;