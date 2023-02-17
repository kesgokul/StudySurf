const mongoose = require('mongoose');

const SubmissionSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    }, 
    status: {
        type: String, 
        enum: ['DUE', 'ONTIME', 'OVERDUE'],  
        required: true
    },  
    timestamp: {
        type: Date, 
        required: true
    }, 
    documentCID: {
        type: String, 
        required: true
    }
})

const ClassworkSchema = new mongoose.Schema({
    classworkID: {
        type: String,
        required: true, 
        unique: true
    }, 
    courseID: {
        type: String, 
        required: true,
    }, 
    submissionType: {
        type: String,  
        enum: ['FILE', 'TEXT']
    },
    dueDate: {
        type: Date, 
        required: true,
    },
    submissions: {
        type: [SubmissionSchema],
        required: true
    }
})

const Classwork = new mongoose.model("Classwork", ClassworkSchema);
module.exports = Classwork;