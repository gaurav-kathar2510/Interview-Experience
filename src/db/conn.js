const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/iExperience").then(()=>{
    console.log("connction success");
}).catch((err)=>{
    console.log("no connection");
})