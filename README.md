# symbols-list
Get a list of all stock and crypto symbols supported by IEX, and their associated information.

# Usage

##
`const Symbols = require("./Symbols")
const symbols = new Symbols`

Register the event listeners:

```
symbols.on("all", data => {
    console.log(data)
})

symbols.on("type", data => {
    console.log(data)
})

symbols.on("random", data => {
    console.log(data)
})

symbols.on("find", data => {
    console.log(data)
})
```

symbols.get("all") // return all symbols

symbols.get("find", "TSLA") // find a single symbol

symbols.get("find", ["TSLA", "MSFT", "AAPL"]) // find a list of symbols

symbols.get("type", "stock") // return all stock symbols

symbols.get("type", "crypto") // return all crypto symbols

symbols.get("random", {type: "crypto", size: 2}) // return random number of symbols for the given type. Default type is "all"

symbols.get("random", {type: "stock", size: 2}) 

symbols.get("random", {size: 2}) 

symbols.get("random", 3) 
