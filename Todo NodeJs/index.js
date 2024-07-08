const express = require("express")

const app = express()

const todos =[]

app.get("/",(req,res) =>{
    res.send("Hello Kanna")
});

app.listen(3000,() =>{
    console.log("Server is running on port 3000")
})