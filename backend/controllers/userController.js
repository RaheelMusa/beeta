const  {userModel}  = require("../Models/models")
const bcyrpt= require('bcrypt')
const jwt = require('jsonwebtoken')

exports.register = async(req, res) =>{
    const {firstName, lastName, email, password, age, phone}  = req.body
    try {
        if(!firstName || !lastName || !email || !password || !age || !phone ){
            return res.status(402).json({message: "All field required"})
        }
        const existingUser = await userModel.findOne({email})
        if(existingUser){
            return res.status(500).json({message: "Email already exist"})
        }
        const hashedPassword = await bcyrpt.hash(password, 10)
        const registerUser = await userModel.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword,
            age: age,
            phone: phone
        })
        const token = jwt.sign({ email: registerUser.email, id: registerUser._id}, process.env.JWT_SECRET)
        
        return res.status(201).json({success: true, message: "User registered successfully",
        user:{
            email: registerUser.email, id: registerUser._id,
        },
        token})
        

    } catch (error) {
        return res.status(500).json({message: "An error occur while registering the user", error: error.message})
    }

}
exports.login = async(req, res) =>{
    const {email, password} = req.body
    try {
        const existingUser = await userModel.findOne({email})
        if(!existingUser){
            return res.status(404).json({message: "User not found."})
        }
        const matchedPassword = await bcyrpt.compare(password, existingUser.password)
        if(!matchedPassword){
            return res.status(500).json({message: "Invalid Credentials"})
        }
        const token =  jwt.sign({email:existingUser.email, id: existingUser._id},process.env.JWT_SECRET, {expiresIn: '3d'})

        return res.status(201).json({success: true, message: "User logged in successfully", user:{ id:existingUser._id, email: existingUser.email} , token})

        
    } catch (error) {
        return res.status(500).json({message: "An error eccur while user login", error: error.message})
    }
}
exports.changePassword = async(req, res) =>{
    const {oldPassword, newPassword, confirmPassword} = req.body
    try {
        if( !oldPassword || !newPassword || !confirmPassword){
            return res.status(500).json({message: "All fields are required"})
        }
        
        const user = req.user
        const verifyPassword = await bcyrpt.compare(oldPassword, user.password)
        if(!verifyPassword){
            return res.status(500).json({message: "password didn't matched"})
        }
        const newHashedPassword = await bcyrpt.hash(newPassword, 10)
        await userModel.findByIdAndDelete(user._id, {$set: {password: newHashedPassword}})
        return res.status(201).json({message: "Our password has been change successfully"})


    } catch (error) {
        return res.status(500).json({message: "An error occur while changing your password", error: error.message})
    }
}
exports.resetEmail = async(req, res) =>{
    try {
        const {email}= req.body
        if(!email){
            return res.status(404).json({message: "Email not found"})
        }
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(404).json({message: "User not found", error: error.message})
        }
        const secret = user._id + process.env.JWT_SECRET
        const token = jwt.sign({USERID: user._id}, secret,{expiresIn: '30min'})

        const link = `http://127.0.0.1:7000/api/v1/emailResetPassword/${user._id}/${token}`
        console.log(link)
        return res.status(201).json({
            success: true,
            message: "Reset password email sent... please check your email"
        })
        
    } catch (error) {
        return res.status(401).json({message: "An error occur while reseting your password", error: error.message})
    }
}
exports.resetPassword = async(req, res) =>{}