const collegeModel=require('../models/collegeModel')
const validator=require('validator')
const createcollege=async (req,res)=>{
    try{
    const data=req.body
    const {name,fullName,logoLink}=data
    console.log(name)
    if(!name) return res.status(400).send({status:false,msg:'please enter the college Name'})
    if(!fullName)return res.status(400).send({status:false,message:'please enter the fullname of the college'})
    if(!logoLink)return res.status(400).send({status:false,message:'please provide the link log link of the college'})
    if(!(validator.isURL(logoLink)))return res.status(400).send({status:false,message:'please enter valid link for logo'})
    const nameexist=await collegeModel.find({name:name})
    console.log(nameexist.length)
    if(nameexist!=0) return res.status(400).send({status:false,msg:'college is already exists in data base'})
    const college=await collegeModel.create(data)
    res.status(201).send({Status:true,college})
    }
    catch(e){
        res.status(500).send({status:false,error:e.message})
    }
}
module.exports.createcollege=createcollege