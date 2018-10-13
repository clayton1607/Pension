var {con}=require('../db/mysql');
var pension=con;
<<<<<<< HEAD

  let sql = "CREATE TABLE if not exists pension (application_no INT primary key AUTO_INCREMENT,application_status varchar(255),pension_personal boolean,pension_id boolean,pension_add boolean,pension_bank boolean,dr_calc_status boolean,dr_calc varchar(255),gratuity_calc_status boolean,gratuity_calc varchar(255),pension_calc_status boolean,pension_calc INT,username varchar(255) not null,FOREIGN KEY fk_username (username) REFERENCES users (username) ON UPDATE CASCADE ON DELETE CASCADE)";
=======
pension.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");


  let sql = "CREATE TABLE if not exists users(
    application_no BIGINT primary key,
    application_status varchar(255),
    pension_personal boolean,
    pension_id boolean,
    pension_add boolean,
    pension_bank boolean,
  )";
>>>>>>> 3bf4a544fc2607c2c522e687ff335668bb8b26c0
  pension.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
<<<<<<< HEAD

=======
});
>>>>>>> 3bf4a544fc2607c2c522e687ff335668bb8b26c0

module.exports={pension};
