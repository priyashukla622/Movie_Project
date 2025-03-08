const express=require("express")
const addMovieList=require("../controllers/addMovie")
const {getAllMovie,movieList}=require("../controllers/getMovie")
const deleteMovieData=require("../controllers/deleteMovie")
const router = express.Router();

router.post("/movies",addMovieList)
router.get("/movies",getAllMovie)
router.get("/movie/:id",movieList);
router.delete("/movie/:id",deleteMovieData)

module.exports=router;    