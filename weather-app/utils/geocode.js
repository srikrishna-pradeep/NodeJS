const request = require('request')


//  Map box api to get the latitute and longitude for specified location or area
// // Geocoding
// const geocode_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token='+
// 'pk.eyJ1IjoicHJhZGVlcC05OSIsImEiOiJja2ZvZms5Z24waDl5MnpwY2xlb2M1MG51In0.u4qv1YGNP5U4zKClxqyIDQ&limit=1'


// request({url: geocode_url, json:true}, (error, response, body)=>{

//     if(error){
//         console.log('Unable to connect to location services')
//     }else if(body.features.length === 0){
//         console.log('Unable to find the location. Please try another location')
//     }else{
//         const latitute = body.features[0].center[1]
//         const longitude = body.features[0].center[0]

//         console.log(latitute, longitude)
//     }
// })


const geocode = (address, callback)=>{
    const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address)+
    '.json?access_token=pk.eyJ1IjoicHJhZGVlcC05OSIsImEiOiJja2ZvZms5Z24waDl5MnpwY2xlb2M1MG51In0.'+
    'u4qv1YGNP5U4zKClxqyIDQ&limit=1'

    request({url: geocodeUrl, json:true}, (error, response, body)=>{
        
        if(error){
            callback('Unable to connect to location services', undefined)
        }else if(body.features.length === 0){
            callback('Unable to find the location. Please try another location', undefined)
        }else{
            callback(undefined, {
                latitute: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode 