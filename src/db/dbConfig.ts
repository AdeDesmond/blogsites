import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGODB_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("mongoose db connected successfully");
    });
    connection.on("error", (err) => {
      console.log(
        "mongodb connection error. please make sure mongodb is runnng" + err
      );
      process.exit();
    });
  } catch (err: any) {
    console.log(err.message);
  }
}
