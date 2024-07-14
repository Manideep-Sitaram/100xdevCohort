const { Router } = require("express");
const router = Router();
const jwt = require("jsonwebtoken")
const userMiddleware = require("../middleware/user");
const { Admin,User,Course } = require("../db");
const {JWT_PASSWORD} = require("../Secrets")

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const {username,password} = req.body
    const newUser = await User.create({username,password});
    res.json({ message: 'User created successfully' });
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic

    const {username,password} = req.body;
    const token = jwt.sign({username,password},JWT_PASSWORD);

    res.json({ token: `Bearer ${token}`})
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({});
    return res.json(courses);
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.username

    const user = await User.findOne({username});
    const course = await Course.findOne({_id:courseId})

    if(!course || !user) res.status(411).send("Please send the Valid Credentials")

    user.purchasedCourses.push(courseId);

    await user.save();
    // console.log(savedUser);

    res.send("Course Purchased Successfully")
    
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const username = req.username;

    const user = await User.findOne({username});

    if(!user) res.status(411).send("Please send the Valid Credentials");

    const purchasedCourses = await user.populate('purchasedCourses','title price');

    res.json(purchasedCourses)


});

module.exports = router