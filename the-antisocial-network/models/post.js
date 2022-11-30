const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const postSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    release:{
        type: Number,
        default: function(){
            return new Date().getFullYear()
        }
    },
    name: {
        type: String,
        required:true
    }
})

module.exports = mongoose.model('Post', postSchema)