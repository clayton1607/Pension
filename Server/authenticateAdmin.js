var flash= require('connect-flash');
var crypto=require('crypto');
var passport          = require('passport');
var LocalStrategy     = require('passport-local').Strategy;
var sess              = require('express-session');

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
var {admin}=require('./tables/admin.js');
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

      admin.query("SELECT * FROM admin WHERE usernam=?", [username], function(err, rows){
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
    admin.query("select * from admin where username = ?",[username], function (err, rows){
        //console.log(rows);
        done(err, rows[0]);
    });
});



function isAuthenticated(req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/admin/login');
};

//admin

app.post('/admin/login',passport.authenticate('local', {
    successRedirect: '/admin/dashboard',
    failureRedirect: '/admin/login',
    failureFlash: true
}), function(req, res, info){
    res.render('/login/index',{'message' :req.flash('Suuccessful')});
    console.log("Suuccessful1");
});
app.get('/admin/login',(req,res)=>{
  res.render('Public/Home/Aunthentication/Alogin.hbs');
});
app.get('/admin/dashboard',(req,res)=>{
  res.render('Public/Dashboard/DashboardAdmin.hbs');
});
app.get('/admin/dashboard/list',(req,res)=>{
  let stmt = `SELECT username,last_login FROM admin`;
  //let todo = [req.body.username,req.body.email,req.body.password,false];
  admin.query(stmt,[req.body.username,req.body.password],function (err, result,fields) {
    res.send(result);
  });
  //res.redirect('/otp');
});
//app.get('',(req,res)=>{});
app.get('/admin/dashboard/application/status',(req,res)=>{
});


app.post('/admin/dashboard',(req,res)=>{
  console.log(req.body);
  if(req.body.dowhat=='1'){
    let stmt='Select * FROM pension where username=?';
    let values=[req.body.username];
    pension.query(stmt,values,(err,result)=>{
      if(err)
        console.log(err);
      console.log("Application status query");
      res.send(result);
    });
  }
  else if (req.body.dowhat=='2') {
    let stmt='UPDATE users set application_status=? where username=? ';
    let values=[true,req.body.username];
    pension.query(stmt,values,(err,result)=>{
      if(err)
        console.log(err);
      console.log("verify query");
      res.send(result);
    });
  }


  else if (req.body.dowhat=='3') {
    res.send("Not AVAILABLE")
    //send notification
  }


  else if (req.body.dowhat=='4') {
    let stmt='SELECT * FROM Personal';
    //let values=[true,req.body.username];
    pension.query(stmt,(err,result)=>{
      if(err)
        console.log(err);
      console.log("personal app query");
      res.send(result);
    });
  }


  else if (req.body.dowhat=='5') {
    let stmt='SELECT * FROM pension_id';
    //let values=[true,req.body.username];
    pension.query(stmt,(err,result)=>{
      if(err)
        console.log(err);
      console.log("personal-id app query");
      res.send(result);
    });
  }


  else if (req.body.dowhat=='6') {
    let stmt='SELECT * FROM pension_add';
    //let values=[true,req.body.username];
    pension.query(stmt,(err,result)=>{
      if(err)
        console.log(err);
      console.log("personal add query");
      res.send(result);
    });
  }



  else if (req.body.dowhat=='7') {
    let stmt='SELECT * FROM pension_bank';
    //let values=[true,req.body.username];
    pension.query(stmt,(err,result)=>{
      if(err)
        console.log(err);
      console.log("personal bank query");
      res.send(result);
    });
  }




  else {
    res.send("Plz Enter valid option");
  //  res.redirect('/admin/dasboard');
  }
});






module.exports={app};
