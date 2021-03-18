// 1 to create the database we need to require mongoose

const mongoose = require ("mongoose")

// 2 now we need to connect the database
const connectDB = async() =>{
    try{
        await mongoose.connect(process.env.DBI_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log("database is connected")
    }catch(error){
        console.log(`can not connect ${error}`)
    }
}
// 3 now we need to import the function connectDB in the server.js

// before importing it we need to export the module

module.exports = connectDB