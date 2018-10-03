var {con}=require('../db/mysql');
var insurance_bank=con;
insurance_bank.connect(function(err) {
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
  insurance_bank.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

module.exports={insurance_bank};
