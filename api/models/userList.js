const mongoose = require('mongoose');



const mongooseSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name:String,
    //dict of associated image
    associatedUsers:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }],

});

module.exports= mongoose.model('UserList',mongooseSchema);