const fs = require("node:fs/promises");
const { Buffer } = require('node:buffer');



(async () => {
    const filePath = "./command.txt"
    const commands = {
        createFile: "create a file",
        deleteFile: "delete a file",
        renameFile: "rename a file",
        addToFile: "add to file",
    }

    async function readFileContents(commandFileHandler) {
        //Read the content of the file here, first the file should be opened 
        //Know the size of the file 
        const stats = await commandFileHandler.stat()
        //console.log(stats)
        const { size } = stats
        const buffer = Buffer.alloc(size)
        const offset = 0
        const position = 0
        const length = size

        //Read is an overloaded method which we can make use of 
        const content = await commandFileHandler.read(buffer, offset, length, position)
        console.log("Bytes Read: " + content.bytesRead)
        console.log("Content of file: " + content.buffer.toString("utf-8"))
        return content.buffer.toString("utf-8")
    }

    const createNewFile = async (newFilepath) => {
        try {
            const existingFileHandle = await fs.open(newFilepath, 'r')
            await existingFileHandle.close()
            return console.log(`The file already exists ${newFilepath}`)
        } catch (e) {
            if (e.code === "ENONET") {
                return console.log("The file already exists!")
            }
            const newFileHandle = await fs.open(newFilepath, 'w')
            await newFileHandle.close()
            return console.log(`The new file created at ${newFilepath}`)
        }
    }

    const deleteFile = async (filePath) => {
        try {
            await commandFileHandler.unlink(filePath)
            console.log(`file is deleted successfully!!!`)
        } catch (error) {
            if (e.code === "ENONET") {
                return console.log("The file already deleted!")
            }
            console.log(error)
        }
    }
    const renameFile = async (filePath) => {
        console.log(filePath)
        const filePathsArry = filePath.split(" to ")
        const oldFilePath = filePathsArry[0]
        const newFilepath = filePathsArry[1]
        console.log({ oldFilePath }, { newFilepath })
        try {
            await fs.rename(oldFilePath, newFilepath)
            console.log(`file renamed from ${oldFilePath} to ${newFilepath}`)
        } catch (error) {
            if (e.code === "ENONET") {
                return console.log("The file already rename!")
            }
            console.log(error)
        }
    }
    const addToFile = async (filePath) => {
        console.log(filePath)
        const arr = filePath.split(" : ")
        const file = arr[0]
        const content = arr[1]
        console.log({ file }, { content })
        try {
            await fs.appendFile(file, content)
            console.log("content added to file" + file)
        } catch (error) {
            if (e.code === "ENONET") {
                return console.log("content already added to file!")
            }
            console.log(error)
        }
    }

    //open the file for reading 
    const commandFileHandler = await fs.open(filePath, "r")

    //All the File System is inherited from EventEmitter , hence we can fire custom events 
    commandFileHandler.on("change", async () => {
        const command = await readFileContents(commandFileHandler)

        if (command.startsWith(commands.createFile)) {
            const contentInFile = command.substring(commands.createFile.length + 1)
            await createNewFile(contentInFile.substring(0, contentInFile.length - 1))
        }
        if (command.includes(commands.deleteFile)) {
            const fileToDelete = command.substring(commands.deleteFile.length + 1)
            await deleteFile(fileToDelete)
        }

        //rename a file <oldPath> to <newPath>
        if (command.includes(commands.renameFile)) {
            const renameFilePath = command.substring(commands.renameFile.length + 1)
            await renameFile(renameFilePath)
        }

        //add to file <path> : "your content here"
        if (command.includes(commands.addToFile)) {
            const addToFilePath = command.substring(commands.addToFile.length + 1)
            await addToFile(addToFilePath)
        }

    })

    //Using fs.watch we can watch an entire directory or one single file 
    const watcher = fs.watch(filePath)
    //watcher here is asyncIterator 
    for await (let event of watcher) {
        //We need to type some text in command.txt to see the console 
        //The event is fired multiple times , that is known issue 
        //It depends on OS and the Filesystem of the system .
        if (event.eventType === "change") {
            //Way 1: We can do like below , without EventEmitter
            //await readFileContents(commandFileHandler)

            //Way 2: EventEmitter Way
            commandFileHandler.emit("change")
        }
    }
    await commandFileHandler.close()
})();



