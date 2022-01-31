const express = require('express')
const app = require('../../app')
const router = express.Router()
const mongoose = require("mongoose")
const fetch = require('node-fetch')
require('dotenv').config()


//models 
const Image= require('../models/image');

API_KEY = process.env.API_KEY
//Fetch Image from NASA API and store it to the DB 

router.get('/',async (req,res)=>{

    
    const url =`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
    
    const options = {
        "method":"GET"
    };
    fetch(url,options)   
    .then(response=> {
        const image= createImage(response.url);
        image.save()
        return response.url
    })
    .then((theLink)=>{
        res.status(200).json({
            url: theLink,
            message:"image saved"
        })
    })
    .catch(e=>{
        console.error({
            "message":"error",
            error:e
        });
        res.status(400).json({
            error:err
        });
    });
   
})


const createImage=(pictureLink)=>{
    return  new Image({
        _id: new mongoose.Types.ObjectId(),
        sourceUrl:pictureLink,
        description:"NASA PICTURE"
    });
}


module.exports = router 