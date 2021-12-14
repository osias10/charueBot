const { Client, Intents } = require('discord.js');


const {
    DISCORD_KEY
  } = require('./../key.json');

  const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES]  });

  const commandLetter = '*';

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES]  });

client.on('ready', async() => {
    //await ytdlw.downloadFromWebsite("./src/data/youtube-dl/", os.platform());
    //const youtubeDlWrap = new ytdlw("../src/data/youtube-dl/");
    console.log("준비 완료");
    
});

client.on('message', async msg =>{



});

client.login(DISCORD_KEY);