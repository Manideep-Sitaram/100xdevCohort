const fs = require("fs");

fs.readFile("index1.txt","utf-8",function(err,data){
    console.log(data)
})

let res =0;

for (let i =0; i<10000000000; i++){
    res+=i
}
