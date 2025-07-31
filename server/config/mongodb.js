// config/mongodb.js

import mongoose from "mongoose";

const connectDB = async () => {
    try {
        // Event listeners
        mongoose.connection.on('connected', () => {
            console.log("✅ MongoDB Connected Successfully");
        });

        mongoose.connection.on('error', (err) => {
            console.error("❌ MongoDB Connection Error:", err);
        });

        mongoose.connection.on('disconnected', () => {
            console.log("⚠️ MongoDB Disconnected");
        });

        // Connect using full URI from .env (already includes /imagify)
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("🚀 MongoDB Connection Attempted");
    } catch (error) {
        console.error("❌ MongoDB Connection Failed:", error.message);
        process.exit(1);
    }
};

export default connectDB;
