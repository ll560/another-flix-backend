const Movie = require('../../models/Movie')

//Find all movies
const index = async (req, res) => {
    try{
        const movies = await Movie.find({})//find({}) is a way for mongoose to find the whole document 
        res.status(200).json(movies)
    }catch(e){
        res.status(400).json({msg: e.message})
    }
}

module.exports = {index}

 