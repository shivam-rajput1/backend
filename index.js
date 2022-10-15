const express = require('express');
const cors = require("cors");
//const mongoose = require("mongoose")
require('./db/config');
const user = require("./db/user");

const app = express();


app.use(express.json());
app.use(cors());


app.post("/resister",async (req,res)=>{
    let User = new user(req.body);
    let result = await User.save();
    res.send(result);
    //res.send("hello")
})

// const connectDb = async()=>{
//     mongoose.connect("mongodb://localhost:27017/e-commerce");
//     const productSchema = new mongoose.Schema({});
//     const product = mongoose.model('product',productSchema);
//     const data = await product.find();
//     console.log(data);
// }
//connectDb();

app.listen(5000);