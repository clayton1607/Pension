const express = require('express');
const hbs =require('hbs');
const fs = require('fs');
const nodemailer=require('nodemailer');
//const mysql=require('mysql');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
var app =express();
//var nodemailer = require('nodemailer');
var {con}=require('./db/mysql.js');
var {user}=require('./tables/users.js');

app.use(express.static(__dirname+'/Public'));
app.use(bodyParser.json());
console.log(__dirname+'/Public');
app.set('view engine','hbs');

app.get('/',(req,res)=>{
  res.render('Public/Home/home.hbs');
});
app.get('/home',(req,res)=>{
  res.render('Public/Home/home.hbs');
});
app.get('/login',(req,res)=>{
  res.render('Public/Home/Aunthentication/Login.hbs');
});
app.get('/signup',(req,res)=>{
  res.render('Public/Home/Aunthentication/Signup.hbs');
});
app.get('/otp',(req,res)=>{
  res.render('Public/Home/Aunthentication/otp.hbs');
});
app.get('/FAQ',(req,res)=>{
  res.render('Public/Dashboard/Forum/index.hbs');
});

app.get('/otp',(req,res)=>{
  res.render('Public/Home/Aunthentication/otp.hbs');
});
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE users (email VARCHAR(255), password VARCHAR(255))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });
app.post('/login',(req,res)=>{
  console.log(req.body);

  let stmt = `INSERT INTO users(email,password)
            VALUES(?,?)`;
  let todo = [req.body.email,req.body.password];
  con.query(stmt,todo, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

})

console.log(
  Math.floor(100000 + Math.random() * 900000)
);
var otp=Math.floor(100000 + Math.random() * 900000);
// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'claytonpereira1998@gmail.com',
//     pass: '****************************'
//   }
// });
//
// var mailOptions = {
//   from: 'claytonpereira1998@gmail.com',
//   to: 'claytonpereira1998@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };
//
// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });
app.listen(port);
//home/clayton/Project/Pension/Server/views
