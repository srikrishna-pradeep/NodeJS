const express = require('express')
const path = require('path')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


// console.log(__dirname)
// console.log(__filename)
// console.log(path.join(__dirname, '../public'))


const app = express()
const port = process.env.PORT || 3000

// define paths for express config
const publicDir = path.join(__dirname, '../public')
const viewsDir = path.join(__dirname, '../templates/views')
const partialsDir = path.join(__dirname, '../templates/partials')


// setup handler engine and views
app.set('view engine', 'hbs')
app.set('views', viewsDir)
hbs.registerPartials(partialsDir)

// set up static directory to serve
app.use(express.static(publicDir))


app.get('', (req, res)=>{
    res.render('index',{
        title: 'Weather App',
        name: 'Pradeep'
    })

})


app.get('/about', (req, res)=>{
    res.render('about',{
        title: 'About Me',
        name: 'Pradeep'
    })

})


app.get('/help', (req, res)=>{
    res.render('help',{
        helpText:'This is a helpful text',
        title: 'Help',
        name: 'Pradeep'
    })

})


app.get('/weather', (req, res)=>{

    if(!req.query.address){
        return res.send({
            error: "you must provide the address in query"
        })
    }


    geocode(req.query.address, (error, {latitude, longitude, location}={})=>{
        if(error){
            return res.send({error})
        }

        forecast(latitude, longitude, (error, forecastData)=>{
            if(error){
                return res.send({error})
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })


        })
    })

    // res.send({
    //     forecast: 'It is warm',
    //     location: 'Hyderabad',
    //     address: req.query.address
    // })

})

app.get('/help/*', (req, res)=>{
    res.render('404', {
        errorMessage: 'help article not found',
        title: 'Help 404',
        name: 'Pradeep'
    })
})

app.get('*', (req, res)=>{
    res.render('404', {
        errorMessage: 'Page Not Found',
        title: '404',
        name: 'Pradeep'
    })
})


app.listen(port, ()=>{
    console.log('Server is up at port 3000')
})