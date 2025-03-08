const express=require("express")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const cors=require("cors")
PORT=3000;
const app=express();
const movieRoute=require("./routes/movieRoute")

const mongoUrl=(`mongodb+srv://priyashukla22:ViblLezj9bb2pKim@test-pro-db.kshgj.mongodb.net/Movie-Data?retryWrites=true&w=majority&appName=cluster0`)
mongoose.connect(mongoUrl)
.then(() => {
    console.log("MongoDB Connected Successfully!");

}).catch((err) => {
    console.error("MongoDB Connection Error:", err);
});

app.use(express.json())
app.use(cors())
app.use("/", movieRoute)


app.listen(PORT,()=>{
    console.log(`server is running on the port ${PORT}`)

})

