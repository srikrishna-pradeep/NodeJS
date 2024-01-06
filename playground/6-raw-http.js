const http = require('http')



const url = 'http://api.weatherstack.com/current?access_key=dac221a42220df6187d6d77d9791030f&query=New%20York'


const request = http.request(url, (response)=>{
    let data = ''
    response.on('data', (chunk)=>{
        data = data + chunk.toString()
        // console.log(chunk)
    })

    response.on('end', ()=>{
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error)=>{
    console.log('Error: '+ error)
})

request.end()