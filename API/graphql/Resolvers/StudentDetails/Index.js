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