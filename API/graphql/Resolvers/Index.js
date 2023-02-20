// const { GraphQLUpload } = require("graphql-upload");
const EnquiryResolver = require("./Enquiry/Index")
const RoomResolver = require("./Room/index")
const BillDetailsResolver = require("./BillDetails/Index")
const AttendanceResolver = require("./AttendanceDetails/Index")
const BlockDetailsResolver = require("./Block/Index")
const FloorDetailsResolver = require("./FloorDetails/Index")
const HostelDetailsResolver = require("./HostelDetails/Index")
const LoginDetailsResolver = require("./LoginDetails/Index")
const StudentDetailsResolver = require("./StudentDetails/Index")
const UserDetailsResolver = require("./UserMasterDetails/Index")

module.exports = resolvers = {
    // Upload: GraphQLUpload,
    Query: {

        // Enquiry
        getEnquiryByID: (_, args) => EnquiryResolver.getEnquiryByID(args),
        getEnquiryList: (_, args) => EnquiryResolver.getEnquiryList(args),

        // Room
        getRoomByID: (_, args) => RoomResolver.getRoomByID(args),
        getRoomList: (_, args) => RoomResolver.getRoomList(args),

        // Bill
        getBillByID: (_, args) => BillDetailsResolver.getBillByID(args),
        getBillList: (_, args) => BillDetailsResolver.getBillList(args),

        // Block
        getBlockDetailsByID: (_, args) => BlockDetailsResolver.getBlockDetailsByID(args),
        getBlockDetailsList: (_, args) => BlockDetailsResolver.getBlockDetailsList(args),

        // Floor
        getFloorDetailsByID: (_, args) => FloorDetailsResolver.getFloorDetailsByID(args),
        getFloorDetailsList: (_, args) => FloorDetailsResolver.getFloorDetailsList(args),

        // Hostel
        getHostelByID: (_, args) => HostelDetailsResolver.getHostelByID(args),
        getHostelList: (_, args) => HostelDetailsResolver.getHostelList(args),

        // Login
        getLoginByID: (_, args) => LoginDetailsResolver.getLoginByID(args),
        getLoginList: (_, args) => LoginDetailsResolver.getLoginList(args),

        // Student
        getStudentByID: (_, args) => StudentDetailsResolver.getStudentByID(args),
        getStudentList: (_, args) => StudentDetailsResolver.getStudentList(args),

        //AttendanceResolver
        getAttendanceByID: (_, args) => AttendanceResolver.getAttendanceByID(args),
        getAttendanceList: (_, args) => AttendanceResolver.getAttendanceList(args),
        ListAttendanceByStudentId: (_, args) => AttendanceResolver.ListAttendanceByStudentId(args),

        //UserMaster
        getUserMasterByID: (_, args) => UserDetailsResolver.getUserMasterByID(args),
        getUserMasterList: (_, args) => UserDetailsResolver.getAttendanceList(args),



    },
    Mutation:{
        // Enquiry
        createEnquiry: (_, args) => EnquiryResolver.createEnquiry(args),
        deleteEnquiry: (_, args) => EnquiryResolver.deleteEnquiry(args),

        // Room
        createRoom: (_, args) => EnquiryResolver.createRoom(args),
        deleteRoom: (_, args) => EnquiryResolver.deleteRoom(args),

        // Bill
        createBillDetails: (_, args) => BillDetailsResolver.createBillDetails(args),
        deleteBillDetails: (_, args) => BillDetailsResolver.deleteBillDetails(args),

        // Block
        createBlockDetails: (_, args) => BlockDetailsResolver.createBlockDetails(args),
        deleteBlockDetails: (_, args) => BlockDetailsResolver.deleteBlockDetails(args),

        // Floor
        createFloorDetails: (_, args) => FloorDetailsResolver.createFloorDetails(args),
        deleteFloorDetails: (_, args) => FloorDetailsResolver.deleteFloorDetails(args),

        // Hostel
        createHostelSetup: (_, args) => HostelDetailsResolver.createHostelSetup(args),
        deleteHostelSetup: (_, args) => HostelDetailsResolver.deleteHostelSetup(args),

        // Login
        createLoginHistory: (_, args) => LoginDetailsResolver.createLoginHistory(args),
        deleteLoginHistory: (_, args) => LoginDetailsResolver.deleteLoginHistory(args),

        // Student
        createStudentDetail: (_, args) => StudentDetailsResolver.createStudentDetail(args),
        deleteStudentDetail: (_, args) => StudentDetailsResolver.deleteStudentDetail(args),

        //Attendance
        createAttendance: (_, args) => AttendanceResolver.createAttendance(args),
        deleteAttendance: (_, args) => AttendanceResolver.deleteAttendance(args),

        //UserMaster
        createUserMaster: (_, args) => UserDetailsResolver.createUserMaster(args),
        deleteUserMaster: (_, args) => UserDetailsResolver.deleteUserMaster(args),

    }
}
