var {con}=require('../db/mysql');
var users=con;

  let sql = "CREATE TABLE if not exists users(username varchar(255) primary key,email varchar(255),password varchar(255),application_status boolean)";
  users.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });


module.exports={users};
