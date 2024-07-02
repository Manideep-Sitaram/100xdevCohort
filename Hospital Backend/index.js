const express = require('express')
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json())

const users = [
    {
        name: "Kanna",
        kidneys: [
            {
                isHealthy: true,
            },{
                isHealthy: true
            }
        ]
    },
    {
        name: "Ravan",
        kidneys: [
            {
                isHealthy: false
            },
            {
                isHealthy: false
            }
        ]
    }
]

app.get("/",(req,res) =>{
    const userName = req.query.userName;
    const userData = users.find((user) => user.name === userName);

    const userKidneyCount = userData.kidneys.length;
    const healthyKidneyCount = (userData.kidneys.filter((kidney) => kidney.isHealthy)).length
    const unHealthyKidneyCount = userKidneyCount - healthyKidneyCount

    res.json({
        userKidneyCount,
        healthyKidneyCount,
        unHealthyKidneyCount
    })
})

app.post("/", (req,res) =>{
    const userNewKidney = req.body;
    const userName = req.query.userName;

    const userIndex = users.findIndex((user) => user.name === userName)

    users[userIndex].kidneys.push(userNewKidney)

    res.send("Success")
})

app.put("/", (req,res) =>{
    const userName = req.query.userName;

    const userIndex = users.findIndex(user => user.name === userName)

    console.log(userIndex)

    const userKidneyIndex = users[userIndex].kidneys.findIndex(kidney => kidney.isHealthy == false)

    // console.log(userKidneyIndex)

    users[userIndex].kidneys[userKidneyIndex].isHealthy =true

    res.send("Success")
})

app.delete("/", (req,res) =>{
    const userName = req.query.userName;

    const userIndex = users.findIndex(user => user.name === userName);

    const userKidneyIndex = users[userIndex].kidneys.find(kidney => kidney.isHealthy == false)

    users[userIndex].kidneys.splice(userKidneyIndex,1)

    res.send("Success")


})

app.listen(3000,() =>{
    console.log("The app is Listening on port : 3000")
})