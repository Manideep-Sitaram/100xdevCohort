const {Router} = require("express");
const { Admin, Coarse } = require("../db");

const router = Router();

// function adminMiddleWare (req,res,next){

// }

router.post("/signup",function(req,res){
   const name = req.body.username;
   const password = req.body.password
   const newAdmin = new Admin({name,password});
   newAdmin.save().then(function (data){
    res.json({ message: 'Admin created successfully' })
   })
});

router.post("/coarses",function(req,res){
    const {title,description,price,imageLink} = req.body;

    const newCoarse = new Coarse({title,description,price,imageLink});
    console.log(newCoarse)

    newCoarse.save().then(function(){
        res.json({ message: 'Course created successfully', courseId: newCoarse._id })
    });

})

router.get("/coarses", function(req,res){
    Coarse.find()
    .then(function (data){
        res.json(data)
    })
})

module.exports = router;