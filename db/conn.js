const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const DB =  process.env.DATABASE || 'mongodb://localhost:27017/mern-blog2' 
console.log(DB); 
mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=> console.log("DataBase Connected")).catch((err)=>{
    console.log(err);
}) 