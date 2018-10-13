var {con}=require('../db/mysql');
var insurance_id=con;


  let sql = "CREATE TABLE if not exists insurance_id(passport_status boolean,passport varchar(255),passport_expiry_date date,pan_card_status boolean,pan_card varchar(255),voterid_status boolean,voterid varchar(255),drivinglicence_status boolean,drivinglicence varchar(255),drivinglicence_expiry_date date,other_id_status boolean,other_id_name varchar(255),other_id_no varchar(255),application_no INT not null,FOREIGN KEY fk_app_no (application_no) REFERENCES insurance (application_no) ON UPDATE CASCADE ON DELETE CASCADE)";
  insurance_id.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

module.exports={insurance_id};
