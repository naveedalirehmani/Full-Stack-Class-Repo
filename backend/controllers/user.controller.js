const userModel = require("../schemas/comment.schema")
const mongoose = require("mongoose")

const postData = async (req, res) =>{
    const {userid, username , comment} = req.body
    

    try {
        if(!username){
            res.status(400).send({
                message : "username required"
            })
            
        }
        else{
            const data =  new userModel({
                userid,
                username,
                comment
            })
            
        
            const result = await data.save()
            console.log(result)
            res.send(result)
        }
    
        
    } catch (error) {
        res.status(404).send({
            message : "Data not stored"
        })
    }

}

const getData = async(req, res) =>{
    const data = await userModel.find()

    res.send(data)
}


module.exports = {
    postData,
    getData,
}