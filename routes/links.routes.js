const Router=require('express').Router();
 const modelApp=require('../models/modelApp')

 Router.get('/',async(req,res)=>{
  const employees=  await modelApp.find({})
     res.render('crud',{employees})
 })
 Router.post('/Add-employee',async(req,res)=>{
    await modelApp.insertMany({firstname:req.body.firstname,
        lastname:req.body.lastname,salary:req.body.salary,
        email:req.body.email,password:req.body.password})
    
     res.redirect('/')
   })
   Router.get('/delete/:id',async(req,res)=>{
       await modelApp.findByIdAndDelete({_id:req.params.id})
       res.redirect('/')
   })
   Router.get('/edit/:id',async(req,res)=>{
   const data= await modelApp.findOne({_id:req.params.id})
    res.render('editForm',{data})
})
Router.post('/edit-employee/:id',async(req,res)=>{
    await modelApp.findByIdAndUpdate({_id:req.params.id},{firstname:req.body.firstname,
        lastname:req.body.lastname,salary:req.body.salary,
        email:req.body.email,password:req.body.password})
    
     res.redirect('/')
   })
module.exports=Router
