# symbols-list
Get a list of all stock and crypto symbols supported by IEX, and their associated information.

# Usage
## Installation
`npm i symbols-list`


## Initialize symbols-list
```
var Symbols = require("symbols-list")
const symbols = new Symbols
```

## Register the event listeners

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

## Make requests
### Return all symbols
`symbols.get("all")`
### Return one symbol
`symbols.get("find", "TSLA")`
### Return a list of symbols
`symbols.get("find", ["TSLA", "MSFT", "AAPL"])`
### Return only stock market symbols
`symbols.get("type", "stock")`
### Return only crypto market symbols
`symbols.get("type", "crypto")`
##### Note: IEX supports very few crypto symbols
### Return random symbols
`symbols.get("random", 3)`
### Return random symbols of a given type and size
```
symbols.get("random", {type: "crypto", size: 2})

symbols.get("random", {type: "stock", size: 2}) 

symbols.get("random", {size: 2}) // defaults to type "all"
```
