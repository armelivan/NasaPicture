const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

//models 
const User = require('../models/user');
const UserList = require('../models/userList');




//Create a new User and add it in the DataBase
//verify that the new User is not already in DB and then add it 
router.post('/', (req,res)=>{
    console.log(req.body);
    const user = createUser(req.body.email);
    user
    .save()
    .then(async (result)=> {
        const userList = await UserList.findOneAndUpdate({name:"defaultUserList"},
        {
            $push:{
                "associatedUsers":user._id
            }
        })
        res.status(201).json({
        message:"new User added ",
        addedUser: user});
    })
    .catch((err)=>{
        console.log(err)
        res.status(400).json({
            error:err
        });
    });
    
});


//Delete a User present in the DataBase 
//verify that the User is  already in DB
//and then remove it from the email  provided  
router.delete('/:userId',(req,res)=>{

   //remove element from the USER DB 
   const id = req.params.productId;
   User.remove({_id:id})
   .exec()
   .then(async(result) =>{
       res.status(200).json(result);
   })
   .catch(err=>{
       console.log(err)
       res.status(500).json
   })


   // remove the element ID FROM the URLISTDB 
});


 

/*
Auxiliary  Request
*/

//Initiate the userList element
//Create a new UserList  and add it in the DataBase
router.post('/newUserList',(req,res)=>{
    console.log(req.body)
    const userList = createUserList(req.body.name)
    userList
    .save()
    .then(result=>{
        console.log(result);
        res.status(201).json({
        message:"new UserList added ",
        addedUserList: userList});
    })
    .catch((err)=>{
        console.log(err)
        res.status(400).json({
            error:err
        });
    });
    
});


/*
Users middleWares
*/

//Create User 
const createUser = (email)=>{
    return new User({
        _id: new mongoose.Types.ObjectId(),
        email:email,
        associatedImages:[]
    });
}
const createUserList = (name)=>{
   return  new UserList({
        _id: new mongoose.Types.ObjectId(),
        name:name,
        associatedUsers:[]
    });
}


module.exports = router ;