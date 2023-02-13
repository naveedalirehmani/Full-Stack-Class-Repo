const {Router} = require("express")
const {postData, getData} = require("../controllers/user.controller")

const postRoute = Router();

postRoute.post("/data", postData)
postRoute.get("/getdata", getData)

module.exports = postRoute;