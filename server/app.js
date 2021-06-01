const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/index");
require("dotenv").config();

var app = express();
var port = process.env.PORT||5000;

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("uploads"));

//database connection
mongoose.connect(process.env.DB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true
});

mongoose.connection.on("connected",()=>{
    console.log("mongoose is connected !!!!");
})

app.use("/api/post",router);
app.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
})