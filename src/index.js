const express = require('express')
const multer = require('multer');
const bodyParser = require('body-parser')
const route = require('./routes/route')
const mongoose = require('mongoose')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use( multer().any())

mongoose.connect("mongodb+srv://Shrikantkhare1:Shrikant@cluster0.qch0g.mongodb.net/project5?retryWrites=true&w=majority", {
        useNewUrlParser: true
    })

.then(() => console.log("MongoDb is connected"))
.catch(err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});