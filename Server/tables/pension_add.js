var {con}=require('../db/mysql');
var pension_add=con;
pension_add.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");


  let sql = "CREATE TABLE if not exists users(
    address varchar(255),
    flat_room_door_block	varchar(255),
    landmark	varchar(255),
    premises_building_village	varchar(255),
    road_street_lane	varchar(255),
    area_locality_taluk	varchar(255),
    city_town_district	varchar(255),
    pin_code	varchar(255),
    state_ut varchar(255),
    permanent_add_status boolean,
    paddress varchar(255),
    pflat_room_door_block	varchar(255),
    plandmark	varchar(255),
    ppremises_building_village	varchar(255),
    proad_street_lane	varchar(255),
    parea_locality_taluk	varchar(255),
    pcity_town_district	varchar(255),
    ppin_code	varchar(255),
    pstate_ut varchar(255),
  )";
  pension_add.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

module.exports={pension_add};
