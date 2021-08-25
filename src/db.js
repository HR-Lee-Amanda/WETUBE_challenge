import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/wetube");

const db = mongoose.connection; // connection 에 대한 access

const handleOpen = () => console.log("✅ Connected to DB");

db.on("error", (error) => console.log("DB error", error));
// ^ database 에 error 가 날 경우 발생
db.once("open", handleOpen);













