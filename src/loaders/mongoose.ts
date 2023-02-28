import mongoose from "mongoose";
import config from "../config";


const dbConnect = async () => {
    try {
        if(config.MONGODB_URL){
            await mongoose.connect(config.MONGODB_URL)
        } 
    } catch (err) {
        console.log(err);
    }
}

export default dbConnect;