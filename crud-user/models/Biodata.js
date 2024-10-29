import mongoose from "mongoose";

const biodataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
})


const Biodata = mongoose.model('Biodata', biodataSchema)


export default Biodata