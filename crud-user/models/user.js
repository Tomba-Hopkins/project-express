import mongoose from "mongoose";
import Biodata from "./Biodata.js";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    is_admin: {
        type: Boolean,
        required: true,
        enum: [true, false]
    },
    biodata: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Biodata'
    }]
})


userSchema.post("findOneAndDelete", async function(doc) {
    if(doc) {
        await Biodata.deleteMany({
            _id: {
                $in: doc.biodata
            }
        })
    }
})


const User = mongoose.model('User', userSchema)


export default User