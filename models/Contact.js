// 1 now we need to create ou model
// for that we need schema meaning we need mongoose
// the schema will define the structure of our data
//the mongoose will just connect us to our data
// helping us to manage it 

const mongoose = require("mongoose");

//2 create contact schema
const schema = mongoose.Schema;
const contactSchema = new schema ({
    name:{
        type: String,
        required : true,
    },
    email:{
        type: String,
        required : true,
    },
    phone: Number
})

//3 now we export our schema
module.exports = Contact = mongoose.model("Contact", contactSchema)