var {con}=require('../db/mysql');
var pension_bank=con;
<<<<<<< HEAD


  let sql = "CREATE TABLE if not exists pension_bank(occupation_details varchar(255),income_range varchar(255),educational_qualifications	 varchar(255),politics boolean,account_type varchar(255),bank_number varchar(255),branch_name varchar(255),branch_address_pin	 varchar(255),state	 varchar(255),bank_ifsc	 varchar(255),application_no INT not null,FOREIGN KEY fk_app_no (application_no) REFERENCES pension (application_no) ON UPDATE CASCADE ON DELETE CASCADE)";
=======
pension_bank.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");


  let sql = "CREATE TABLE if not exists users(
    occupation_details varchar(255),
    income_range varchar(255),
    educational_qualifications	 varchar(255),
    politics boolea,
    account_type  varchar(255),
    bank_ number  varchar(255),
    branch_name 	 varchar(255),
    branch_address_pin	 varchar(255),
    state	 varchar(255),
    bank_ifsc	 varchar(255),
  )";
>>>>>>> 3bf4a544fc2607c2c522e687ff335668bb8b26c0
  pension_bank.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
<<<<<<< HEAD

=======
});
>>>>>>> 3bf4a544fc2607c2c522e687ff335668bb8b26c0

module.exports={pension_bank};
