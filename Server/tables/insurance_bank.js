var {con}=require('../db/mysql');
var insurance_bank=con;
  let sql = "CREATE TABLE if not exists insurance_bank(occupation_details varchar(255),income_range varchar(255),educational_qualifications	 varchar(255),politics boolean,account_type  varchar(255),bank_number  varchar(255),branch_name 	 varchar(255),branch_address_pin	 varchar(255),state	 varchar(255),bank_ifsc	 varchar(255),application_no INT not null,FOREIGN KEY fk_app_no (application_no) REFERENCES insurance (application_no) ON UPDATE CASCADE ON DELETE CASCADE)";
  insurance_bank.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
<<<<<<< HEAD
=======
});
>>>>>>> 3bf4a544fc2607c2c522e687ff335668bb8b26c0

module.exports={insurance_bank};
