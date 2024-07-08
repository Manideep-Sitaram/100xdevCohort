// async function myAPICall(){
//    let myResponseObject = await fetch("https://fakerapi.it/api/v1/persons");
//    let myResponeJson = await myResponseObject.json();
//    console.log(myResponeJson)
// }
// myAPICall()

fetch("https://fakerapi.it/api/v1/persons")
.then(res => res.json())
.then(res => console.log(res.data))