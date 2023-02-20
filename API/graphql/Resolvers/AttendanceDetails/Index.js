const Attendance = require('../../../models/Attendance');
const { isNullorEmptyorUndefined } = require('../../Common/CommonMethods');


module.exports = {

 
    getAttendanceByID:async(args) => {
        return await Attendance.findById(args.ID);
    },

    getAttendanceList:async(args) => {
        return await Attendance.find().sort({CreatedAt:-1}).limit(args.amount);
    },

    ListAttendanceByStudentId:async(args) => {
        return await Attendance.find({StudentId:args.StudentId}).sort({CreatedAt:-1}).limit(args.amount);
    },

    createAttendance:async(args) => {

            var result  = {};
            var resultObj = {
                Id: null,
                StudentId:null,
                InTime:null,
                OutTime:null,
                Remarks: null,
                CreatedAt: null,
                IsActive: null,
            }

            var  FindResult =  await Attendance.findOne({"OutTime":null});

            if(args.AttendanceInput.TranType =="In" && FindResult == null)
            {
                
                const createAttendance = new Attendance({
                    StudentId: args.AttendanceInput.StudentId,
                    InTime: new Date().toISOString(),
                    OutTime: null,
                    Remarks: args.AttendanceInput.Remarks,
                    CreatedAt: new Date().toISOString(),
                    IsActive: true,
                });
    
                const res = await createAttendance.save(); //Mongo Saving

                result = {
                    id:res.id,
                    ...res._doc
                }
            }
            else if(args.AttendanceInput.TranType =="Out")
            {

                if(FindResult == null)
                {
                    resultObj.Remarks ="student not In flag",
                    result = resultObj;
                }
                else
                {
                 
                    var FindID = (FindResult._id).toString();
                    UpdateResult =  await Attendance.updateOne({"_id":FindID},{$set:{OutTime:new Date().toISOString()}});
                    var finalResult = await Attendance.findOne({"_id":FindID});
                    if(isNullorEmptyorUndefined(UpdateResult) && UpdateResult.modifiedCount)
                    {
                        result =  finalResult
                    }
                    else
                    {
                        if(!isNullorEmptyorUndefined(UpdateResult) &&  !UpdateResult.modifiedCount)
                        {
                            resultObj.Remarks ="Not Updated",
                            result =  resultObj;
                        }
                    }
                }
            }
            else
            {
                    resultObj.Remarks ="student Already In flag",
                    result =  resultObj;
            }

            return result
    },
    
    deleteAttendance:async(args) => 
    {
        const wasDeleted = (await Attendance.deleteOne({_id:args.ID})).deletedCount
        return  wasDeleted;
    }
}