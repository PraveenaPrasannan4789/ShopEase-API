const express=require('express');
const router= express.Router();
const {getContact,addContact}= require('../controller/ccontroller');
router.route('/get').get(getContact);

router.route('/:id').post(addContact)

module.exports= router;