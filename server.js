const request = require('request')

request({
    method: 'get',
    url: 'https://api.iextrading.com/1.0/ref-data/symbols'
}, (error, response, body) => {
    if(error) return console.log(error)
    //console.log(response)
    let symbols = []
    body = JSON.parse(body)
    body.forEach(element => {
        if(element.type != "crypto")
            symbols.push(element.symbol)
            //console.log(element.symbol)
    })

    const n = 20
    const sample = symbols
        .map(x => ({ x, r: Math.random() }))
        .sort((a, b) => a.r - b.r)
        .map(a => a.x)
        .slice(0, n);
    console.log(sample)
})