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



### get Methods [Read (GetbyId, List, Filters ) ]
type Query {
    enquiry(ID:ID!) : Enquiry!
    getEnquiry(amount:Int) : [Enquiry]
}


### Post Methods [create, update, Delete]
type Mutation{
    createEnquiry(enquiryInput:EnquiryInput):Enquiry!
    deleteEnquiry(ID:ID!):Boolean
}
`