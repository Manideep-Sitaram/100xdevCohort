const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://kanna:kanna@100xdevlearningcluster.qrvy0qb.mongodb.net/Coarse_Selling_App');

// Define schemas
const AdminSchema = new mongoose.Schema({
    name: String,
    password: String,
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    name:String,
    password:String
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title:String,
    description:String,
    price:Number,
    imagelink:String,
    published:Boolean
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}