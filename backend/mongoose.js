const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const connectDb = async () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("mongoDB connected on: " + conn.connection.host);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = connectDb;
