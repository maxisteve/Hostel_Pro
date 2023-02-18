const Room = require('../../../models/Room');


module.exports = {

Query:{

    async room (_, args){
        return await Room.findById(args.ID);
    },

    async getRoomList (_, args){
        return await Room.find().sort({CreatedAt:-1}).limit(args.amount);
    },


},
Mutation:{
        async createRoom(_,args){

            console.log(args);


            const createRoom = new Room({
                StudentId: args.roomInput.StudentId,
                EBCharge: args.roomInput.EBCharge,
                EBUnit: args.roomInput.EBUnit,
                EBLastUnit: args.roomInput.EBLastUnit,
                Fees: args.roomInput.Fees,
                Status: args.roomInput.Status,
                Date: args.roomInput.Date,
                PaidDate: args.roomInput.PaidDate,
                Remarks: args.roomInput.Remarks,
                CreatedAt: new Date().toISOString(),
                IsActive: true,
            });


            const res = await createRoom.save(); //Mongo Saving

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