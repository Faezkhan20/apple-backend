import mongoose, { Schema } from "mongoose";


const user=new Schema({
    email:String,
    password:String,
    name:String,
    lastname:String,
    confirmPassword:String
})
export default mongoose.model("Apple-user",user)