const { Client, Intents } = require("discord.js");
const socketServer = require("./socketServer");
var net = require("net");

const EventEmitter = require('events');
const EventBus = new EventEmitter();


const { DISCORD_KEY } = require("./../key.json");

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_VOICE_STATES,
  ],
});

const commandLetter = "*";
let server;

client.on("ready", async () => {
  console.log("준비 완료");
  client.channels.cache.get("818849080339988550").send("start");
  server = net.createServer((socket) => {
  console.log(socket.address().address + " connected.");
  // client로 부터 오는 data를 화면에 출력
  socket.write("connectStart" + "\n[*Fin*]\n");

  socket.on("data", function (data) {
    //console.log("rcv:" + data);
    //socket.write("반송" + data + "\n[*Fin*]\n");
    client.emit('senddiscord', data);
    console.log(data+typeof(data));
  });
  
  socket.on('discord', (msg) => {
      console.log("디스코드로 보냄:"+msg);
      socket.write(msg);
  });

  EventBus.on('discord', (msg) => {
    console.log("디스코드로 보냄:"+msg);
    socket.write(msg);
  });

  //socket.write("aaaaaaaa\n"+"\n[*Fin*]\n");

  // client와 접속이 끊기는 메시지 출력
  socket.on("close", function () {
    console.log("client disconnted.");
  });
  // client가 접속하면 화면에 출력해주는 메시지
});

  server.listen(10001, function () {
    console.log("listening on 10001");
  });
});

client.on("message", async (msg) => {
  console.log(msg.content);
  if (msg.content == "test") {
    console.log('test시작');
    server.emit('discord', msg.content + "\n[*Fin*]\n");
  }
  if(msg.author.id != 919928152304791592){
    EventBus.emit('discord', msg.member.displayName+" : "+msg.content + "\n[*Fin*]\n");
  }
  
});

client.on('senddiscord', (msg) => {
  client.channels.cache.get("818849080339988550").send("수신:"+msg);
})
client.login(DISCORD_KEY);