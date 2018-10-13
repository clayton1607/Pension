var {con}=require('../db/mysql');
var admin=con;
<<<<<<< HEAD

  let sql = "CREATE TABLE if not exists admin (username varchar(255) primary key,email varchar(255),password varchar(255),last_login varchar(255), priveledges varchar(255),phone_no varchar(255),fax varchar(255),details varchar(255))";
=======
admin.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");


  let sql = "CREATE TABLE if not exists users(
    admin_id varchar(255) primarky key,
    email varchar(255),
    password varchar(255),
    last_login varchar(255),
    priveledges varchar(255),
    phone_no varchar BIGINT,
    fax varchar(255),
    details varchar(255),
  )";
>>>>>>> 3bf4a544fc2607c2c522e687ff335668bb8b26c0
  admin.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
<<<<<<< HEAD

module.exports={admin};
=======
});

module.exports={pension};
>>>>>>> 3bf4a544fc2607c2c522e687ff335668bb8b26c0
