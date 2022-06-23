const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const saltRounds = 10


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

userSchema.pre('save', async function(next){
    //only run this function if password was modified
    //if the password is not modified then return next
    if(this.isModified('password')) return next()
    //user updated password, code runs below
    this.password = await bcrypt.hash(this.password, saltRounds) //hash method turns the password into random strings
    return next()
})

module.exports = mongoose.model('User', userSchema)