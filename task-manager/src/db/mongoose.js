const mongoose = require('mongoose')


const connectionUrl = 'mongodb://127.0.0.1:27017/task-manager-api' 

mongoose.connect(connectionUrl, {useNewUrlParser : true, useUnifiedTopology: true, useCreateIndex: true, 
    useFindAndModify:false})


