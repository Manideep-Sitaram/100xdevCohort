const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin,User,Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    console.log("Caamhere")
    // Implement admin signup logic
    const name = req.body.username;
    const password = req.body.password;

    const newAdmin = new Admin({
        name,
        password,
    });

    newAdmin.save()
    .then(() => res.json({"message": "Admin created successfully"}))

});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
  const  { title, description, price, imageLink} = req.body
    const newCourse = new Course({
        title,
        description,
        price,
        imagelink,
        published
    });

    let id;
    newCourse.save((err, course) => {
        id= course.id
    })
    .then(() => res.json({ message: 'Course created successfully', courseId: id }))

});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.find()
    .then(data => res.send(data))
});

module.exports = router;