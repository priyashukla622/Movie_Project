const movieData=require("../model/movieList");
const mongoose=require("mongoose")

const deleteMovieData=async(req,res)=>{
    try{
        const { id } = req.params; 
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(404).json({ message: "Invalid Movie ID" });
            }
            const movieName=await movieData.findByIdAndDelete(id)
            if(!movieName){
                return res.status(400).json({"message":"This movie not found"})
            }
            res.status(200).json({message:"movie deleted successfully",movieName})
    }catch(error){
        res.status(400).json({"message":"error is for fetching data",error:error.message})
    }
}
module.exports=deleteMovieData;