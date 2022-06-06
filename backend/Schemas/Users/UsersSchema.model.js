var mongoose = require('mongoose');


var Schema = mongoose.Schema

const UserSchema = new Schema({
    username : {
        type : String,
        required : true,
        trim : true,
        minlength : 3,
        maxlength : 10

    },
    city : {
        type : String,
        required : true,
        trim : true
    },
},{timestamps : true})


const User = mongoose.model('User',UserSchema)

module.exports = User;