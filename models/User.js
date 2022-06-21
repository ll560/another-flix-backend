const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: {
        type:String,
        require: true
    }, 
    lastName: {
        type:String,
        require: true
    },
    email:{
        type:String,
        trim: true,
        lowercase: true,
        require: true,
        unique:true
    },
    age: {
        type:Number,
        required: true
    },
    password: {
        type: String,
        trim: true,
        minlength: 3,
        maxlength: 255,
        require: true
    },
    phone: String,
    picture: String,
    active: Boolean,
    favorite:[{
        type: Schema.Types.ObjectId,
        ref: 'Movie'
    }]
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)