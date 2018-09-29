var {con}=require('../db/mysql');
var otpdb=con;
let sql = "CREATE TABLE if not exists otpdb(otp varchar(255))";
otpdb.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
});

module.exports={otpdb};
