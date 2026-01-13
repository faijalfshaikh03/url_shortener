// Importing modules
const express = require('express');
const connectMongoDB = require('./connection');
const PORT = 3000
const urlRoutes = require('./routes/url')

const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}))

// Database connection
connectMongoDB('mongodb://127.0.0.1/myurlproject')
.then(() => console.log("Database connected successfully"))
.catch((errormsg) => console.log(`Some error occured,${errormsg}`))

app.use('/url',urlRoutes);


app.listen(PORT,()=>{
    console.log("Server is started at port 3000");
})