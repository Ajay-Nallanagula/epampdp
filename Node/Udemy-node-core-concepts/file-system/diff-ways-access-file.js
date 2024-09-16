const fs = require('node:fs/promises')

console.log("****START:Access fliles using Promises***")

fs.copyFile("diffWaysAccessFile.txt", "copyfile-promise.txt")
    .then(res => {
        console.log("****END:Access fliles using Promises***\n\n")
    })
    .catch(error => {
        console.log(error)
    })


console.log("****START:Access fliles using callbacks***")
const fsCallbacks = require("node:fs")
fsCallbacks.copyFile("diffWaysAccessFile.txt", "copyfile-callbacks.txt", error => {
    if (error) console.log(error)
    console.log("****END :Access fliles using callbacks***")
})

console.log("****START:Access fliles using Synchronously***")
console.log(`You use File synchrously when you are bootstrapping your 
    application and you have a requirement to read a config file in that 
    cases we use file operation synchronosly`)
console.log(`In sync mode when there is an error app will crash, 
    node process will terminate`)
const fsSync = require("node:fs")

fsSync.copyFileSync("diffWaysAccessFile.txt", "copyfile-synchronously.txt")
