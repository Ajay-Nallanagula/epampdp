let fs = require('fs')

let data = require('./users.json')
//directly read as JSON 
console.log(data)

fs.readFile('users.json', 'utf-8', (err, data) => {
    console.log(data)
    console.log(data.id) // O/P undefined
    //readfile reads the data a as a string , not as an object 
    const formattedData = JSON.parse(data)
    console.log(formattedData.id)
})

fs.readdir('C:/', (err, data) => {
    console.log(data)
})