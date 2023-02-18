const {gql} = require('apollo-server');

module.exports=gql`

### Response Object
type Enquiry{
    Name: String,
    Phone: String,
    Email: String,
    Occupation: String,
    CompanyOrInstitution: String,
    Address: String,
    City: String,
    State: String,
    Country: String,
    PinCode: String,
    Remarks: String,
    CreatedAt: String,
    IsActive: Boolean,
}

type Room{
    Id:String,
    StudentId: String,
    EBCharge: String,
    EBUnit: String,
    EBLastUnit: String,
    Fees: String,
    Status: String,
    Date: String,
    PaidDate: String,
    Remarks: String,
    CreatedAt: String,
    IsActive: Boolean
}

### Input Object

input EnquiryInput{
    Name: String,
    Phone: String,
    Email: String,
    Occupation: String,
    CompanyOrInstitution: String,
    Address: String,
    City: String,
    State: String,
    Country: String,
    PinCode: String,
    Remarks: String,
}

input RoomInput{
StudentId: String,
EBCharge: String,
EBUnit: String,
EBLastUnit: String,
Fees: String,
Status: String,
Date: String,
PaidDate: String,
Remarks: String
}


### get Methods [Read (GetbyId, List, Filters ) ]
type Query {
    enquiry(ID:ID!) : Enquiry!
    getEnquiry(amount:Int) : [Enquiry]

    room(ID:ID!) : Room!
    getRoom(amount:Int) : [Room]
}


### Post Methods [create, update, Delete]
type Mutation{
    createEnquiry(enquiryInput:EnquiryInput):Enquiry!
    deleteEnquiry(ID:ID!):Boolean

    createRoom(roomInput:RoomInput):Room!
    deleteRoom(ID:ID!):Boolean

}
`