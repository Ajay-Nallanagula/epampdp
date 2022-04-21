const yargs = require('yargs')
const chalk = require('chalk')
const { demandOption } = require('yargs')
const { type } = require('os')

//console.log(process.argv)

//Parse command line arguments with yargs package

const builder = () => ({
    title: {
        describe: 'default Title',
        demandOption: true,
        type: 'string'
    },
    body: {
        describe: 'default body',
        demandOption: true,
        type: 'string'
    }
})
const action = (args) => {
    console.log({ args })
    const msg = chalk.white.bgRed.bold(`Title: ${args.title} , Body: ${args.body}`)
    console.log(msg)
}

yargs.command('add', chalk.white.bgBlue.bold('Add a note here!!'), builder, action)
yargs.command('remove', chalk.white.bgBlue.bold('remove a note here!!'), builder, action)
yargs.command('list', chalk.white.bgBlue.bold('list a note here!!'), builder, action)
yargs.command('read', chalk.white.bgBlue.bold('read a note here!!'), builder, action)

//console.log(args.parse())
//console.log(yargs.argv)
yargs.parse()
