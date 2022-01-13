// Source: Dev Ed (youtube: https://youtu.be/_8gHHBlbziw)
// callback functions

function getStockNews(symbol, callback){
    setTimeout(()=>{
        callback({symbol, news:"Elon's Tweet tanks Tesla share price!"});
    }, 3000)
}

function getStockPrice(symbol, callback){
    setTimeout(()=>{
        callback({symbol, price: "$221.36"});
    }, 2000)
}

getStockPrice("TSLA", (obj)=>{
    console.log(obj);
    getStockNews(obj.symbol, (obj)=>{ // THIS IS CALLBACK HELL!!
        console.log(obj);
    });
})
