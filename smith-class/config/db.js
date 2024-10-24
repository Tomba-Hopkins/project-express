import mongoose from "mongoose";
import { config } from "dotenv";

config({
    path: '../.env'
})


// export default mongoose.connect(process.env.MONGO_URI)
// .then(() => console.log('DB Connected'))
// .catch((err) => console.log(err))


// atau pakai cara


const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log('DB Connected')
    } catch(err) {
        console.log(err)
    }
}

export default connectDB