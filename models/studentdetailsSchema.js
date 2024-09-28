const mongoose = require('mongoose');

const StudentDetailsSchema = new mongoose.Schema(
{
    username: { 
        type: String,
        required: true,
        unique: true
    },
    rollno: { 
        type: Number,
        required: true,
        unique: true
    },
    address: { 
        type: String,
        required: false,
        unique: false
    },
});

module.exports = mongoose.model('StudentDetails', StudentDetailsSchema);
