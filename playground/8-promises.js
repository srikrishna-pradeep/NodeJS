const { resolve } = require("path");

const doPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve([1,2,3])
    }, 2000)
})

doPromise.then((result)=>{
    console.log("Success ", result)
}).catch((error)=>{
    console.log("Error " + error)
})