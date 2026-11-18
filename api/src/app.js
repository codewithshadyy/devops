


const express = require("express")
const app = express()

const {connectDB} = require("./config/database")


app.use(express.json())


async function startServer(){
    try {
          

        await connectDB()
            console.log("Starting the server....")

            setTimeout(() =>{

                app.listen(2000, () => {
                    console.log("http://localhost:2000")
                })

            }, 3000)
        
    } catch (error) {
    
        
    }
}

startServer()