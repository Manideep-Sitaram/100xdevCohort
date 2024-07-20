const express = require('express');
const { Card } = require('./db');
const cors = require('cors')

const app = express();

app.use(express.json())
app.use(cors())

app.get("/getCards",async(req,res) =>{

    const cards = await Card.find({});
    console.log(cards)
    res.send(cards)
})

app.post ("/insertCard",async(req,res) =>{

    const {name,description,intrestList} = req.body;

    const newCard = await Card.create({name,description,intrestList})

    console.log(newCard)

    res.status(200).send("The New Card Item Id "+ newCard._id)


})

app.put("/updateCard/:cardName",async (req,res) =>{
    const cardName = req.params.cardName;
    const newCard = await Card.findOneAndUpdate({name:cardName},{name: "Killer"},{new:true});

    res.send(newCard)
})

app.delete("/deleteCard/:cardName",async (req,res) =>{
    const cardName = req.params.cardName;
    const newCard = await Card.findOneAndDelete({name:cardName});

    res.send(newCard)
})

app.listen(3000,function (req,res){
    console.log("The Server is running on 3000 PORT")
})