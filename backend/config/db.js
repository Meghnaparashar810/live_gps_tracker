import mongoose from "mongoose";

const connectDb = async () => {
    try {
        console.log("Connecting MongoDB...");

        const conn = await mongoose.connect(process.env.MONGO_URL);

        console.log("MongoDB Connected Successfully ✅");
        console.log("Host:", conn.connection.host);

    } catch (error) {
        console.log("❌ MongoDB Error:");
        console.log(error);
    }
};

export default connectDb;