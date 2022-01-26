const mongoose = require('mongoose');



const mongooseSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    sourceUrl:{
        type: String,
    },
    description:{
        type: String,
    }

});

module.exports= mongoose.model('Image',mongooseSchema);