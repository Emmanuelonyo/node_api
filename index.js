
const express = require('express');
const app = express();
const tasks = require('./routers/tasks')
const connectDB = require('./database/connect')
require('dotenv').config()

// Middleware 
app.use(express.json())
app.use(express.static('./public'))


//routes

app.use('/api/v1/tasks', tasks)

const port = 3000

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening to port ${port}`))

    }catch(error) {
        console.log(error)
    }
}


start()
