var {con}=require('../db/mysql');
var insurance=con;
<<<<<<< HEAD

  let sql = "CREATE TABLE if not exists insurance(application_no INT primary key AUTO_INCREMENT,application_status varchar(255),insurance_id boolean,insurance_add boolean,insurance_bank boolean,username varchar(255) not null,FOREIGN KEY fk_username (username) REFERENCES users (username) ON UPDATE CASCADE ON DELETE CASCADE)";
=======
insurance.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");


  let sql = "CREATE TABLE if not exists users(
    application_no BIGINT primary key,
    application_status varchar(255),
    insurance_id boolean,
    insurance_add boolean,
    insurance_bank boolean,
  )";
>>>>>>> 3bf4a544fc2607c2c522e687ff335668bb8b26c0
  insurance.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
<<<<<<< HEAD
=======
});
>>>>>>> 3bf4a544fc2607c2c522e687ff335668bb8b26c0

module.exports={insurance};
