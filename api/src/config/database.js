


const mongoose = require("mongoose")

require("dotenv").config()

const MONGO_URL = process.env.MONGO_URL


exports.connectDB = async () => {

     try {

        await mongoose.connect(MONGO_URL)
        
    } catch (error) {

        console.log(`Erro connecting to mongoDB`)
        console.log(`Error:${error.message}`)
        process.exit(1)
        
    }
    
}