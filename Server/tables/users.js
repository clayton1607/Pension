var {con}=require('../db/mysql');
const jwt =require('jsonwebtoken');
var users=con;

  let sql = "CREATE TABLE if not exists users(username varchar(255) primary key,email varchar(255),password varchar(255),token_accees varchar(255) not null,token varchar(255) not null,application_status boolean,last_login varchar(255),signup_date varchar(255),pension_app boolean,insurance_app boolean)";
  users.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });


  users.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
// var token ={
//   generateAuthToken : function(username){
//     var access='auth';
//     var token=jwt.sign({username: username,access},'specialKEy');
//     var decoded=jwt.verify(token,'specialKEy');
//     console.log(decoded);
//     console.log(token);
//     return token;
//   }
//   current_token:"";
// };

module.exports={users};
