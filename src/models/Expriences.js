const mongoose = require("mongoose");

const experiencesSchema = new mongoose.Schema({
    company:{
        type:String,
        required:true,
        // lowercase:true
    },
    student:{
        type:String,
        required:true,
        // lowercase:true
    },
    experience:{
        type:String,
        required:true
    }

})

const Experiences = new mongoose.model("Experience",experiencesSchema);

module.exports = Experiences;