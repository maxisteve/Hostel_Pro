// const { GraphQLUpload } = require("graphql-upload");
const EnquiryResolver = require("./enquiryResolver")
const RoomResolver = require("./Room/index")

module.exports = resolvers = {
    // Upload: GraphQLUpload,
    Query: {
        enquiry: (_, args) => EnquiryResolver.enquiry(args),
        getEnquiry: (_, args) => EnquiryResolver.getEnquiry(args),

        room: (_, args) => RoomResolver.room(args),
        getRoomList: (_, args) => RoomResolver.getRoomList(args),


    },
    Mutation:{
        // deleteEnquiry
        createEnquiry: (_, args) => EnquiryResolver.createEnquiry(args),
        deleteEnquiry: (_, args) => EnquiryResolver.deleteEnquiry(args),

        createRoom: (_, args) => EnquiryResolver.createRoom(args),
        roomEnquiry: (_, args) => EnquiryResolver.roomEnquiry(args),
    }
}