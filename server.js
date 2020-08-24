 const express=require('express')
 const bodyParser=require('body-parser').urlencoded({extended:false});
 const path=require('path')
 const mongoose=require('mongoose')


 const app=express()
 app.set('view engine','ejs')
 app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser)
const Routes=require('./routes/links.routes')
app.use(Routes)
mongoose.connect("mongodb+srv://route:route@mycluster.vldkj.mongodb.net/crudMongo",{useNewUrlParser:true,useUnifiedTopology:true});
 app.listen(process.env.PORT||3000,()=>{
     console.log('we are ready');
 })