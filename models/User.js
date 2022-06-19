const mogoose = require('mongoose')
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
    phone: Number,
    picture: String,
    active: Boolean,
    favorite:[]
}, {
    timestamps: true
})

module.exports = mogoose.model('User', userSchema)