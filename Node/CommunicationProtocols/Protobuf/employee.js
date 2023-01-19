const fs = require("fs")
const employees = [
    {
        name: 'Ajay',
        sal: '100'
    },
    {
        name: 'Ajay2',
        sal: '200'
    },
    {
        name: 'Ajay3',
        sal: '300'
    }
]

fs.writeFileSync("empData.json", JSON.stringify(employees))