let counter = 0;

function myOwnSetInterval(){
    setTimeout(() =>{
        counter +=1;
        console.log(counter)
        myOwnSetInterval();
    },1000)
}

myOwnSetInterval()