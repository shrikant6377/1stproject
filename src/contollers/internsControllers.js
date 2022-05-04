const studnetModel=require('../models/studentModel')
const collegeModel=require('../models/collegeModel')
const validators=require("validator")
const studentCreate=async (req,res)=>{
    try{
    const data=req.body
   
 
    const {name,mobile,email,collegeName}=data

      console.log(collegeName)
    
    if(!(validators.isEmail(email)))return res.status(400).send({status:false,msg:'plese enter email id'})

    const college=await collegeModel.findOne({fullName:collegeName},{_id:1})
    const collegeId=college._id
    const finaldetails={collegeId,...data}
   console.log(finaldetails)
    const student=await studnetModel.create(finaldetails)
    student
    res.send(student)
    }
    catch(e){
        res.status(500).send({Status:false,error:e.message})
    }
}
module.exports.interns=studentCreate