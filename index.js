
const express = require('express');
const app = express();
const tasks = require('./routers/tasks')
const connectDB = require('./database/connect')
require('dotenv').config()

// Middleware 
app.use(express.json())


//routes
app.get('/', (req, res) =>{    
    res.send('welcome to the homepage')
})
app.use('/api/v1/tasks', tasks)

//API ROUTES 
app.get('/api/v1/tasks', (req, res) =>{

})



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
