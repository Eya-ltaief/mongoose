// 1 require express after installing it 
// as a production dependencies

const express = require ("express");

// 2 create an instance of express
const app = express();

//4 require dotenv and cpnfig
require('dotenv').config();

// 3 create the PORT 
const PORT = process.env.PORT;

// 6 we need to require the path of the fnction connectdb so we 
// can import it

const dbconnect = require('./config/connectDB');

// 7 import the function dbconnect
dbconnect();

//adding middelware body parser
app.use(express.json());

// 8 create our routes using middleware (a router is a complete middelware)
app.use('/api/contact', require('./routes/contacts')) ;

// 4 create the server 
app.listen(PORT, (error) => {
    error ? console.error(`failed to connect to the server ${error}`)
    :
    console.log(`connected to the server ${PORT}`)
})

// To prevent the node_module folder and the .env file from being inported to github 
//we add a .gitignore file and add /folder_name for folder and just the 
// file name for files

// 5  now we need to create a database for that we creat a folder named config
// in that folder we have a file with the name of connectDB
// to connect to the database we need "mongoose"


