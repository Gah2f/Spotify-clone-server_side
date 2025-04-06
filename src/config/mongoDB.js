import mongoose from "mongoose";

const connectDB = async ()=>{
    mongoose.connection.on('Connected ', ()=>{
        console.log('Connected to MongoDB');
    } );
    await mongoose.connect(`${process.env.MONGODB_URI}/spotify-clone`);
}


export default connectDB;