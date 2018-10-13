var {con}=require('../db/mysql');
var personal=con;



  let sql = "CREATE TABLE if not exists personal(image varchar(255),personal_details_status boolean,first_name varchar(255),middle_name varchar(255),last_name varchar(255),father_name varchar(255),mothers_name varchar(255),date_of_birth date,city_of_birth varchar(255),country_of_birth varchar(255),gender varchar(255),martial_status varchar(255),spouse_name varchar(255),phone_no varchar(255),fax varchar(255),application_no INT not null,FOREIGN KEY fk_app_no (application_no) REFERENCES pension (application_no) ON UPDATE CASCADE ON DELETE CASCADE)";
  personal.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

module.exports={personal};
