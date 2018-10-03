var {con}=require('../db/mysql');
var insurance=con;
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
  insurance.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

module.exports={insurance};
