const fs = require("fs");

fs.writeFile("index.txt","Hi Hello namastey guru gaaru",(err)=>{
    if(err){
        console.log("Errror occured")
    }
})