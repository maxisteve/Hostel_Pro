const HostelSetup = require('../../../models/HostelSetup');


module.exports = {

 
    getHostelSetupByID:async(args) => {
        return await HostelSetup.findById(args.ID);
    },

    getHostelSetupList:async(args) => {
        return await HostelSetup.find().sort({CreatedAt:-1}).limit(args.amount);
    },

 
        createHostelSetup:async(args) => {

            console.log(args);

            const createHostelSetup = new HostelSetup({
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


            const res = await createHostelSetup.save(); //Mongo Saving

            console.log(res)
            return {
                id:res.id,
                ...res._doc
            }
        },
        deleteHostelSetup:async(args) => 
        {
            const wasDeleted = (await HostelSetup.deleteOne({_id:args.ID})).deletedCount
            return  wasDeleted;
        }
}