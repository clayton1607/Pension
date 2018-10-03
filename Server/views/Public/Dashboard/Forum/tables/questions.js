var {con}=require('../db/database.js');
var question = con;
let stmt1= 'create table if not exists qtable (qno int NOT NULL AUTO_INCREMENT UNIQUE,questions varchar(256),quser varchar(256) ,type varchar(256) ,PRIMARY KEY (qno))';
question.query(stmt1,(error,result)=>{
  if(error)
    throw error;
    console.log("Qtable is ready");
});
let stmt2= 'create table if not exists anstable (qno int, answer varchar(256),usera varchar(256),type varchar(256))';
question.query(stmt2,(error,result)=>{
  if(error)
    throw error;
    console.log("Anstable is ready");
});

module.exports={question};
