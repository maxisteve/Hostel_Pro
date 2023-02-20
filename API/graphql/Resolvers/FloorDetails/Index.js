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
                FloorName: args.FloorInput.Name,
                FloorNumber: args.FloorInput.Phone,
                NoOfRooms: args.FloorInput.Email,
                BlockId: args.FloorInput.Occupation,
                Remarks: args.FloorInput.Remarks,
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