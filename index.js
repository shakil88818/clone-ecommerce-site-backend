const express = require("express");
const dbConnect = require("./config/dbConnect");
require("dotenv").config()
const app = express();
const PORT = process.env.PORT || 4000

app.use("/",(req,res)=>{
    res.send("i am home")
})

app.listen(PORT, async()=>{
    await dbConnect()
    console.log(`Server is running at http://localhost:${PORT}`)
})