var {con}=require('../db/mysql');
var pension_bank=con;
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
  pension_bank.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

module.exports={pension_bank};
