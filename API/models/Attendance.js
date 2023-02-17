// HostelSetup.js
const {model, Schema} = require('mongoose');

const attendanceSchema = new Schema({
    Id: String,
    StudentId: String,
    EBCharge: String,
    EBUnit: String,
    EBLastUnit: String,
    Fees: String,
    Status: String,
    Date: String,
    PaidDate: String,
    Remarks: String,
    CreatedAt: String,
    IsActive: Boolean,
});

module.exports = model('Attendance',attendanceSchema);