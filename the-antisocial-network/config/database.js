const mongoose = require("mongoose")

mongoose.connect(DATABASE_URL)

const db = mongoose.connection

db.on('connected', function (){
    console.log(`Uplink established at ${db.host}:${db.port},
    May the light of the Emperor guide you.`)
})