const BlockDetails = require('../../../models/BlockDetails');


module.exports = {

 
    getBlockDetailsByID:async(args) => {
        return await BlockDetails.findById(args.ID);
    },

    getBlockDetailsList:async(args) => {

        var objBlock = await BlockDetails.find().sort({CreatedAt:-1}).limit(args.amount);
        objBlock[0].Id = objBlock[0]._id;
        console.log( objBlock[0]._id );
        
        return objBlock;
    },

 
        createBlockDetails:async(args) => {

            console.log(args);

            const createBlockDetails = new BlockDetails({
                Name: args.BlockInput.Name,
                Remarks: args.BlockInput.Remarks,
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