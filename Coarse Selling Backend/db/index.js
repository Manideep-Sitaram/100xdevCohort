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
    published: {
        type: Boolean,
        default: true
    },
});

const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    purchasedCoarses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Coarse"
    }]
})

const Admin = mongoose.model("Admin",adminSchema);
const Coarse = mongoose.model("Coarse",coarseSchema);
const User = mongoose.model("User",userSchema)

module.exports ={
    Admin,
    Coarse,
    User
}
