var mysql = require('mysql');

//expressconnectivity
const express= require('express');
var app= express();
app.use(express.static(__dirname+'/views'));

//bodyparserconnectivity
const bodyparser= require('body-parser');
app.use(bodyparser.json());
var urlencodedParser = bodyparser.urlencoded({ extended: false })

//handlebarsconnectivity
const hbs = require('hbs');
app.set('view engine','hbs');

//tables
var {question}=require('./tables/questions.js');

//routes
app.get('/',(req,res)=>{
  res.render('index.hbs');
});

app.get('/forumcat',(req,res)=>{
  question.query('commit',(err)=>{
    if(err) throw err;
    res.render('forum_cat.hbs');
  });

});

app.get('/forumask',(req,res)=>{
  res.render('forum_ask.hbs');
});

// questions
app.get('/question',(req,res,err)=>{

  var askno=req.query.quno;

var questionq=req.query.quest;
var asku=req.query.who;
var asktype=req.query.atype;

var list1=[];
var list2=[];
question.query('select * from anstable where qno= ?',askno,(err,rows)=>{
   if(err) throw err;
   // res.render('./general_forum.hbs',{quest: rows.questions});

   var count;
   var lengthr=rows.length;
   for(count=0;count<lengthr;count++){

     var ask = {
                  'qno':rows[count].qno,
                  'answer':rows[count].answer,
                  'usera':rows[count].usera,
              }

              list1.push(ask);
   }


 });
 question.query('select * from anstable where type= ?',asktype,(err,rows)=>{
    if(err) throw err;
    // res.render('./general_forum.hbs',{quest: rows.questions});

    var count;
    var lengthr=rows.length;
    for(count=0;count<5;count++){

      var ask = {
                   'topuser':rows[count].usera,

               }

               list2.push(ask);
    }


  });

res.render('forum_home.hbs',{askno,questionq,asku,asktype,list1,list2});
});

// general
app.get('/generalforum',(req,res)=>{
  question.query('select * from qtable where type= "general"',(err,rows)=>{
     if(err) console.log("BAD");
     // res.render('./general_forum.hbs',{quest: rows.questions});
     var list=[];
     var count;
     var lengthr=rows.length;
     for(count=0;count<lengthr;count++){

       var ask = {
                    'qno':rows[count].qno,
                    'questions':rows[count].questions,
                    'quser':rows[count].quser,
                    'type':rows[count].type,
                }

                list.push(ask);
     }
      res.render('general_forum.hbs',{list});
   });

});

// dr
app.get('/drforum',(req,res)=>{
  question.query('select * from qtable where type= "dr"',(err,rows)=>{
     if(err) console.log("BAD");

     var list=[];
     var count;
     var lengthr=rows.length;
     for(count=0;count<lengthr;count++){

       var ask = {
                    'qno':rows[count].qno,
                    'questions':rows[count].questions,
                    'quser':rows[count].quser,
                    'type':rows[count].type,
                }

                list.push(ask);
     }
      res.render('dr_forum.hbs',{list});
   });

});


// nps
app.get('/nps',(req,res)=>{
  question.query('select * from qtable where type= "nps"',(err,rows)=>{
     if(err) console.log("BAD");

     var list=[];
     var count;
     var lengthr=rows.length;
     for(count=0;count<lengthr;count++){

       var ask = {
                    'qno':rows[count].qno,
                    'questions':rows[count].questions,
                    'quser':rows[count].quser,
                    'type':rows[count].type,
                }

                list.push(ask);
     }
      res.render('nps_forum.hbs',{list});
   });

});

// defence
app.get('/defence',(req,res)=>{
  question.query('select * from qtable where type= "defence"',(err,rows)=>{
     if(err) console.log("BAD");
     // res.render('./general_forum.hbs',{quest: rows.questions});
     var list=[];
     var count;
     var lengthr=rows.length;
     for(count=0;count<lengthr;count++){

       var ask = {
                    'qno':rows[count].qno,
                    'questions':rows[count].questions,
                    'quser':rows[count].quser,
                    'type':rows[count].type,
                }

                list.push(ask);
     }
      res.render('defence_forum.hbs',{list});
   });

});

// gratuity
app.get('/gratuity',(req,res)=>{
  question.query('select * from qtable where type= "gratuity"',(err,rows)=>{
     if(err) console.log("BAD");
     // res.render('./general_forum.hbs',{quest: rows.questions});
     var list=[];
     var count;
     var lengthr=rows.length;
     for(count=0;count<lengthr;count++){

       var ask = {
                    'qno':rows[count].qno,
                    'questions':rows[count].questions,
                    'quser':rows[count].quser,
                    'type':rows[count].type,
                }

                list.push(ask);
     }
      res.render('gratuity_forum.hbs',{list});
   });

});

// reply from forumhome
app.post('/reply',urlencodedParser,(req,res)=>{
    var replystring= req.body.replyf;
    var qno= req.body.questno;
    var type=req.body.questtype;

    var values = [[qno,replystring,"Solomon",type]];
    question.query('insert into anstable (qno,answer,usera,type) values ?',[values],(err,rows)=>{
       if(err) question.query('rollback',(err,rows)=>{
           if(err)throw err;
           question.query('commit',(err)=>{
             if(err)throw err;
              res.redirect('back');
           });
       });




   });
 });

 app.post('/ask',urlencodedParser,(req,res)=>{
     var questionp= req.body.yourq;
     var type= req.body.drop;


     var values1 = [[questionp,"Solomon",type]];

       question.query('insert into qtable (questions,quser,type) values ?',[values1],(err,row)=>{
        if(err) throw err;

        question.query('select qno from qtable where questions= ?',questionp,(err,rows)=>{
          if(err) throw err;
          var values2 = [[rows[0].qno,"This Discussion is ready","Admin","default"]];
          question.query('insert into anstable (qno,answer,usera,type) values ?',[values2],(err,rows)=>{
            if(err) throw err;
            res.redirect('back');
          });
        });




     });

     });


app.listen(3004,(err)=>{
  if(err) throw err;
  console.log('Express server is runnin at port 3000'
)
});
