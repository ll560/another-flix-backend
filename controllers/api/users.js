const User = require('../../models/User')
const bcrypt = require('bcrypt')
//Create a User
const create = async (req, res) => {
    try {
        const createdUser = await User.create(req.body)
        res.status(200).json(createdUser)
    } catch (e) {
        res.status(400).json({msg: e.message})
    }
}

//Find a user
const show = async (req, res) => {
    try {
        const foundUser = await User.findById(req.params.id)
        res.status(200).json(foundUser)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

//update a user
const update = async (req, res) => {
    try {
        //Pre and Post save() hooks are not executed on update() and findOneAndUpdate(), etc.
        //we need to handle our password hashing here and not in our pre-hook
        //the line below ensures that the password is hashed
        req.body.password = await bcrypt.hash(req.body.password, 10)
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedUser)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

//GET user's favorite
const getFavorites = async (req, res) => {
    try{
        const favorites = await User.findById(req.params.id).select('favorites')
        res.status(200).json(favorites)
    } catch(e){
        res.status(400).json({msg: e.message})
    }
}

module.exports = {
    create,
    show,
    update,
    getFavorites
}