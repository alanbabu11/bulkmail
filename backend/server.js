const express = require("express")
const cors = require("cors")

const app = express();
app.use(express.json())
app.use(cors())
const nodemailer = require("nodemailer");

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: "alanbabuk21@gmail.com",
    pass: "dchbuyqwrzjrpvwv"
  },
});

app.post("/sendemail",function(req,res){
  var msg = req.body.msg;
  var emailList = req.body.emailList;
  for( i=0 ; i<emailList.length ; i++){
transporter.sendMail({
        from: "alanbabuk21@gmail.com",
        to: emailList,
        subject: "Hello",
        text:msg,
      },
      function(error,info){
        if(error){
          console.log(error)
          res.send(false)
        }
        else{
          console.log(info)
          res.send(true)
        }
      }
    );
  }

    
      
})


app.listen(5001 , ()=>{
    console.log("Server running at port 5001");
})