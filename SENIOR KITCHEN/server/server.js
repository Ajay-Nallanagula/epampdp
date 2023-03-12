const config = require('config')
const express = require('express')
const mongoose = require('mongoose')
const usersApi = require('./routes/users')
const menuApi = require('./routes/menu')
const excelApi = require('./routes/excel')
const fileUploadApi = require('./routes/fileupload')
const path = require('path')

const app = express()

//NOTE: Password should not have special characters, If yes then convert them to hexa 
const { password, cluster, dbname, username } = config.get("mongoCreds")
const connectionStr = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`
mongoose.connect(connectionStr, {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
).then((value) => console.log('Mongodb connected to Senior Kitchen DB'))
    .catch((err) => console.log('Connection Error', err))

//Check if your connection is established or not 
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {
//     console.log("Connected successfully");
// });

app.use(express.json())
app.use(express.static(__dirname + '/public'))
app.use('/api/users', usersApi)
app.use('/api/menu', menuApi)
app.use('/api/excel', excelApi)
app.use('/api/upload', fileUploadApi)

app.get('/', (req, res) => {
    res.send("Hello World!!!")
})

app.get('/api/ExcelFormat.JPG', (req, res) => {
    const filePath = path.join(__dirname, 'public', 'ExcelFormat.JPG')
    res.sendFile(filePath)
})

const port = 3001//process.env.port || config.get('defaultPort')

app.listen(port, () => {
    console.log('server is actively listening on http://localhost:3001')
})