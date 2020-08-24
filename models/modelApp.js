const mongoose=require('mongoose')

let employeesSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    firstname:{type:String,require:true},
    lastname:{type:String,require:true},
    salary:{type:Number},
    email:{type:String,unique:true},
    password:{type:String}
    
})
const employee=mongoose.model('employee',employeesSchema)
module.exports=employee;