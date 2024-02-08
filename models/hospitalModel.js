const mongoose=require("mongoose")

const hospitalSchema=new mongoose.Schema(
    {
        name:String,
        address:String,
        phoneno:String,
        place:String
    }
)
module.exports=mongoose.model("hospital",hospitalSchema)