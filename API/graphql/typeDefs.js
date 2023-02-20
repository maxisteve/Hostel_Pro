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

type UserMaster{
    Id: String,
    Name: String,
    UserName: String,
    Password: String,
    EmailId: String,
    PhoneNumber: String,
    UserType: String,
    Salt: String,
    CreatedAt: String,
    IsActive: Boolean,
}

type StudentDetail{
    Id:String,
    Name: String,
    Email: String,
    Phone: String,
    Address: String,
    Occupation: String,
    CompanyOrInstitution: String,
    GuardianName: String,
    GuardianPhone: String,
    GuardianEmail: String,
    City: String,
    State: String,
    Country: String,
    PinCode: String,
    Remarks: String,
    RoomId: String,
    CreatedAt: String,
    IsActive: Boolean,
}

type Attendance{
    Id: String,
    StudentId:String,
    InTime:String,
    OutTime:String,
    Remarks: String,
    CreatedAt: String,
    IsActive: Boolean,
}

type ListAttendanceByStudentIdInput{
    StudentId:String,
    amount:String,
}

type BillDetail{
    Id: String,
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
    IsActive: Boolean,
}

type BlockDetail{
    Id: String,
    Name: String,
    Remarks: String,
    CreatedAt: String,
    IsActive: Boolean,
}
type FloorDetail{
    Id: String,
    FloorName: String,
    FloorNumber: String,
    NoOfRooms: String,
    BlockId: String,
    CreatedAt: String,
    IsActive: Boolean,
}

type HostelDetail{
    Id: String,
    HostelName: String,
    HostelAddress: String,
    InchargeName: String,
    InchargeMailId: String,
    InchargePhone:String,
    GST:String,
    HostelPhone:String,
    HostelMailId: String,
    Remarks: String,
    CreatedAt: String,
    IsActive: Boolean,
}

type LoginHistory{
    Id: String,
    UserId:String,
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

input BillInput{
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
    IsActive: Boolean,
}

input BlockInput{
    Name: String,
    Remarks: String,
    CreatedAt: String,
    IsActive: Boolean,
}

input FloorInput{
    FloorName: String,
    FloorNumber: String,
    NoOfRooms: String,
    BlockId: String,
    CreatedAt: String,
    IsActive: Boolean,
}



input HostelInput{
    HostelName: String,
    HostelAddress: String,
    InchargeName: String,
    InchargeMailId: String,
    InchargePhone:String,
    GST:String,
    HostelPhone:String,
    HostelMailId: String,
    Remarks: String,
    CreatedAt: String,
    IsActive: Boolean,
}

input LoginInput{
    UserId:String,
    CreatedAt: String,
    IsActive: Boolean,
}

input StudentInput{
    Name: String,
    Email: String,
    Phone: String,
    Address: String,
    Occupation: String,
    CompanyOrInstitution: String,
    GuardianName: String,
    GuardianPhone: String,
    GuardianEmail: String,
    City: String,
    State: String,
    Country: String,
    PinCode: String,
    Remarks: String,
    RoomId: String,
}


input UserMasterInput{
    Name: String,
    UserName: String,
    Password: String,
    EmailId: String,
    PhoneNumber: String,
    UserType: String,
    Salt: String,
}

 

input StudentDetailInput{
    Id:String,
    Name: String,
    Email: String,
    Phone: String,
    Address: String,
    Occupation: String,
    CompanyOrInstitution: String,
    GuardianName: String,
    GuardianPhone: String,
    GuardianEmail: String,
    City: String,
    State: String,
    Country: String,
    PinCode: String,
    Remarks: String,
    RoomId: String,
    CreatedAt: String,
    IsActive: Boolean,
}

input AttendanceInput{
    StudentId:String,
    Remarks: String,
    TranType: String,
}


### get Methods [Read (GetbyId, List, Filters ) ]
type Query {

    ### Enquiry
    getEnquiryByID(ID:ID!) : Enquiry!
    getEnquiryList(amount:Int) : [Enquiry]

    ### Room
    getRoomByID(ID:ID!) : Room!
    getRoomList(amount:Int) : [Room]

    ### Bill
    getBillByID(ID:ID!) : BillDetail!
    getBillList(amount:Int) : [BillDetail]

    ### Block
    getBlockDetailsByID(ID:ID!) : BlockDetail!
    getBlockDetailsList(amount:Int) : [BlockDetail]

    ### Floor
    getFloorDetailsByID(ID:ID!) : FloorDetail!
    getFloorDetailsList(amount:Int) : [FloorDetail]

    ###  Hostel
    getHostelByID(ID:ID!) : HostelDetail!
    getHostelList(amount:Int) : [HostelDetail]

    ###  Login
    getLoginByID(ID:ID!) : LoginHistory!
    getLoginList(amount:Int) : [LoginHistory]

    ### Student
    getStudentByID(ID:ID!) : StudentDetail!
    getStudentList(amount:Int) : [StudentDetail]


    ### Attendance
    getAttendanceByID(ID:ID!) : Attendance!
    getAttendanceList(amount:Int) : [Attendance]
    ListAttendanceByStudentId(StudentId:String, amount:Int) : [Attendance]
    

    ### UserMaster
    getUserMasterByID(ID:ID!) : UserMaster!
    getUserMasterList(amount:Int) : [UserMaster]    


}


### Post Methods [create, update, Delete]
type Mutation{
    
    createEnquiry(enquiryInput:EnquiryInput):Enquiry!
    deleteEnquiry(ID:ID!):Boolean

    createRoom(roomInput:RoomInput):Room!
    deleteRoom(ID:ID!):Boolean

    createBillDetails(BillInput:BillInput):BillDetail!
    deleteBillDetails(ID:ID!):Boolean

    createBlockDetails(BlockInput:BlockInput):BlockDetail!
    deleteBlockDetails(ID:ID!):Boolean

    createFloorDetails(FloorInput:FloorInput):FloorDetail!
    deleteFloorDetails(ID:ID!):Boolean

    createAttendance(AttendanceInput:AttendanceInput):Attendance!
    deleteAttendance(ID:ID!):Boolean

    createHostelSetup(HostelInput:HostelInput):HostelDetail!
    deleteHostelSetup(ID:ID!):Boolean

    createStudentDetail(StudentDetailInput:StudentDetailInput):StudentDetail!
    deleteStudentDetail(ID:ID!):Boolean

    createUserMaster(UserMasterInput:UserMasterInput):UserMaster!
    deleteUserMaster(ID:ID!):Boolean

    
    createLoginHistory(LoginInput:LoginInput):LoginHistory!
    deleteLoginHistory(ID:ID!):Boolean


}`