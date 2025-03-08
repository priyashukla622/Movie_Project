const express=require("express")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const cors=require("cors")
require("dotenv").config(); 
const app=express();
const movieRoute=require("./routes/movieRoute")

const port = process.env.PORT;
const mongoURI = process.env.MONGODB_URL;
mongoose.connect(mongoURI)
.then(() => {
    console.log("MongoDB Connected Successfully!");

}).catch((err) => {
    console.error("MongoDB Connection Error:", err);
});
app.use(express.json())
app.use(cors())
app.use("/", movieRoute)
app.listen(port,()=>{
    console.log(`server is running on the port ${port}`)

})

