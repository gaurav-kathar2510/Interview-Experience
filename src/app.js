const express = require("express");
require("./db/conn");
const app = express();
const port = process.env.PORT || 8000;
const path = require("path");
const hbs = require("hbs");
const Experiences = require("./models/Expriences");
app.use(express.json());
app.use(express.urlencoded({extended:false}))
const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");

app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);

app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/add",(req,res)=>{
    res.render("add");
})

app.post("/add",async(req,res)=>{
    try{
        const studentExperience = new Experiences({
            company : req.body.company,
            student :req.body.student,
            experience :req.body.experience
        })

        console.log(studentExperience);
        const exp = await studentExperience.save();
        res.render("index");
    }catch(e){
        // res.send(e);
        console.log(e);
    }
})

app.listen(port,()=>{
    console.log("successful");
})