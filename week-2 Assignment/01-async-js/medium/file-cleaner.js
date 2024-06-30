const fs = require("fs")

fs.readFile("index.txt","utf-8",(err,data) =>{
    if(err) console.log("There is some error occured")
    let content = data
    content = content.replace(/\s+/g," ")
    fs.writeFile("index.txt",content,(err) =>{
        if(err) console.log('some error occured')
    })
})