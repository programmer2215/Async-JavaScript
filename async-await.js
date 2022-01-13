// Source: Dev Ed (youtube: https://youtu.be/_8gHHBlbziw)
function stockData(symbol){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (symbol === "TSLA"){
                resolve({
                    symbol, 
                    price: "$221.23",
                    news: "Elon hints on new Tesla Vacuum Robot"
                })
            }else{
                reject(new Error("Stock is not tracked"))
            };
        }, 3000)})
}

// using async await
async function getTeslaData(){
    const data = await stockData('TSLA');
    console.log(data);
    console.log("Data recieved")
}

getTeslaData();