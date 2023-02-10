const userModel = require("../schemas/user.schema")
const mongoose = require("mongoose")

const postData = async (req, res) =>{
    const {userid, username , comment} = req.body
    
    const data =  new userModel({
        userid,
        username,
        comment
    })


    const result = await data.save()
    console.log(result)

    res.send(result)

}

const getData = async(req, res) =>{
    const data = await userModel.find()

    res.send(data)
}


module.exports = {
    postData,
    getData,
}