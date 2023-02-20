const BlockDetails = require('../../../models/BlockDetails');


module.exports = {

 
    getBlockDetailsByID:async(args) => {
        return await BlockDetails.findById(args.ID);
    },

    getBlockDetailsList:async(args) => {
        return await BlockDetails.find().sort({CreatedAt:-1}).limit(args.amount);
    },

 
        createBlockDetails:async(args) => {

            console.log(args);

            const createBlockDetails = new BlockDetails({
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


            const res = await createBlockDetails.save(); //Mongo Saving

            console.log(res)
            return {
                id:res.id,
                ...res._doc
            }
        },
        deleteBlockDetails:async(args) => 
        {
            const wasDeleted = (await BlockDetails.deleteOne({_id:args.ID})).deletedCount
            return  wasDeleted;
        }
}