const express = require('express')
const app = express()
const addition = require('./Addition')

let solution = addition(2, 9)
console.log(solution)

let port = 5000;
app.listen(port, () => {
    console.log(`Serve is listening on ${port}`)
})

