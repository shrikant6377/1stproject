const collegeModel=require('../models/collegeModel')
const createcollege=async (req,res)=>{
    try{
    const data=req.body
    const {name,funllName,logoLink}=data
    console.log(name)
    if(!name) return res.status(400).send({status:false,msg:'please enter the college Name'})
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