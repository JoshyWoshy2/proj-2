const mongoose = require("mongoose")
require('dotenv').config()

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
})

const db = mongoose.connection

// console.log(process.env.DATABASE_URL)

db.on('error', function (error){
    console.log(error)
})

db.on('connected', function (){
    console.log(`Uplink established at ${db.host}:${db.port},
    May the light of the Emperor guide you.`)
})