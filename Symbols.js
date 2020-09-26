const request = require('request')
const util = require('util'),
    EventEmitter = require('events')

function Symbols () {

    EventEmitter.call(this)

}

util.inherits(Symbols, EventEmitter)

Symbols.prototype.get = function (event, data) {    
    let symbols = this // enables symbol.emit...
    let symbol = []
    request({
        method: 'get',
        url: 'https://api.iextrading.com/1.0/ref-data/symbols'
    }, (error, response, body) => {
        if(error) return console.log(error)
        //console.log(response)
        body = JSON.parse(body)
        let type
        if(event == "type" && body) {
            if(data == "stock"){
                type="N/A"
            } else if(data == "crypto"){ 
                type="crypto" 
            }
            body.forEach(element => {
                if(element.type == type){
                    symbol.push(element)
                }
            })
            symbols.emit("type", symbol)
        }

        if(event == "all" && body) {
            body.forEach(element => {
                symbol.push(element)
            })
            symbols.emit("type", symbol)
        }

        let results = []
        if(event == "random" && body) {
            let type = data.type
  
            if(type && type == "stock"){
                type="N/A"
            }
            if(type && type == "crypto"){ 
                type="crypto" 
            }
            body.forEach(element => {
                if(type && element.type==type){
                    results.push(element)
                } else {
                    results.push(element)
                }
            })
            const n = data.size
            const sample = results
                .map(x => ({ x, r: Math.random() }))
                .sort((a, b) => a.r - b.r)
                .map(a => a.x)
                .slice(0, n);
            symbols.emit("random", sample)

        }

    })

}

module.exports = Symbols;
