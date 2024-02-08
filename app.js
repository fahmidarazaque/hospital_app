const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const hospitalRoutes=require("./controllers/hospitalRouter")
const app=express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://fahmida123:fahmida123@cluster0.qw5qvsl.mongodb.net/hospitalDb?retryWrites=true&w=majority",
{
    useNewUrlParser:true
}
)

app.use("/api/hospital",hospitalRoutes)

app.listen(3006,()=>{
    console.log("server running")
})