var {con}=require('../db/mysql');
var pension_id=con;


  let sql = "CREATE TABLE if not exists pension_id(image_id varchar(255),appid_status boolean,id varchar(255),passport varchar(255),passport_expiry_date date,pan_card varchar(255),voterid varchar(255),drivinglicence varchar(255),drivinglicence_expiry_date date,other_id_name varchar(255),other_id_no varchar(255),application_no INT not null,FOREIGN KEY fk_app_no (application_no) REFERENCES pension (application_no) ON UPDATE CASCADE ON DELETE CASCADE)";
  pension_id.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });


module.exports={pension_id};
