let fs = require('fs')

let emp = {
    name: 'Ajay'
}
fs.writeFile('employee.json', JSON.stringify(emp), () => {
    console.log('saved!!')
})