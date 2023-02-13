const UserModel = require("../schemas/user.schema");
const bycrypt = require("bcryptjs")
/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */

const Signup = async (req, res) => {
  const { username, email, password, confirm_password } = req.body;

    const hash = await bycrypt.hashSync(password, 10)
    console.log(hash)

  const user = new UserModel({
    username,
    email,
    password : hash,
    confirm_password,
  });

  await user.save();
  console.log(user);

  return res.status(201).json({
    message: "Signup successfull",
    status: true,
    user,
  });
};




const Login = async (req, res) => {

  const {email, username , password } = req.body
try {
  
  const user = await UserModel.findOne({email : email }||{  username : username})
  const isMatch = await bycrypt.compareSync(password, user.password)

  if(isMatch){
    res.status(200).send("login Sucessfully")
  }
  else{
    res.status(401).send("invaild password")
  }


} catch (error) {
  res.status(400).send("Invaild login details")
}


};







module.exports = {
  Signup,
  Login,
};
