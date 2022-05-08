const studnetModel = require('../models/studentModel')
const collegeModel = require('../models/collegeModel')
const validators = require("validator")
const studentCreate = async (req, res) => {
  try {
    const data = req.body


    const { name, mobile, email, collegeName } = data
    let number = mobile.toString()

    console.log(typeof (number))
    if (!(email)) return res.status(400).send({ status: false, message: 'please enter the email' })

    if (!(validators.isEmail(email))) return res.status(400).send({ status: false, msg: 'plese enter valid email id' })
    let emailex = await collegeModel.findOne({ email: email })
    console.log(emailex.length)

    if (!emailex) return res.status(400).send({ status: false, message: 'email already registerd' })
    if(!name) return res.status(400).send({status:false, message: "please enter a name"})

    if (!mobile) return res.status(400).send({ status: false, mesggage: 'please enter the mobile number ' })

    if (!(validators.isMobilePhone(number))) return res.status(400).send({ status: false, message: 'please enter the valid mobile number' })
    let mobileex = await collegeModel.findOne({ mobile: mobile })
    console.log(mobileex)

    if (!mobileex) return res.status(400).send({ status: false, message: 'mobile number is already exists' })

    if (!collegeName) return res.status(400).send({ status: false, message: 'please enter the college name' })

    if ((typeof (collegeName) === String)) return res.status(400).send({ status: false, message: 'please enter the valid college name' })

    const college = await collegeModel.findOne({ name: collegeName }, { college_Id: 1 })
    const collegeId = college.college_Id
    const finaldetails = { collegeId, ...data }
    console.log(finaldetails)
    const student = await studnetModel.create(finaldetails)
    student
    res.status(201).send({status:true,mesggage:"student data create"})
  }
  catch (e) {
    res.status(500).send({ Status: false, error: e.message })
  }
}
module.exports.interns = studentCreate