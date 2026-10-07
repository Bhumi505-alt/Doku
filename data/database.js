// import mongoose from "mongoose";
// mongoose.set('debug', true);
// export const connectDB = ()=>{mongoose.connect(process.env.MONGO_URI,{
//     dbName:"backendapi",

// }).then(c=>console.log("data base connected"));}
// /// make a fucntion for connecting database
import mongoose from "mongoose";

mongoose.set("debug", true);

export const connectDB = () => {
  console.log("MONGO_URI exists:", !!process.env.MONGO_URI);
  console.log(
    "MONGO_URI preview:",
    process.env.MONGO_URI
      ? process.env.MONGO_URI.replace(/\/\/([^:]+):([^@]+)@/, "//$1:****@")
      : "undefined"
  );

  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "backendapi",
    })
    .then(() => console.log("database connected"))
    .catch((err) => console.log("database connection failed:", err));
};