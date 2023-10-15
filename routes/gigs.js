const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Gig = require('../models/Gig');

//Get All Gigs
router.get('/', async(req, res)=> 
   await Gig.findAll()
    .then(gigs=>{
        console.log(gigs);
        res.sendStatus(200);
    })
    .catch(err=> console.log(err))
);

//Add a Gig to db
router.post('/add', (req, res)=>{

    let {title, technologies, budget, description, contact_email} = req.body;

    //Insert into table
    Gig.create({
        title,
        technologies,
        budget,
        description,
        contact_email
    }).then(gigs=> res.redirect('/gigs'))
    .catch(err=> console.log("Error: ", err));
})

module.exports = router;