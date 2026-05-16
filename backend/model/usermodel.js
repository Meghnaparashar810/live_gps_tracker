import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    userId :{
        type : String,
        required : true
    },
    longitude : {
        type : Number,
        required : true
    },
    latitude : {
        type : Number,
        required : true
    },
   updateAt : {
        type : Date,
        default : Date.now
    }
} , { timestamps : true});

const User = mongoose.model("User", userSchema);
export default User;