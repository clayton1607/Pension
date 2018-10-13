var {con}=require('../db/mysql');
var pension=con;

  let sql = "CREATE TABLE if not exists pension (application_no INT primary key AUTO_INCREMENT,application_status varchar(255),pension_personal boolean,pension_id boolean,pension_add boolean,pension_bank boolean,dr_calc_status boolean,dr_calc varchar(255),gratuity_calc_status boolean,gratuity_calc varchar(255),pension_calc_status boolean,pension_calc INT,username varchar(255) not null,FOREIGN KEY fk_username (username) REFERENCES users (username) ON UPDATE CASCADE ON DELETE CASCADE)";
  pension.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });


module.exports={pension};
