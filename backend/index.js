const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

//Setting up the app stuff
const app = express()
const port = process.env.PORT || 5000
app.use(cors())
app.use(express.json())

//Mongoose connection stuff
const uri = process.env.URI
mongoose.connect(uri)
const connection = mongoose.connection
connection.once('open', () => {
    console.log("MongoDB database connection established succesfully")
})

//Connecting to routes
const listingRouter = require('./routes/listing.route')
app.use('/listings', listingRouter)



//Start listening to port
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})