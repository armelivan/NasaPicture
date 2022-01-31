const express = require('express')
const router = express.Router()
const mongoose = require("mongoose")




////models 
const User = require('../models/user');
const UserList = require('../models/userList');
const Rating = require('../models/rating');
const rating = require('../models/rating');



//Save a 1-5 star rating of a picture for a user
router.post('/',(req,res)=>{
    console.log("in")
    createRating(req.body.rating,req.body.userId,req.body.imageId)
    .then((rating)=>{
        console.log("other step")
        rating.save() 
    })
    .then(()=>{
        console.log("other step2")
        res.status(200).json({
            message:"added new rating",
            user: req.body.userId,
            image:req.body.imageId
        })
    })
    .catch((e)=>{
        //console.log("new error");
        res.status(400).json({
            error:"mistaken faillure "
        })
    });

});


//Update a picture rating for a user
router.put('/',(req,res)=>{
    gettingRating(req.ratingId)
    .then((rating)=>{
        rating.score = req.newScore
        rating.save()
        
    })
    .then(()=>{
        res.status(200).json({
            message:"values updated accordingly"
        })
    })
    .catch((e)=>{
        res.status(400).json({
            error:e
        })
    }
        
    )
});

//Delete a user rating

router.delete('/',(req,res)=>{
    Rating.remove({_id:req.body.ratingId}).exec()
    .then((result) =>{
        res.status(200).json(result);
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json
    })    
});


//Get all of a User's ratings 

router.get('/',(req,res)=>{
    gettingAllUserRating(req.body.userId)
    .then((response)=>{
        res.status(200).json({
            message:success,
            ratingList = response
        })
    })
    .catch((err)=>{
        res.status(400).json({
            error:err
        })
    })

});




/*
Users middleWares
*/

//return a rating object 
createRating = (rating,userId,imageId)=>{

        return new Promise((resolve,reject)=>{
            rating = new Rating({
                associatedImage: imageId,
                associatedUser:userId,
                score:rating 
            })
            if(("associatedImage" in rating) &&("associatedUser" in rating )&& (score in rating)){
                resolve(rating)
            }else{
                reject(new Error('fail'))
            }
        })
};

gettingRating=(ratingId)=>{
    return new Promise((resolve,reject)=>{
        rating = Rating.findOne({_id:ratingId}).exec()
        if(rating!=null){
            resolve(rating)
        }else{
            reject(new Error('fail'))
        }
    })
}

gettingAllUserRating =(userId)=>{
    return new Promise((resolve,reject)=>{
        userRatings= Rating.find({associatedUser:userId}).exec()
        if (userRatings !=null){
            resolve(userRatings)
        }else{
            reject(new Error('fail')) 
        }

    })
}
module.exports = router 