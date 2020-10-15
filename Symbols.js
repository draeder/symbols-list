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
            symbols.emit("results", symbol)
        }

        if(event == "all" && body) {
            body.forEach(element => {
                symbol.push(element)
            })
            symbols.emit("results", symbol)
        }

        let results = []
        if(event == "random" && body) {
            let type = data.type
            let n = data.size
            if(!type){type="all"}
  
            if(type && type == "stock"){
                type="N/A"
                body.forEach(element => {
                    if(type && element.type==type){
                        results.push(element)
                    }
                })
            }
            if(type && type == "crypto"){ 
                type="crypto"
                body.forEach(element => {
                    if(type && element.type==type){
                        results.push(element)
                    }
                })
            }
            if(type && type == "all" || !type){
                body.forEach(element => {
                    results.push(element)
                })
            }
            if(typeof(data)==="number"){
                n = data
            }
            const sample = results
                .map(x => ({ x, r: Math.random() }))
                .sort((a, b) => a.r - b.r)
                .map(a => a.x)
                .slice(0, n)

            symbols.emit("results", sample)

        }

        if(event == "find" && body) {
            let results = []
            if(typeof(data)==="object"){
                data.forEach(item => {
                    results.push(body.find(element => element.symbol == item))
                })
                symbols.emit("results", results)
            } else if (typeof(data)==="string"){
                const found = body.find(element => element.symbol == data)
                symbols.emit("results", found)
            }
        }

    })

}
module.exports = Symbols