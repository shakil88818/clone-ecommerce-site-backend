const { default: mongoose } = require("mongoose");
require("dotenv").config()

const URL = process.env.DB_URL || "mongodb://localhost:27017/cloneEcommerce"
const dbConnect = async ()=>{
    try {
        await mongoose.connect(URL);
        console.log("Db is Connected")
    } catch (error) {
        console.log(error.message)
        console.log("Db is not Connected");
        process.exit(1)
    }
}


module.exports = dbConnect;