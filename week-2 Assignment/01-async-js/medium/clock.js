
setInterval(() =>{
    let date = new Date();
    let hours = (date.getHours()<10 ? "0":"") + date.getHours() ;
    let mins = (date .getMinutes()<10?"0":"") + date.getMinutes();
    let secs = (date.getSeconds()<10? "0":"") + date.getSeconds();
    console.log(`${hours} : ${mins} : ${secs}`)
    console.log(new Date().toLocaleTimeString())
},1000)