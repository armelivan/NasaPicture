const mongoose = require('mongoose');



const mongooseSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    associatedImage:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Image'
    },
    associatedUser:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    

});

module.exports= mongoose.model('Rating',mongooseSchema);