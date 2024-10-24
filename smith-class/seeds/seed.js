import connectDB from "../config/db.js";
import User from "../models/user.js";


connectDB()


const isiData = async() => {
    const user = new User({
        username: 'admin',
        password: 'mradmin',
        isAdmin: false
    })

    try {
        await user.save()
    } catch(err) {
        console.log(err)
    }
}

isiData()