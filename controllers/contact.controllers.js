const Contact = require ('../models/Contact')

exports.addContact =async(req,res)=>{
    try{
    const{name, email, phone} = req.body

    // handling error email and nae are required
    if (!name || !email){
        res.status(400).send({msg : "name and email are required"})
        return 
    }
    const contact = await Contact.findOne({email})

    // handling error contact already exists
    if (contact){
        res.status(400).send({msg:'contact already exists'})
        return
    }
    const newContact = new Contact({
        name,
        email,
        phone
    })
    await newContact.save()
    res.status(200).send({msg : "contact added successfully",newContact})
    }catch(error){
        res.status(400).send({msg:'can not add to contact', error})
    }
}

