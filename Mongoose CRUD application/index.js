const express = require('express')
const mongoose = require('mongoose')

const app = express();

mongoose.connect("mongodb+srv://kanna:kanna@100xdevlearningcluster.qrvy0qb.mongodb.net/BasicCRUD")

const UserSchema = new mongoose.schema({
    name: String,
    age: Number,
})

const User = mongoose.

app.listen(3000,function(){
    console.log('App is Listening on PORT 3000')
})
