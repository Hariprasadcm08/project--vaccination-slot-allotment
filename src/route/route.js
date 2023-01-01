const express= require("express")
const route=express.Router()
const {createUser,loginUser,slotRegistration}=require("../controller/userController")

route.post("/register",createUser)
route.post("/login",loginUser)
route.post("/user/:userId",slotRegistration)




module.exports=route