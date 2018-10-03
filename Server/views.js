const express = require('express');
//const express = require('express');
const hbs =require('hbs');
//const fs = require('fs');
//const nodemailer=require('nodemailer');
//const mysql=require('mysql');
const bodyParser = require('body-parser');

var app =express();
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
app.get('/dashboard',(req,res)=>{
  res.render('Public/Dashboard/Dashboard.hbs');
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
app.get('/dr-calc',(req,res)=>{
  res.render('Public/Home/Calculator/DR_calc.hbs');
});
app.get('/gratuity-calc',(req,res)=>{
  res.render('Public/Home/Calculator/gratuity_calc.hbs');
});
app.get('/pen-calc',(req,res)=>{
  res.render('Public/Home/Calculator/pen_calc.hbs');
});
module.exports={app};
