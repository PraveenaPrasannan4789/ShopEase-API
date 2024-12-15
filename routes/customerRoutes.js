
const express= require("express");
const router = express.Router();
const {getContacts,getAllContacts,postAllContacts,getAContact,updateContact,
    deleteContact}= require("../controller/contactController");
const validate = require("../middleware/validateTokenHandler");

router.use(validate);
router.route('/get/data').get(getContacts)

router.route("/").get(getAllContacts);

router.route("/").post(postAllContacts);

router.route("/:id").get(getAContact);


router.route("/:id").put(updateContact);

router.route("/:id").delete(deleteContact);


module.exports= router;