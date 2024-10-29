import mongoose from "mongoose";

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log('DB Connected')
    } catch(err) {
        console.log('ada error', err)
    }
}

export default connectDB