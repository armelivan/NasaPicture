# NasaPictureAPILabelbox

## Description

This app simulate the ratings given by users on pictures from the NASA APOD: [Nasa APOD](https://api.nasa.gov/index.html)

## Functionalities 
-  Fetch and save a NASA picture to the database
    
    → **GET**:localhost:3000/image
- Create and delete users (only an email field is needed)
     
     → **POST**:localhost:3000/user/
     
     → **DELETE** :localhost:3000/user/
     
- Save a 1-5 star rating of a picture for a user

     → **POST** :localhost:3000/rating
     
- Update a picture rating for a user

     →**PUT**:localhost:3000/rating/
    
- Delete a user rating

     →**DELETE**:localhost:3000/rating/
    
- Get all of a user's ratings

    →**GET:** localhost:3000/rating

## Technologies: 
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)


## Architecture: 
![Untitled Diagram drawio (1)](https://user-images.githubusercontent.com/34576054/151105312-f8efa358-b6cc-4d2d-b8a4-612d22474c88.png)


## Database Schema
