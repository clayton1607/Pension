const express = require('express');
const hbs =require('hbs');
const fs = require('fs');
const nodemailer=require('nodemailer');
const mysql=require('mysql');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const jwt=require('jsonwebtoken');
//var nodemailer = require('nodemailer');

//Mysql database

//DATABASE------------------------------------>>>
//var {con}=require('./db/mysql.js');
var {contact}=require('./tables/contact.js');
var {users}=require('./tables/users.js');
var {otpdb}=require('./tables/otpdb.js');
var {admin}=require('./tables/admin.js');
var {pension}=require('./tables/pension.js');
var {personal}=require('./tables/personal.js');

var {pension_id}=require('./tables/pension_id.js');
var {pension_add}=require('./tables/pension_add.js');
var {pension_bank}=require('./tables/pension_bank.js');
 var {insurance}=require('./tables/insurance.js');
var {insurance_id}=require('./tables/insurance_id.js');
var {insurance_add}=require('./tables/insurance_add.js');
 var {insurance_bank}=require('./tables/insurance_bank.js');


//var {transporter}=require('./email.js');
//var {otp}=require('./email.js');

//<<<------------------------------------
var {mailmake}=require('./email.js');
var {mailsend}=require('./email.js');
var {app}=require('./authenticateAdmin.js');
var {passport}=require('./authenticate.js');
var {otp}=require('./otp.js');
var {authenticate}=require('./middleware/authenticate.js');
// var {nexmo}=require('./smshandler.js');
const crypto=require('crypto');
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
app.post('/user/dashboard',(req,res)=>{
  let stmt = `INSERT INTO contact(name_home,email,message)
            VALUES(?,?,?)`;
  let todo = [req.body.Name,req.body.Email,req.body.Message];
  contact.query(stmt,todo,(err,result)=>{
    if(err)
      console.log(err);
    console.log("1 message inserted");
    res.redirect('/user/dashboard');
  })
});

app.post("/login", passport.authenticate('local', {
    successRedirect: '/user/Personal',
    failureRedirect: '/login',
    failureFlash: true
}), function(req, res, info){

    res.render('/login/index',{'message' :req.flash('Suuccessful')});
    console.log("Suuccessful1");
});


app.post('/signup',(req,res)=>{
  console.log(req.body);

  // var username=req.body.username;
  // var decoded=jwt.verify(token,'specialKEy');
  // console.log(decoded);
  // console.log(token);
  // res.set('x-auth', token);

  var d= new Date();
  var salt = crypto.randomBytes(16).toString('hex');
  var password=crypto.pbkdf2Sync(req.body.password,salt,
    1000, 64, `sha512`).toString(`hex`);
  let stmt = `INSERT INTO users(username,email,password,token_accees,token,application_status,last_login,signup_date)
            VALUES(?,?,?,?,?,?,?,?)`;

  let todo = [req.body.username,req.body.email,password,'auth',salt,false,d,d];
  users.query(stmt,todo, function (err, result) {
    if (err)
      console.log(err);
    console.log("1 record inserted");

    //setting pension status
    let sql = "INSERT INTO pension (application_status ,pension_personal,pension_id ,pension_add ,pension_bank ,dr_calc_status ,dr_calc ,gratuity_calc_status ,gratuity_calc ,pension_calc_status ,pension_calc ,username) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
    pension.query(sql,["pending",false,false,false,false,false,"",false,"",false,10,req.body.username], function (err, result) {
      if (err) throw err;
      console.log("1 record pension status inserted");
    });

    //setting insurance status
    let sql2='INSERT INTO insurance (application_status ,insurance_id ,insurance_add ,insurance_bank ,username) VALUES(?,?,?,?,?)';
    insurance.query(sql2,["pending",false,false,false,req.body.username],(err,result)=>{
      if (err) throw err;
      console.log("1 record insurance status inserted");
    });
    otp.otp_key=Math.floor(100000 + Math.random() * 900000);
    console.log(otp.otp_key);
    mailmake.text=otp.otp_key.toString();
    mailmake.to=req.body.email;
    mailsend.send();
    res.redirect('/otp');
    //res.redirect('/otp');
    //res.render('Public/Home/Aunthentication/otp.hbs');
  });
});

app.post('/otp',(req,res)=>{
    if(otp.otp_key==req.body.otp){
      res.redirect('/user/Personal');
    }
});



//PEnsion application

app.post('/Pension/applicationIdentity',(req,res)=>{
  //res.render('Public/Dashboard/PensionScheme/applicationIdentity.hbs');
});
app.post('/Pension/applicationAddress',(req,res)=>{
  //res.render('Public/Dashboard/PensionScheme/applicationAddress.hbs');
});
app.post('/Pension/applicationWorkBank',(req,res)=>{
  //res.render('Public/Dashboard/PensionScheme/applicationWorkBank.hbs');
});
//Insurance application

app.post('/Insurance/applicationIdentity',(req,res)=>{
  res.render('Public/Dashboard/InsuranceScheme/applicationIdentity.hbs');
});
app.post('/Insurance/applicationAddress',(req,res)=>{
  res.render('Public/Dashboard/InsuranceScheme/applicationAddress.hbs');
});
app.post('/Insurance/applicationWorkBank',(req,res)=>{
  res.render('Public/Dashboard/InsuranceScheme/applicationWorkBank.hbs');
});


//admin





app.listen(port);
//home/clayton/Project/Pension/Server/views
