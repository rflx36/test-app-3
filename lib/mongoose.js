import mongoose from "mongoose";



const ConnectDB = async () => {
    if (mongoose.connections[0].readyState) {
        console.log("Already connected to MongoDB");
        return;
    }
    try {
        await mongoose.connect("mongodb://localhost:27017/mydatabase",{
            useNewUrlparser:true,
            useUnifiedTopology: true,
        })
        console.log("Connected to MongoDB");
    }
    catch(error){
        console.log.error("Error connecting to Mongodb",error);
        throw error
    }

}
export default ConnectDB;