


const mongoose = require("mongoose")

const MONGO_URL = process.env.MONGO_URL


async function connectDB(){

    try {

        await mongoose.connect(MONGO_URL)
        
    } catch (error) {

        console.log(`Erro connecting to mongoDB`)
        console.log(`Error:${error.message}`)
        process.exit(1)
        
    }
}



module.exports =  connectDB