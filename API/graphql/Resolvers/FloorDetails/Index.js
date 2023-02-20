const FloorDetails = require('../../../models/FloorDetails');


module.exports = {

 
    getFloorDetailsByID:async(args) => {
        return await FloorDetails.findById(args.ID);
    },

    getFloorDetailsList:async(args) => {
        return await FloorDetails.find().sort({CreatedAt:-1}).limit(args.amount);
    },

 
        createFloorDetails:async(args) => {

            console.log(args);

            const createFloorDetails = new FloorDetails({
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


            const res = await createFloorDetails.save(); //Mongo Saving

            console.log(res)
            return {
                id:res.id,
                ...res._doc
            }
        },
        deleteFloorDetails:async(args) => 
        {
            const wasDeleted = (await FloorDetails.deleteOne({_id:args.ID})).deletedCount
            return  wasDeleted;
        }
}