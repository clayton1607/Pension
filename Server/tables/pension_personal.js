var {con}=require('../db/mysql');
var users=con;
users.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");


  let sql = "CREATE TABLE if not exists users(
    application_status boolean,
    last_login varchar(255),
    signup_date varchar(255),
    dr_calc_status boolean,
    dr_calc INT,
    gratuity_calc_status boolean,
    gratuity_calc INT,
    pension_calc_status boolean,
    pension_calc INT,
    personal_details_status boolean,
    first_name varchar(255),
    middle_name varchar(255),
    last_name varchar(255),
    father_name varchar(255),
    mothers_name varchar(255),
    date_of_birth date,
    city_of_birth varchar(255),
    country_of_birth varchar(255),
    gender varchar(255),
    martial_status varchar(255),
    spouse_name varchar(255),
    phone_no varchar BIGINT,
    fax varchar(255),
  )";
  users.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

module.exports={users};
