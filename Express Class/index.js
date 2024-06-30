const express = require("express")

const app = express()

function factorial(n){
    let ans = 1;
    if(n==0 || n==1) return 1;
    for(let i =2;i<=n;i++){
        ans*=i
    }
    return ans;
}

app.get("/",(req,res) =>{
    const n = req.query.n;
    const ans = factorial(n)
    res.send(`The factorial of the number is ${ans}`)
}) 

app.listen(3000)