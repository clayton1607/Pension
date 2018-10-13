const Nexmo = require('nexmo')

const nexmo = new Nexmo({
  apiKey:'b03ff309',
  apiSecret:'KwxUy9xeTjuJbYEn'
})
var sendMessage={
  from : '917387426536',
  to : '',
  text :'',
  sendSms() : function(){
      nexmo.message.sendSms(this.from,this.to,this.text);
  }
};



module.exports={sendMessage};
