const request = require('request')

// Weather stack api to get the weather data for the specified longitute and latitute
// const weather_url = 'http://api.weatherstack.com/current?access_key=dac221a42220df6187d6d77d9791030f'+
// '&query=37.8267,-122.4233&units=f'

// request({url: weather_url, json:true}, (error, response, body)=>{

//     if(error){
//         console.log('Unable to connect the weather service')
//     }else if(body.error){
//         console.log(body.error.info)
//     }else{
//         console.log(body.current.weather_descriptions[0]+'. It is currently '+ body.current.temperature+ 
//         ' degreees out. It feels like '+ body.current.feelslike)
//     }

// })


const forecast = (latitute, longitude, callback)=>{

    const forecastUrl = 'http://api.weatherstack.com/current?access_key=dac221a42220df6187d6d77d9791030f&query='+ 
    latitute +','+longitude+'&units=f'

    console.log(forecastUrl)

    request({url: forecastUrl, json:true}, (error, response, body)=>{

        if(error){
            callback('Unable to connect the weather service', undefined)
        }else if(body.error){
            callback(body.error.info, undefined)
        }else{
            callback(undefined, body.current.weather_descriptions[0]+'. It is currently '+ 
            body.current.temperature+ ' degreees out. It feels like '+ body.current.feelslike)
        }
    })
}



module.exports= forecast
