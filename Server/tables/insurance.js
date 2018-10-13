var {con}=require('../db/mysql');
var insurance=con;

  let sql = "CREATE TABLE if not exists insurance(application_no INT primary key AUTO_INCREMENT,application_status varchar(255),insurance_id boolean,insurance_add boolean,insurance_bank boolean,username varchar(255) not null,FOREIGN KEY fk_username (username) REFERENCES users (username) ON UPDATE CASCADE ON DELETE CASCADE)";
  insurance.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

module.exports={insurance};
