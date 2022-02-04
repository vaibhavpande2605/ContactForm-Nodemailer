const bodyParser = require("body-parser");
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

app.use(express.static('client'))

app.get("", (req,res) => {
    res.sendFile(__dirname+'/client/src/Form1.js');
  });
  

const PORT = process.env.PORT||3001;



app.listen(PORT, () =>{
 console.log(`Server running on port ${PORT} 🔥`);
 
 
});