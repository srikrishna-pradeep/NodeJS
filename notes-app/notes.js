const fs = require('fs')
const chalk = require('chalk')




const addNote = (title, body) => {
    const notes = loadNotes()


    // const duplicateNotes = notes.filter((note) => note.title === title)
    // or
    // const duplicateNotes = notes.filter(function(note){
    //     return note.title === title
    // })
    // return all notes that are equal to condition
    

    //return the first duplicate note
    const duplicateNote = notes.find((note)=>note.title = title)

    if(!duplicateNote){
        notes.push({
        title: title,
        body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("Added new Note"))
    }
    else{
        console.log(chalk.red.inverse("Note title is already taken"))
    }
    

}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    // const notesToKeep = notes.filter(function(note){
    //     return note.title !== title
    // })


    if(notesToKeep.length < notes.length){
        console.log(chalk.green.inverse('Note is removed!'))
        saveNotes(notesToKeep)
    }
    else{
        console.log(chalk.red.inverse('No note found!'))
    }
}


const listNodes = ()=>{
    const notes = loadNotes()

    console.log(chalk.inverse('Your Notes.....'))

    notes.forEach((note) =>{
        console.log(note.title)
    })
}



const readNote = (title)=>{
    const notes = loadNotes()

    const note = notes.find((note)=> note.title === title)

    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }else{
        console.log(chalk.red.inverse('Note not found'))
    }



}

const saveNotes =(notes) =>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.json", dataJSON)
}


const loadNotes = () =>{
    try{
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}


module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNodes: listNodes,
    readNote: readNote
}