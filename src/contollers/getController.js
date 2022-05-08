const { builtinModules } = require('module')
const collegeModel = require('../models/collegeModel')
const internModel = require('../models/studentModel')
const getdata = async (req, res) => {
    try {
        const data = req.query.collegeName
        if (!data) return res.status.send({ status: false, message: 'please enter the college name' })
        if (!(typeof (data) !== String)) return res.status(400).send({ status: false, message: 'please provid valid college name' })

        const collegeDetails = await collegeModel.find({ name: data })
        if (!collegeDetails) return res.status(400).send({ status: false, message: 'college is not present in the data base' })

        const student = await internModel.find({ collegeId: collegeDetails[0]._id })
        res.send({ status: true, collegeDetails, interests: student })


    }
    catch (e) {
        res.status(500).send( {status:false,message:err})

    }
}
module.exports.getdata = getdata

