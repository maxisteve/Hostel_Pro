
// resolvers

const Enquiry = require('../models/Enquiry');


module.exports = {

Query:{

    async enquiry (_, args){
        return await Enquiry.findById(args.ID);
    },

    async getEnquiry (_, args){
        return await Enquiry.find().sort({CreatedAt:-1}).limit(args.amount);
    },


},
Mutation:{
        async createEnquiry(_,args){

            console.log(args);

            const createEnquiry = new Enquiry({
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


            const res = await createEnquiry.save(); //Mongo Saving

            console.log(res)
            return {
                id:res.id,
                ...res._doc
            }
        },
        async deleteEnquiry(_,args)
        {
            const wasDeleted = (await Enquiry.deleteOne({_id:args.ID})).deletedCount
            return  wasDeleted;
        }
    }
}