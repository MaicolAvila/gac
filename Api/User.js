const express = require('express');
const mongoose = require('mongoose');
const User = require('../DB/User');
const route = express.Route();

route.post('/',(asyncreq,res)=>{
    const{firstName,lastName} = req.body;
    let user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    let userModel = new User(user);
    await userModel.save();
    res.json(userModel);
})

module.exports = route;