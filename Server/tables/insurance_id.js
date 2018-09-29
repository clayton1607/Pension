var {con}=require('../db/mysql');
var insurance_id=con;
insurance_id.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");


  let sql = "CREATE TABLE if not exists users(
    passport_status boolean,
    passport varchar(255),
    passport_expiry_date date,
    pan_card_status boolean,
    pan_card varchar(255),
    voterid boolean,
    voterid varchar(255),
    drivinglicence_status boolean,
    drivinglicence varchar(255),
    drivinglicence_expiry_date date,
    other_id_status boolean,
    other_id_name varchar(255),
    other_id_no varchar(255)
   )";
  insurance_id.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

module.exports={insurance_id\};
