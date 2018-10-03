var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "solo",
  password: "solo",
  database:"myapp"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

});
module.exports={con};
