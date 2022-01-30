// required packages
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
require('dotenv').config();


//connection to DB 
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://'+process.env.USER+':'+process.env.PASSWORD+'@cluster0.tzf1z.mongodb.net/Labelbox?retryWrites=true&w=majority',
{
useNewUrlParser: true, 
useUnifiedTopology: true 	
},err => {
	if(err) throw err;
	console.log('Connected to MongoDB!!!')
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())



//routes 
const imageRoute = require('./api/routes/image')
const ratingRoute = require('./api/routes/rating')
const userRoute = require('./api/routes/user')

app.use('/image',imageRoute)
app.use('/rating',ratingRoute)
app.use('/user',userRoute)

app.use("/",(req,res,next)=>{
	res.status(200).json({ // specifying the status as 200 and 
		message:'NASA  IMAGES RATING'
	})
});

module.exports = app
