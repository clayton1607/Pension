const express = require('express');
const hbs =require('hbs');
const fs = require('fs');
var app =express();
app.use(express.static(__dirname+'/Public'));
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

app.listen(3000);
//home/clayton/Project/Pension/Server/views
