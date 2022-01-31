const mongoose = require('mongoose');



const mongooseSchema = mongoose.Schema({
    associatedImage:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Image'
    },
    associatedUser:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    score:{
        type:Number,
        min:1,
        max:5
    }
    

});

module.exports= mongoose.model('Rating',mongooseSchema);