const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_PASSWORD } = require("../Secrets");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const {username,password} = req.body
    const newAdmin = await Admin.create({username,password});
    res.json({ message: 'Admin created successfully' });
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const {username,password} = req.body;
    const token = jwt.sign({username,password},JWT_PASSWORD);

    res.json({ token: `Bearer ${token}`})

});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const {title, description,price,imageLink} = req.body;
    const course = await Course.create({title, description,price,imageLink});
    return res.json( { message: 'Course created successfully', courseId: course._id });
});

router.get('/courses', adminMiddleware,async (req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find({});
    res.json(courses)
});

module.exports = router;