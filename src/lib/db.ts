import mongoose from "mongoose";

let isConnected = false;
const MONGODB_URI =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_MongoDBURL_Domain
    : process.env.NEXT_PUBLIC_MongoDBURL;

export const connectToDB = async () => {
  if (!MONGODB_URI) return console.log("Missing MongoDB URL");

  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("MongoDB connection already established");
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI);

    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
