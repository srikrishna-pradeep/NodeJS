const express = require('')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')
const request = require('request')


const address = process.argv[2]


if(address){
       geocode(address, (error, {latitute, longitude, location})=>{
        if(error){
            return console.log('Error: '+ error)
        }

        forecast(latitute, longitude, (error, forecastData) => {
            if(error){
                return console.log('Error', error)
            }
            console.log(location)
            console.log(forecastData)
        })
    })
}
else{
    console.log('Please provide an address')
}