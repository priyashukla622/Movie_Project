const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    genre: [String],  
    rating: Number,
    poster: String
});
const movieData = mongoose.model("Movie", movieSchema);

module.exports = movieData; 
