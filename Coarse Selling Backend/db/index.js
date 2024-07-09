const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://kanna:kanna@100xdevlearningcluster.qrvy0qb.mongodb.net/coarse-selling-db")

const adminSchema = new mongoose.Schema({
    name: String,
    password: String,
})

const coarseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imageLink: String,
    published: Boolean,
});
