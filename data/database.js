import mongoose from "mongoose";
mongoose.set('debug', true);
export const connectDB = ()=>{mongoose.connect("mongodb+srv://khannabhumik56:DB_1_TEST@cluster0.nh7a8ho.mongodb.net/?appName=Cluster0",{
    dbName:"backendapi",

}).then(c=>console.log("data base connected"));}

/// make a fucntion for connecting database