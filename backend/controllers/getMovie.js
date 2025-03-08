const mongoose=require("mongoose")
const movieData=require("../model/movieList")
const getAllMovie=async(req,res)=>{
    try{
        const getMovies=await movieData.find()
        if (getMovies.length === 0) {
            console.log(getMovies)
            return res.status(404).json({message:"Movie not found"})
        }
        res.status(200).json({message:"All movie get successfully",getMovies});
    }catch(error){
        console.log(error)
        res.status(400).json({message:"unable to fetch movie", error:error.message})
    }
}
const movieList=async(req,res)=>{
    const { id } = req.params; 
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid Movie ID" });
    }
    const getOneMovie=await movieData.findById(id)
    if(!getOneMovie){
        return res.status(404).json({message:"Movie not found"})
    }
    res.status(200).json({message:"movie get successfully",getOneMovie})
}
module.exports={getAllMovie,movieList}