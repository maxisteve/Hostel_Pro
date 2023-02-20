const Attendance = require('../../../models/Attendance');


module.exports = {

 
    getAttendanceByID:async(args) => {
        return await Attendance.findById(args.ID);
    },

    getAttendanceList:async(args) => {
        return await Attendance.find().sort({CreatedAt:-1}).limit(args.amount);
    },

 
        createAttendance:async(args) => {

            console.log(args);

            const createAttendance = new Attendance({
                Name: args.enquiryInput.Name,
                Phone: args.enquiryInput.Phone,
                Email: args.enquiryInput.Email,
                Occupation: args.enquiryInput.Occupation,
                CompanyOrInstitution: args.enquiryInput.CompanyOrInstitution,
                Address: args.enquiryInput.Address,
                City: args.enquiryInput.City,
                State: args.enquiryInput.State,
                Country: args.enquiryInput.Country,
                PinCode: args.enquiryInput.PinCode,
                Remarks: args.enquiryInput.Remarks,
                CreatedAt: new Date().toISOString(),
                IsActive: true,
            });


            const res = await createAttendance.save(); //Mongo Saving

            console.log(res)
            return {
                id:res.id,
                ...res._doc
            }
        },
        deleteAttendance:async(args) => 
        {
            const wasDeleted = (await Attendance.deleteOne({_id:args.ID})).deletedCount
            return  wasDeleted;
        }
}