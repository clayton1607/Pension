const express = require('express');
const hbs =require('hbs');
const fs = require('fs');
const nodemailer=require('nodemailer');
const mysql=require('mysql');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

//var nodemailer = require('nodemailer');

//Mysql database
//var {con}=require('./db/mysql.js');
var {contact}=require('./tables/contact.js');
var {users}=require('./tables/users.js');
var {otpdb}=require('./tables/otpdb.js');
//var {admin}=require('./tables/admin.js');
//var {insurance_id}=require('./tables/insurance_id.js');
//var {insurance_add}=require('./tables/insurance_add.js');
//var {insurance_bank}=require('./tables/insurance_bank.js');
//var {insurance}=require('./tables/insurance.js');
//var {pension}=require('./tables/pension.js');
//var {pension_id}=require('./tables/pension_id.js');
//var {pension_add}=require('./tables/pension_add.js');
//var {pension_bank}=require('./tables/pension_bank.js');
//var {transporter}=require('./email.js');
//var {otp}=require('./email.js');
var {mailmake}=require('./email.js');
var {mailsend}=require('./email.js');
var {app}=require('./views.js');
var {otp}=require('./otp.js');
app.use(bodyParser.urlencoded({ extended: true }));
//console.log(otp);

// var otp=Math.floor(100000 + Math.random() * 900000);
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

  let stmt = `SELECT * FROM users WHERE username=? AND password=?`;
  //let todo = [req.body.username,req.body.email,req.body.password,false];
  users.query(stmt,[req.body.username,req.body.password],function (err, result,fields) {
  //  if (err) throw err;
    if(result[0].username ==req.body.username && result[0].password==req.body.password){
      otp.otp_key=Math.floor(100000 + Math.random() * 900000);
      mailmake.text=otp.otp_key.toString();
      mailmake.to=result[0].email;
      mailsend.send();
      res.redirect('/otp');
      console.log('false');
    }
    //console.log(result);
    //console.log(result[0].username+'hello');

    //res.render('Public/Home/Aunthentication/otp.hbs');
  });
  //res.redirect('/otp');
});
app.post('/home',(req,res)=>{
  let stmt = `INSERT INTO contact(name_home,email,message)
            VALUES(?,?,?)`;
  let todo = [req.body.Name,req.body.Email,req.body.Message];
  contact.query(stmt,todo,(err,result)=>{
    if(err)
      console.log(err);
    console.log("1 message inserted");
    res.redirect('/home');
  })
});
app.post('/signup',(req,res)=>{
  console.log(req.body);

  let stmt = `INSERT INTO users(username,email,password,application_status)
            VALUES(?,?,?,?)`;
  let todo = [req.body.username,req.body.email,req.body.password,false];
  users.query(stmt,todo, function (err, result) {
    if (err)
      console.log(err);
    console.log("1 record inserted");
    otp.otp_key=Math.floor(100000 + Math.random() * 900000);
    console.log(otp.otp_key);
    mailmake.text=otp.otp_key.toString();
    mailmake.to=req.body.email;
    mailsend.send();
    res.redirect('/otp');
    //res.render('Public/Home/Aunthentication/otp.hbs');
  });
});
app.post('/otp',(req,res)=>{
    if(otp.otp_key==req.body.otp){
      res.redirect('/dashboard');
    }
});


app.listen(port);
//home/clayton/Project/Pension/Server/views
