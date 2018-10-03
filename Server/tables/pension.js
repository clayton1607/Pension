var {con}=require('../db/mysql');
var pension=con;
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
  pension.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

module.exports={pension};
