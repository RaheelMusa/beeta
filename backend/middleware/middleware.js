const { userModel } = require("../Models/models");
const jwt = require('jsonwebtoken')

exports.checkUserAuth = async(req,res, next) =>{
  try {
    
    const { authorization } = req.headers
    if(!authorization || !authorization.startsWith('Bearer')){
        return res.status(404).json({message: "Unauthorized User"})
    }
    const token = authorization.split(" ")[1]
    const { id } = jwt.verify(token, process.env.JWT_SECRET)
    const user = await userModel.findById(id)
    console.log(token)
    if(!user){
        return res.status(404).json({message: "User not found"})
    }
    req.user = user
    console.log(req.user)
    next()
} catch (error) {
 return res.status(401).json( {
    message: "Authorization: Invalid Token"
 })   
}
}
