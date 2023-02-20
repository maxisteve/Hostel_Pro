const BillDetails = require('../../../models/BillDetails');
const StudentDetail = require('../../../models/StudentDetail');


module.exports = {

 
    getBillDetailsByID:async(args) => {
        return await BillDetails.findById(args.ID);
    },

    getBillDetailsList:async(args) => {
        return await BillDetails.find().sort({CreatedAt:-1}).limit(args.amount);
    },

 
    PayBill:async(args) => {

            var resultObj={
                StudentId: args.BillInput.StudentId,
                EBCharge: null,
                EBUnit: null,
                EBLastUnit: null,
                Fees: null,
                Status: null,
                Date: null,
                PaidDate: null,
                Remarks: null,
                CreatedAt: null,
                IsActive: null,
            }
            var res = null;
            var resultBill = await BillDetails.findOne({Date:args.BillInput.Date, StudentId:args.BillInput.StudentId}).sort({CreatedAt:-1}).limit(args.amount);

            if(resultBill!=null)
            {
                var UpdateResult = await BillDetails.updateOne({_id:resultBill._id},{$set:{
                    EBCharge: args.BillInput.EBCharge,
                    EBUnit: args.BillInput.EBUnit,
                    EBLastUnit: args.BillInput.EBLastUnit,
                    Fees: args.BillInput.Fees,
                    Status: args.BillInput.Status,
                    Date: args.BillInput.Date,
                    PaidDate: new Date().toISOString(),
                    Remarks: args.BillInput.Remarks,
                }})
                

                const createBillDetails = new BillDetails({
                    StudentId: args.BillInput.StudentId,
                    EBCharge: args.BillInput.EBCharge,
                    EBUnit: args.BillInput.EBUnit,
                    EBLastUnit: args.BillInput.EBLastUnit,
                    Fees: args.BillInput.Fees,
                    Status: args.BillInput.Status,
                    Date: args.BillInput.Date,
                    PaidDate: args.BillInput.PaidDate,
                    Remarks: args.BillInput.Remarks,
                    CreatedAt: new Date().toISOString(),
                    IsActive: true,
                });
    
                 res = await createBillDetails.save(); //Mongo Saving
                 resultObj={
                    id:res.id,
                    ...res._doc
                 }
            }
            else if(resultBill!=null) {
                resultObj.Remarks = "Already Paid";
            }

            return  resultObj
        },


        
        createBillDetails:async(args) => {

            var res = null;
 
               var StudentDetailsList =await StudentDetail.find().sort({CreatedAt:-1})

               StudentDetailsList.map(async function(objStudentDetail){

                const createBillDetails = new BillDetails({
                    StudentId: objStudentDetail._id,
                    EBCharge: null,
                    EBUnit: null,
                    EBLastUnit: null,
                    Fees: args.objStudentDetail.Fees,
                    Status: "UnPaid",
                    Date: "FEB 2023",
                    PaidDate: null,
                    Remarks: "New Bill",
                    CreatedAt: new Date().toISOString(),
                    IsActive: true,
                });
    
                 res = await createBillDetails.save(); //Mongo Saving
               })
                 resultObj={
                    id:res.id,
                    ...res._doc
                 }
         

            return  resultObj
        },


        deleteBillDetails:async(args) => 
        {
            const wasDeleted = (await BillDetails.deleteOne({_id:args.ID})).deletedCount
            return  wasDeleted;
        }
}