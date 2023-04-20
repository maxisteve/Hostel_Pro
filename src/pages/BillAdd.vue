<template>
  <div class="content">
    <div class="row">
      <div class="col-md-12">
        <bill-add :model="model"> </bill-add>
      </div>
    </div>
  </div>
</template>
<script>

import BillAdd from "./Bill/BillAdd.vue";
import axios from "axios";
export default {
  components: {
    BillAdd,
  },
  data() {
    return {
      model: {
        table2: {
        title: "Bill Details",
        subTitle:"With Student Information",
        columns: ["Student_Name","Phone", "EBCharge", "EBUnit", "EBLastUnit","Fees","Status","Date","PaidDate"],
        data: []
        },
        
        company: "Creative Code Inc.",
        email: "mike@email.com",
        username: "michael23",
        firstName: "Mike",
        lastName: "Andrew",
        address: "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09",
        city: "Melbourne",
        country: "Australia",

        about:null,
        RoomNumber:null,
        RoomType: null,
        NoOfOccupence: null,
        Floor:null,
        Block:null,
        Hostel:null,
        Fees:null,
      },
      user: {
        fullName: "Mike Andrew",
        title: "Ceo/Co-Founder",
        description: `Do not be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...`,
      },
    };
  },
  methods:{


    GetBillDetails() {
            let vm = this;
             
            try {
                axios({
                    method: "POST",
                    url: "graphql",
                    data: {
                        query: `query GetBillDetailsList($amount: Int) {
                                    getBillDetailsList(amount: $amount) {
                                      Id
                                      StudentId
                                      EBCharge
                                      EBUnit
                                      EBLastUnit
                                      Fees
                                      Status
                                      Date
                                      PaidDate
                                      Remarks
                                      StudentDetail {
                                      Id
                                      Name
                                      Email
                                      Phone
                                      Address
                                      Occupation
                                      CompanyOrInstitution
                                      GuardianName
                                      GuardianPhone
                                      GuardianEmail
                                      GuardianAddress
                                      City
                                      State
                                      Country
                                      PinCode
                                      Remarks
                                      RoomId
                                      CreatedAt
                                      IsActive
                                    }
                                      CreatedAt
                                      IsActive
                                    }
                                  }`,
                        variables: {
                          amount: 1000
                        }
                    },
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                    }
                }).then(response => {
                    if (response.data.data.getBillDetailsList != null) {
                        response.data.data.getBillDetailsList.map(function(key,value){
                          console.log(key,value)
                        })
                        // vm.EditOrder.DataModel.UIData.result = response.data.data.GetBillDetailsList;
                        if (response.data.data.getBillDetailsList != undefined && response.data.data.getBillDetailsList != null) {

                          var resultFormation = [];
                          response.data.data.getBillDetailsList.map(function (billDetails ){

                              var selectedData ={
                                Student_Name:billDetails.StudentDetail.Name,
                                Phone:billDetails.StudentDetail.Phone,
                                EBCharge:billDetails.EBCharge,
                                EBUnit:billDetails.EBUnit,
                                EBLastUnit:billDetails.EBLastUnit,
                                Fees:billDetails.Fees,
                                Status:billDetails.Status,
                                Date:billDetails.Date,
                                PaidDate:billDetails.PaidDate,
                              }
                              
                              resultFormation.push(selectedData);

                          })
                            vm.model.table2.data = resultFormation
                        }
                    } else if (response.data.errors && response.data.errors.length > 0) {
                        var error_data = "";
                        for (var i = 0; i < response.data.errors.length; i++) {
                            error_data = error_data + response.data.errors[i].message + "\n";
                        }
                        // vm.$toaster.error(error_data);
                    }
                }).catch(error => {
                    console.log(error);
                    // vm.$toaster.error(error);
                });
      } catch (error) {
                // vm.EditOrder.PageLoad = false;
                console.error(error);
                // vm.$toaster.error(error);
            }
        },
  },
  mounted() {
    this.GetBillDetails();

  }
};
</script>
<style></style>
