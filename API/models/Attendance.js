// HostelSetup.js
const {model, Schema} = require('mongoose');

const attendanceSchema = new Schema({
    Id: String,
    
    Remarks: String,
    CreatedAt: String,
    IsActive: Boolean,
});

module.exports = model('Attendance',attendanceSchema);