const mongoose = require('mongoose');

const UserSchema = new Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    }, 
    name: {
        type: String,
        lowercase: true, 
    },
    rollno: {
        type: String,  
        trim: true, 
    },  
    userType: {
        type: String, 
        enum: ['TEACHER', 'STUDENT'],
        required: true
    }, 
    contact: {
        type: Number,
        validate: {
            validator: function(v) {
                return /d{10}/.test(v);
            },
            message: '{VALUE} is not a valid 10 digit number!'
        }
    }, 
    universityID: {
        type: String, 
        required: true
    }, 
    facultyID: {
        type: String, 
    }, 
    courses: {
        type: [String],
    }
})


const User = mongoose.model("User", UserSchema);
module.exports = User;