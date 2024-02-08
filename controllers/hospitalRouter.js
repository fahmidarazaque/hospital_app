const express=require("express")
const hospitalModel=require("../models/hospitalModel")


const router=express.Router()

router.post("/hospital_add",async(req,res)=>{
    let data=req.body
    let hospital=new hospitalModel(data)
    let result=await hospital.save()
    res.json({
        status:"success"
    })
})
router.get("/hospital_view",async(req,res)=>{
    let data=await hospitalModel.find()
    res.json(data)
    res.send("hello")

})
module.exports=router