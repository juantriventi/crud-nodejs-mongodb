const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const UserSchema = new Schema({
      
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
},{
    versionKey: false 
});

UserSchema.set("timestamps", true)

module.exports = User = mongoose.model('User', UserSchema);
