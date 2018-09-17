const express = require('express');
const hbs =require('hbs');

var app =express();
app.set('view engine','hbs');
//
// app.get('/',(req,res)=>{
//   res.render('../../Public/Home/home.hbs');
// })
app.listen(3000);
