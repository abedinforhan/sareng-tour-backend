import dotenv from 'dotenv'
//Calling dotenv
dotenv.config()


console.log(process.env,"hi");

const envError=dotenv.config()
if(envError.error){
    console.log(`.env File Not Found !`);
}

export default {
    PORT:5000 || process.env.PORT,
    MONGODB_URL:process.env.MONGODB_URL
}