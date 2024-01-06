const validator = require('validator')
const getNotes = require('./notes.js')
const chalk = require('chalk')



const app = getNotes()
console.log(app)

console.log(validator.isEmail('srikrishnapradeep99@gmail.com'))
console.log(chalk.yellow.bgGreen.bold("Success!"))


console.log(process.argv[2])




// const fs = require('fs')
// const ut = require('./utils.js')

// console.log(ut(4,-2))
// // fs.writeFileSync('notes.txt', 'My Name is Pradeep')
// // fs.appendFileSync('notes.txt', '. My age is 22')