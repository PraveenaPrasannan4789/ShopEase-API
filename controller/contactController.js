
//@desc get contact
//@route GET/api/contacts/get/data
//@access public
const getContacts = (req,res)=>{
    res.status(200).json({message:'success'})
}

//@desc get contact
//@route GET/api/contacts/
//@access public
const getAllContacts=(req,res)=>{
    res.status(200).json({message:"Get all Contacts"});
}

//@desc post contact
//@route POST/api/contacts/
//@access public
const postAllContacts=(req,res)=>{
    console.log('req.body',req.body);
    const{name,email}= req.body;
    if(!name || !email){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    res.status(200).json({message:"create Contacts"});
}

//@desc get contact
//@route GET/api/contacts/id
//@access public
const getAContact=(req,res)=>{
    res.status(200).json({message:`get contact of ${req.params.id}`});
}

//@desc put contact
//@route PUT/api/contacts/id
//@access public
const updateContact=(req,res)=>{
    res.status(200).json({message:`update contact of ${req.params.id}`});
}

//@desc delete contact
//@route DELETE/api/contacts/id
//@access public
const deleteContact =(req,res)=>{
    res.status(200).json({message:`delete contact of ${req.params.id}`});
}

module.exports={getContacts,getAllContacts,postAllContacts,getAContact,updateContact,deleteContact};