const Symbols = require("./Symbols")
const symbols = new Symbols

symbols.on("all", data => {
    console.log(data)
})
symbols.on("type", data => {
    console.log(data)
})
symbols.on("random", data => {
    console.log(data)
})

//symbols.get("all") // return all symbols
symbols.get("find", "TSLA") // find a single symbol
symbols.get("find", ["TSLA", "MSFT", "BTC"]) // find a list of symbols
//symbols.get("type", "stock") // return all stock symbols
//symbols.get("type", "crypto") // return all crypto symbols
//symbols.get("random", {type: "crypto", size: 2}) // return random number of symbols for the given type. Default type is "all"
symbols.get("random", {type: "crypto", size: 2}) 
symbols.get("random", {size: 3}) 

/* STOCK example
{
    symbol: "ETFC",
    name: "E*TRADE FINANCIAL CORP",
    date: "2020-09-25",
    isEnabled: true,
    type: "N/A",
    iexId: "2273"
  }
*/

/* CRYPTO example
{
    symbol: "BNBUSDT",
    name: "Binance Coin USD",
    date: "2020-09-25",
    isEnabled: true,
    type: "crypto",
    iexId: 10000003
}
*/