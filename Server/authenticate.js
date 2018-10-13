var flash= require('connect-flash');
var crypto=require('crypto');
var passport          = require('passport');
var LocalStrategy     = require('passport-local').Strategy;
var sess              = require('express-session');
const multer = require("multer");

const handleError = (err, res) => {
    res.status(500)
    res.contentType("text/plain")
    res.end("Oops! Something went wrong!");
};
const path = require("path");
const fs = require("fs");
const upload = multer({
  dest: "/uploads"
  // you might also want to set some limits: https://github.com/expressjs/multer#limits
});
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
var {users}=require('./tables/users.js');


var {app}=require('./views.js');
app.use(sess({
   name: 'JSESSION',
   secret: 'MYSECRETISVERYSECRET',
   resave: true,
   saveUninitialized: true
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
var salt = '7fa73b47df808d36c5fe328546ddef8b9011b2c6';
passport.use('local', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true //passback entire req to call back
} , function (req, username, password, done){
      console.log(username+password+"hello");
      if(!username || !password ) { return done(null, false, req.flash('message','All fields are required.')); }

      users.query("SELECT * FROM users WHERE username=?", [username], function(err, rows){
          console.log(err); console.log(rows);
          //console.log(rows[0].username);
          //console.log("***////1");
        if (err) return done(req.flash('message',err));
        if(!rows.length){ return done(null, false, req.flash('message','Invalid username or password.')); }
         var encPassword=crypto.pbkdf2Sync(password, rows[0].token,
    1000, 64, `sha512`).toString(`hex`);
         var dbPassword  = rows[0].password;
        if(!(dbPassword == encPassword)){
            return done(null, false, req.flash('message','Invalid username or password.'));
         }
         var d=new Date();
         let stmt = `UPDATE users SET last_login =? WHERE username =?`;
          let todo = [d,username];
              users.query(stmt,todo, function (err, result){
                if (err)
                  console.log(err);
                console.log("login date update");
              });
         console.log("Suuccessful");
        return done(null, rows[0]);

      });
    }
));
passport.serializeUser(function(user, done){
    done(null, user.username);
});
passport.deserializeUser(function(username, done){
  console.log(username);
    users.query("select * from users where username = ?",[username], function (err, rows){
        console.log(rows);
        done(err, rows[0]);
    });
});
app.get('/user/dashboard',isAuthenticated,(req,res)=>{
  console.log(req.user.username);
  users.query("SELECT * FROM users WHERE username=?",[req.user.username],(err,rows)=>{
      var name=rows[0].username;
      var email=rows[0].email;
      var login=rows[0].last_login;
      var signup=rows[0].signup_date;
      var x_status=rows[0].application_status;
      if(x_status)
        var status='Complete';
      else
        var status='Imcomplete'
      console.log(status);
      res.render('Public/Dashboard/Dashboard.hbs',{name,email,login,signup,status});
  })

});
app.get('/user/Personal',isAuthenticated,(req,res)=>{
  res.render('Public/Dashboard/PensionScheme/applicationPersonal.hbs');
  // token=req.header('x-auth');
  // console.log(req.headers);
  // console.log(token);
  //  var token = req.query.token;
  //  res.send(req.user);
    //res.render('Public/Dashboard/PensionScheme/applicationPersonal.hbs');
    //res.send("hello");

  //res.render('Public/Dashboard/PensionScheme/applicationPersonal.hbs');
});
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/login');
};


//GET
app.get('/user/Pension/applicationIdentity',isAuthenticated,(req,res)=>{
  res.render('Public/Dashboard/PensionScheme/applicationIdentity.hbs');
});
app.get('/user/Pension/applicationAddress',isAuthenticated,(req,res)=>{
  res.render('Public/Dashboard/PensionScheme/applicationAddress.hbs');
});
app.get('/user/Pension/applicationWorkBank',isAuthenticated,(req,res)=>{
  res.render('Public/Dashboard/PensionScheme/applicationWorkBank.hbs');

});

//POST
app.post('/user/Personal',upload.single("image" /* name attribute of <file> element in your form */),(req,res)=>{
  console.log(req.file.path);
  const tempPath = req.file.path;
  var image=Math.floor(100000 + Math.random() * 900000);
  var img=image.toString();
  var png ="image.png";
  var image_png=img.concat(png);
  const targetPath = path.join(__dirname, "Public/uploads",image_png);
  console.log(tempPath);
  console.log(targetPath);
  if (path.extname(req.file.originalname).toLowerCase() === ".png") {
    fs.rename(tempPath, targetPath, err => {
      if (err) return handleError(err, res);
         res.status(200)
         let sql2="SELECT * from pension WHERE username=?";
         pension.query(sql2,[req.user.username],(err,rows)=>{
           let sql = "INSERT INTO personal(image,personal_details_status ,first_name ,middle_name ,last_name ,father_name ,mothers_name ,date_of_birth ,city_of_birth ,country_of_birth ,gender ,martial_status ,spouse_name ,phone_no ,fax,application_no) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

           let  values=[image_png,true,req.body.First_Name,req.body.Middle_Name,req.body.Last_Name,req.body.Father_Name,req.body.Mother_Name,req.body.dob,req.body.cityofbirth,req.body.countryofbirth,req.body.gender,req.body.mstatus,req.body.spouse_name,req.body.Phone,req.body.Fax,rows[0].application_no];

           personal.query(sql,values, function (err, result) {
               if (err) throw err;
               console.log("1 record application_personal inserted");
               app.redirect('/user');
         });
         });
    });
  } else {
    fs.unlink(tempPath, err => {
      if (err) return handleError(err, res);

      res
        .status(403)
        .contentType("text/plain")
        .end("Only .png files are allowed!");
    });
  }



  // let sql = "INSERT INTO application_personal(image,personal_details_status ,first_name ,middle_name ,last_name ,father_name ,mothers_name ,date_of_birth ,city_of_birth ,country_of_birth ,gender ,martial_status ,spouse_name ,phone_no ,fax) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
  //
  // let  values=[true,req.body.First_Name,req.body.Middle_Name,req.body.Last_Name,req.body.Father_Name,req.body.Mother_Name,req.body.dob,req.body.cityofbirth,req.body.countryofbirth,req.body.gender,req.body.mstatus,req.body.spouse_name,req.body.Phone,req.body.Fax,req.user.username];
  //
  // personal.query(sql,values, function (err, result) {
  //   if (err) throw err;
  //   console.log("1 record application_personal inserted");
  //   app.redirect('/applicationIdentity');
  });



app.post('/user/Pension/applicationIdentity',upload.single("imageid" /* name attribute of <file> element in your form */),(req,res)=>{
  console.log(req.file.path);
  const tempPath = req.file.path;
  var image=Math.floor(100000 + Math.random() * 900000);
  var img=image.toString();
  var png ="image.png";
  var image_png=img.concat(png);
  const targetPath = path.join(__dirname, "Public/uploads",image_png);
  console.log(tempPath);
  console.log(targetPath);
  if (path.extname(req.file.originalname).toLowerCase() === ".png") {
    fs.rename(tempPath, targetPath, err => {
      if (err) return handleError(err, res);
         res.status(200)
         let sql2="SELECT * from pension WHERE username=?";
         pension.query(sql2,[req.user.username],(err,rows)=>{
           console.log(req.user.username);
           console.log(req.body);
           console.log(rows);
           let sql = "INSERT INTO pension_id(image_id,appid_status,id ,passport,passport_expiry_date ,pan_card ,voterid ,drivinglicence ,drivinglicence_expiry_date,other_id_name,other_id_no ,application_no) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)";

           let  values=[image_png,true,req.body.id,req.body.Passport,req.body.Passport_expiry,req.body.Pan,req.body.Voterid,req.body.Drivingid,req.body.Driving_expiry,req.body.other_id_name,req.body.othersid_no,rows[0].application_no];

           personal.query(sql,values, function (err, result) {
               if (err) throw err;
               console.log("1 record application_personal inserted");
               res.redirect('/user');
         });
         });
    });
  } else {
    fs.unlink(tempPath, err => {
      if (err) return handleError(err, res);

      res
        .status(403)
        .contentType("text/plain")
        .end("Only .png files are allowed!");
    });
  }



  });










// //insurance
// app.get('/user/Insurance/applicationIdentity',isAuthenticated,(req,res)=>{
//   res.render('Public/Dashboard/InsuranceScheme/applicationIdentity.hbs');
// });
// app.get('/user/Insurance/applicationAddress',isAuthenticated,(req,res)=>{
//   res.render('Public/Dashboard/InsuranceScheme/applicationAddress.hbs');
// });
// app.get('/user/Insurance/applicationWorkBank',isAuthenticated,(req,res)=>{
//   res.render('Public/Dashboard/InsuranceScheme/applicationWorkBank.hbs');
//
// });


module.exports={salt,app,passport};
//
// app.post('/login',(req,res)=>{
//   console.log(req.body);
//
//   let stmt = `SELECT * FROM users WHERE username=? AND password=?`;
//   //let todo = [req.body.username,req.body.email,req.body.password,false];
//   users.query(stmt,[req.body.username,req.body.password],function (err, result,fields) {
//   //  if (err) throw err;
//   var d=new Date();
//     if(result[0].username ==req.body.username && result[0].password==req.body.password){
//       let stmt = `UPDATE users SET last_login =? WHERE username =? AND password =?`;
//       let todo = [d,req.body.username,req.body.password];
//       users.query(stmt,todo, function (err, result){
//         if (err)
//           console.log(err);
//         console.log("login date update");
//       });
//       otp.otp_key=Math.floor(100000 + Math.random() * 900000);
//       mailmake.text=otp.otp_key.toString();
//       mailmake.to=result[0].email;
//       mailsend.send();
//       res.redirect('/otp');
//       console.log('false');
//     }
//     //console.log(result);
//     //console.log(result[0].username+'hello');
//
//     //res.render('Public/Home/Aunthentication/otp.hbs');
//   });
//   //res.redirect('/otp');
// });
