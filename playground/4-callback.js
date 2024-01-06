// setTimeout(()=> {
//     console.log('Two seonds up')
// } , 2000)


// const names = ['Pradeep', 'Sai Kiran']

// const shortNames = names.filter((name)=> name.length>=4)


// const geocode = (address, callback)=>{
//     setTimeout(()=>{
//         const data = {
//             latitute : 0,
//             longitute:0
//         }
//         callback(data)
//     }, 2000)
    
// }


// geocode('hello', (data)=>{
//     console.log(data)
// })




//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (a, b, callback)=>{
    setTimeout(() => {
        callback(a+b)
    }, 2000);
}


add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})
