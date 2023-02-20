const LoginHistory = require('../../../models/LoginHistory');


module.exports = {

 
    getLoginHistoryByID:async(args) => {
        return await LoginHistory.findById(args.ID);
    },

    getLoginHistoryList:async(args) => {
        return await LoginHistory.find().sort({CreatedAt:-1}).limit(args.amount);
    },

 
        createLoginHistory:async(args) => {

            console.log(args);

            const createLoginHistory = new LoginHistory({
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


            const res = await createLoginHistory.save(); //Mongo Saving

            console.log(res)
            return {
                id:res.id,
                ...res._doc
            }
        },
        deleteLoginHistory:async(args) => 
        {
            const wasDeleted = (await LoginHistory.deleteOne({_id:args.ID})).deletedCount
            return  wasDeleted;
        }
}