// Source: Dev Ed (youtube: https://youtu.be/_8gHHBlbziw)
// Promises
let fetchStatus = ":)"
const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if (fetchStatus === ":)"){ 
            resolve({name: "Mark"});
        }else{
            reject(new Error("Oh Snap!"))
        }
            
    }, 3000)
})

promise.then((person)=>{
    console.log(`Hello ${person.name}!!`)
}).catch((err) => {
    console.log(err)
})


// a better way to write the stockPrice functon
function stockData(symbol){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (symbol === "TSLA"){
                resolve({
                    symbol, 
                    price: "$221.23",
                    news: "Elon hints on new Tesla Vaccum Robot"
                })
            }else{
                reject(new Error("Stock is not tracked"))
            };
        }, 3000)})
}

stockData("TSLA").then((data) => {
    console.log(data);
}).catch(err => {
    console.log(err);
})
