var {con}=require('../db/mysql');
var message=con;

  let sql = "CREATE TABLE if not exists message ()";
  admin.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

module.exports={message};
