const BillDetails = require('../../../models/BillDetails');


module.exports = {

 
    getBillDetailsByID:async(args) => {
        return await BillDetails.findById(args.ID);
    },

    getBillDetailsList:async(args) => {
        return await BillDetails.find().sort({CreatedAt:-1}).limit(args.amount);
    },

 
        createBillDetails:async(args) => {

            console.log(args);

            const createBillDetails = new BillDetails({
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


            const res = await createBillDetails.save(); //Mongo Saving

            console.log(res)
            return {
                id:res.id,
                ...res._doc
            }
        },
        deleteBillDetails:async(args) => 
        {
            const wasDeleted = (await BillDetails.deleteOne({_id:args.ID})).deletedCount
            return  wasDeleted;
        }
}