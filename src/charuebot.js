const { Client, Intents } = require('discord.js');
const socketServer = require('./socketServer');
var net = require('net');


const {
    DISCORD_KEY
} = require('./../key.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES]  });

const commandLetter = '*';


client.on('ready', async() => {
    
  console.log("준비 완료");
  client.channels.cache.get('818849080339988550').send('start');
  let server = net.createServer(socketServer.socketS);

  server.listen(10001,function(){
    console.log('listening on 10001');
});
});

client.on('message', async msg =>{

  console.log(msg);
  if(msg.content == "test"){
    socketServer.socketS(socket).write("hello"+"\n[*Fin*]\n");
  }

});



client.login(DISCORD_KEY);








