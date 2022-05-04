const { builtinModules } = require('module')
const collegeModel=require('../models/collegeModel')
const internModel=require('../models/studentModel')
const getdata=async (req,res)=>
{
    try{
        const data=req.query.collegeName
        const collegeDetails=await collegeModel.find({name:data})

        const student=await internModel.find({collegeId:collegeDetails[0]._id})
        res.send({status:true,collegeDetails,nterests:student})
        // res.send(collegeDetails[0]._id)

    }
    catch(e){
        res.send(e.message)

    }
}
module.exports.getdata=getdata

