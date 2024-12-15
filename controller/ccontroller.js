

const getContact=(req,res)=>{
    console.log(req.body)
    res.status(200).json({message:"i am here"});
}

const addContact=(req,res)=>{
    res.status(200).json({message:`adding details of the id ${req.params.id}`});
}

module.exports={
    getContact,addContact
}