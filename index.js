const express = require("express");
const app = express();
const cors=require("cors")
const dbConnect = require("./config/dbConnect");
const AuthRouter = require("./routes/AuthRoute");
const { notFound, errorHandler } = require("./middlewares/ErrorHandler");
require("dotenv").config()

const PORT = process.env.PORT

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use("/api/user", AuthRouter)


app.use("/",(req,res)=>{
    res.send("i am home")
})

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, async()=>{
    await dbConnect()
    console.log(`Server is running at http://localhost:${PORT}`)
})

