// we are now going to define the routes created on the collection contact
// to create the routes we need express

const express = require("express");
// we now import the router

const router = express.Router();

//require model contact
const  Contact = require('../models/Contact')


//routes
/*
    *@descp : testing routes
    *@path : "http://localhost:5000/api/cantacts/test"
    *@method : get
    *@data : no data for the moment
    *@access : public or private routes
*/
// testing the router
router.get('/test', (req,res) =>{
    res.send("hello world");
})

//post crud
/*
    *@descp : add contacts
    *@path : "http://localhost:5000/api/cantacts/"
    *@method : POST
    *@data : creating data
    *@access : public or private routes

    
*/
//require controllers
const controller = require("../controllers/contact.controllers")
router.post('/', controller.addContact)

//get all crud
/*
    *@descp : get all contacts
    *@path : "http://localhost:5000/api/contact/"
    *@method : GET
    *@data :  no data
    *@access : public or private routes
*/

router.get('/', async(req,res)=>{
    try{
        const listContacts = await Contact.find()
        res.status(200).send({msg : "this is the list of all the contacts", listContacts})
    }catch(error){
        res.status(400).send({msg:'can not get contacts', error})
    }
})
//get one contact crud operation
/*
    *@descp : get one contact
    *@path : "http://localhost:5000/api/contact/"
    *@method : GET
    *@data :  req.params.id
    *@access : public or private routes
*/
router.get("/:_id", async(req,res)=>{
    try{
        const contactToGet = await Contact.findOne({_id: req.params.id})
        res.status(200).send({msg : " i got the contact",contactToGet})
    }catch(error){
        res.status(400).send({msg : "can not get the contact", contactToGet})
    }
})

//delete one contact crud operation
/*
    *@descp : delete one contact
    *@path : "http://localhost:5000/api/contact/"
    *@method : DELETE
    *@data :  req.params.id
    *@access : public or private routes
*/
router.delete("/:id", async(req,res) =>{
    try{
        const contactToDelete = await Contact.findOneAndDelete({_id: req.params.id})
        res.status(200).send({msg : "contact deleted",contactToDelete})
    }catch(error){
        res.status(400).send({msg : "can not delete the contact",contactToDelete })
    }
})

//update one contact crud operation
/*
    *@descp : pdate one contact
    *@path : "http://localhost:5000/api/contact/"
    *@method : UPDATE
    *@data :  req.params.id
    *@access : public or private routes
*/
router.put('/:id', async(req,res)=>{
    try{
        const contactToUpdate = await Contact.updateOne(
            { _id: req.params.id }, 
            { $set: { ...req.body } }
        )
        res.status(200).send({msg : "contact updated",contactToUpdate})
    }catch (error){
        res.status(400).send({msg : "can not update the contact",contactToUpdate })
    }
})
// exporting the module
module.exports = router;
