# symbols-list
Get a list of all stock and crypto symbols supported by [IEX](https://iextrading.com/api-terms/), and their associated information.

# Usage
## Example
```
const Symbol = require('symbols-list')
const symbol = new Symbol

symbol.on("random", data => console.log(data))

symbol.get("random", 2)
```

## Installation
### Server
`npm i symbols-list`

### Browser
`<script src="https://draeder.github.io/symbols-list/symbols.min.js"></script>`

## Initialize symbols-list
### Server
```
const Symbols = require("symbols-list")
const symbols = new Symbols
```

### Browser
`const symbols = new Symbols()`

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
> Note: IEX supports very few crypto symbols
### Return random symbols
`symbols.get("random", 3)`
### Return random symbols of a given type and size
```
symbols.get("random", {type: "crypto", size: 2})

symbols.get("random", {type: "stock", size: 2}) 

symbols.get("random", {size: 2}) // defaults to type "all"
```
