const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModels");
//@desc get contact
//@route GET/api/contacts/get/data
//@access public
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json({ message: "success", contact: contacts }); //no need to write try chatch
});

//@desc get contact
//@route GET/api/contacts/
//@access public
const getAllContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all Contacts" });
});

//@desc post contact
//@route POST/api/contacts/
//@access public
const postAllContacts = asyncHandler(async (req, res) => {
  console.log("req.bodyyy", req.body);
  const { name, email, phone } = req.body;
  try {
    if (!name || !email || !phone) {
      res.status(400);
      throw new Error("All fields are mandatory");
    }
    const contact = await Contact.create({
      name,
      email,
      phone,
    });
    res.status(201).json({ message: "create Contacts", contact: contact });
    console.log("contact", contact);
  } catch (err) {
    console.log("errr", err);
  }
});

//@desc get contact
//@route GET/api/contacts/id
//@access public
const getAContact = asyncHandler(async (req, res) => {
  console.log("reqqq", req.params.id);
  try {
    const contact = await Contact.findById({ _id: req.params.id });
    console.log("connnnnn", contact);
    if (!contact) {
      console.log("hereee");
      res.status(404);
      throw new Error("contact not found");
    }
    res
      .status(200)
      .json({ message: `get contact of ${req.params.id}`, contact: contact });
  } catch (err) {
    console.log(err);
  }
});

//@desc put contact
//@route PUT/api/contacts/id
//@access public
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById({ _id: req.params.id });
  console.log("connnnnn", contact);
  if (!contact) {
    console.log("hereee");
    res.status(404);
    throw new Error("contact not found");
  }
  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res
    .status(200)
    .json({
      message: `update contact of ${req.params.id}`,
      contact: updatedContact,
    });
});

//@desc delete contact
//@route DELETE/api/contacts/id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById({ _id: req.params.id });
  console.log("connnnnn", contact);
  if (!contact) {
    console.log("hereee");
    res.status(404);
    throw new Error("contact not found");
  }
  await Contact.remove(contact);
  res.status(200).json({ message: `delete contact of ${req.params.id}` });
});

module.exports = {
  getContacts,
  getAllContacts,
  postAllContacts,
  getAContact,
  updateContact,
  deleteContact,
};
