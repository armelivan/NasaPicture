const mongoose = require('mongoose');



const mongooseSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    email:String,
    //dict of associated image
    associatedImages:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Rating'
    }],

});

module.exports= mongoose.model('User',mongooseSchema);