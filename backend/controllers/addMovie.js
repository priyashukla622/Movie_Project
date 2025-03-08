const movieData=require("../model/movieList")

const addMovieList=async(req,res)=>{
    const{title,year,genre,rating,poster}=req.body;
    try{
        if(!title || !year || !genre || !rating || !poster){
            return  res.status(400).json({message:"All field are requieds"})
        }
        const movieList= new movieData({
            title,
            year,
            genre,
            rating,
            poster
        })
        await movieList.save();
        res.status(200).json({message:"Movie added successfully", movieList})

    }catch(error){
        console.log("hello",error)
        res.status(400).json({message:"error adding movie"})
    }
}
module.exports=addMovieList;