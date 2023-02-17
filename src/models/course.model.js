const mongoose = require('mongoose');

const CourseSchema = new Schema({
    courseID: {
        type: String,
        required: true, 
        unique: true
    }, 
    universityID: {
        type: String,
        required: true 
    }, 
    domain: {
        type: String,
        enum: ['MATH', 'CHEM', 'PHY', 'CS'],
        required: true
    }, 
    gist: {
        type: String, 
    }
})

const Course = new mongoose.model("Course", CourseSchema);
module.exports = Course;