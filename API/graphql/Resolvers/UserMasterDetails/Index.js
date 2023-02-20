const UserMaster = require('../../../models/UserMaster');


module.exports = {

 
    getUserMasterByID:async(args) => {
        return await UserMaster.findById(args.ID);
    },

    getUserMasterList:async(args) => {
        return await UserMaster.find().sort({CreatedAt:-1}).limit(args.amount);
    },

 
    createUserMaster:async(args) => {
            console.log(args);
            const createUserMaster = new UserMaster({
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


            const res = await createUserMaster.save(); //Mongo Saving

            console.log(res)
            return {
                id:res.id,
                ...res._doc
            }
        },
        deleteUserMaster:async(args) => 
        {
            const wasDeleted = (await UserMaster.deleteOne({_id:args.ID})).deletedCount
            return  wasDeleted;
        }
}