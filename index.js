const express = require('express');
const connectMongoDB = require('./connection');
const PORT = 3000


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

connectMongoDB('mongodb://127.0.0.1/urlproject')
.then(() => console.log("Database connected successfully"))
.catch((errormsg) => console.log(`Some error occured,${errormsg}`))

app.get("/",(req,res)=>{

    

    res.send("This is the homepage")
})



app.listen(PORT,()=>{
    console.log("Server is started at port 3000");
})