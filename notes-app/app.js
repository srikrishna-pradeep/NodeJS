const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')



// Create add command
yargs.command({
    command: 'add',
    describe : 'Add a new Note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type : 'string'
        },
        body : {
            describe: 'Note Body',
            demandOption: true,
            type : 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})


// Create remove command
yargs.command({
    command:'remove',
    describe: 'Remove a note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type : 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})



// create List Command
yargs.command({
    command:'list',
    describe: 'List your notes',
    handler(){
        notes.listNodes()
    }
})



// Create Read Command
yargs.command({
    command:'read',
    describe: 'Read a note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type : 'string'
        }
    },
    handler(argv){
        console.log('Reading a Note!')
        notes.readNote(argv.title)
    }
})


// console.log(process.argv)
yargs.parse()