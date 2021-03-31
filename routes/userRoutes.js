const { Router } = require('express');
const mongoose = require('mongoose');
const Item = require('../models/itemcreate');
const basicAuth = require('../basicAuth/basicAuth')

const router = Router();

router.post('/create',async (req,res) => {
    try {
        const item = await Item.create(req.body);
        console.log(item);
        res.status(201).json(item);
    } catch (error) {
        console.log(error);
    }
})

router.get('/items',basicAuth.basicAuthentication,async (req,res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router