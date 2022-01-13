// Source: Dev Ed (youtube: https://youtu.be/_8gHHBlbziw)


// Sync Code
function zap(){
    console.log("ZAP!!!");
}

console.log("Start");

zap();

console.log("End");

// Async Code
console.log("Start");

setTimeout(()=>{
    console.log("BeepBopBoop")
}, 2000);

console.log("End")



