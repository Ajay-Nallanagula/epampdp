const fs = require('fs')
const path = require('path')
const filePath = './junkfile.txt'
/*
console.log(path.dirname(filePath))

fs.stat(filePath, (err, stats) => {
    console.log({ stats })
    console.log("isFile: ", stats.isFile())
    console.log("isDirectory: ", stats.isDirectory())
    console.log("isSymbolicLink: ", stats.isSymbolicLink())
})

fs.open(filePath, 'r+', (err, fileDescriptor) => {
    console.log({ err })
    console.log('fileDescriptor', fileDescriptor)
})

fs.open('writeDemo.txt', 'w', (err, fileDescriptor) => {
    console.log('Open file for writing,create if it do not exist')
    console.log('fileDescriptor', fileDescriptor)
})

fs.open('writeDemo.txt', 'wx', (err, fileDescriptor) => {
    console.log('FILE ALREADY EXISTS ,CANNOT WX:', err)
    console.log('Open file for writing,create if it do not exist')
    console.log('fileDescriptor', fileDescriptor)
})

fs.realpath('junkfile.txt', (err, resolvedPath) => {
    console.log({ resolvedPath })
})
*/
const masterNodePath = '../../MasteringNode'
const readDirectories = (path) => fs.readdir(masterNodePath, (err, files) => {
    console.log({ files })
    files.map((file) => {
        fs.stat(`${masterNodePath}\\${file}`, (err, stat) => {
            if (stat.isDirectory()) {
                //return console.log('FOUND DIRECTORY ' + file)
                return readDirectories(`${masterNodePath}\\${file}`)
            }
            return console.log('found file' + file)
        })
    })
})

readDirectories(masterNodePath)