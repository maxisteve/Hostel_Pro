const StudentDetail = require('../../../models/StudentDetail');


module.exports = {

 
    getStudentDetailByID:async(args) => {
        return await StudentDetail.findById(args.ID);
    },

    getStudentDetailList:async(args) => {
        return await StudentDetail.find().sort({CreatedAt:-1}).limit(args.amount);
    },

 
        createStudentDetail:async(args) => {

            console.log(args);

            const createStudentDetail = new StudentDetail({
                Name: args.StudentInput.Name,
                Phone: args.StudentInput.Phone,
                Email: args.StudentInput.Email,
                Occupation: args.StudentInput.Occupation,
                CompanyOrInstitution: args.StudentInput.CompanyOrInstitution,
                Address: args.StudentInput.Address,
                City: args.StudentInput.City,
                State: args.StudentInput.State,
                Country: args.StudentInput.Country,
                PinCode: args.StudentInput.PinCode,
                Remarks: args.StudentInput.Remarks,
                CreatedAt: new Date().toISOString(),
                IsActive: true,
            });


            const res = await createStudentDetail.save(); //Mongo Saving

            console.log(res)
            return {
                id:res.id,
                ...res._doc
            }
        },
        deleteStudentDetail:async(args) => 
        {
            const wasDeleted = (await StudentDetail.deleteOne({_id:args.ID})).deletedCount
            return  wasDeleted;
        }
}