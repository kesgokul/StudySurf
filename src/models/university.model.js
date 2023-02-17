const mongoose = require('mongoose');

const UniversityScehma = new Schema({
    emailSuffix : {
        type: String, 
        unique: true, 
        required: true,  
        match: [/@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
    }, 
    universityID: {
        type: String, 
        required: true
    },  
    universityName: {
        type: String, 
        required: true
    }, 
    details: {
        type: String
    }
})


const University = mongoose.model("University", UniversitySchema);
module.exports = University;