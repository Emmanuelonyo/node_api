const mongoose = require('mongoose')

const connectionString = "mongodb+srv://Crud_app:Younglord4u.biz@atlascluster.qxfhxmn.mongodb.net/taskmanager?retryWrites=true&w=majority"


const connectDB = (url) => {
    return mongoose
    .connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
}



module.exports = connectDB