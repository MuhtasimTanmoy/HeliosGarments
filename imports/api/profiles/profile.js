import { Mongo } from 'meteor/mongo';

UserSchema = new SimpleSchema({
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    type: {
        type: String,
        optional: true,
    },
    dept: {
        type: String,
        optional: true,
    },
    designation: {
        type: String,
        optional: true,
    },
    contactNo: {
        type: String,
    },
    latitude: {
        type : Number,
        decimal: true,
        optional: true,
    },
    longitude: {
        type : Number,
        decimal: true,
        optional: true,
    },
    address: {
        type: String,
        max: 500,
        optional: true,
    },

});
