const Discord = require('discord.js');
const DMonk = new Discord.Client(); //"NDc2MzUwMjQ0ODA4ODE4Njg5.Dk9L7Q.GjmVCFt_ZuLBEcmxCUXPzBfeEdw"
const Dema = new Discord.Client(); //"NDc3NTExNjY4MjA1ODc5Mjk2.Dk9QYQ.o7sbq8LxF6Dq3kXgc-2NHCwLtLw"
const liuruo = new Discord.Client(); //"NDc3NTE1NTEwMTk2NjAwODQy.Dk9RLw.TOdhXimFzGcM9x2W0wvYGsOEQvI"
const Blood = new Discord.Client(); //"NDc3NTE2OTAzODIxMjEzNjk2.Dk9SIA.vuwfNgghTC0w6jsUyovF904DdYA"
const Sara = new Discord.Client(); //"NDc3NTE3NzgyNTI3OTAxNjk3.Dk9S5A.EunOyfEJCJ80hU6ozyDAuXTF2mw"

DMonk.on('ready', () => {
  console.log(`Logged in as ${DMonk.user.tag}!`);
});
Dema.on('ready', () => {
  console.log(`Logged in as ${Dema.user.tag}!`);
});
liuruo.on('ready', () => {
 console.log(`Logged in as ${liuruo.user.tag}!`);
});
Blood.on('ready', () => {
  console.log(`Logged in as ${Blood.user.tag}!`);
});
Sara.on('ready', () => {
  console.log(`Logged in as ${Sara.user.tag}!`);
});
 DMonk.on('message', message => {
      if(message.content.startsWith('Mjoin')) {
      if (message.author.id !== '434845976050794516') return message.react('❎')
        if (!message.member.voiceChannel) return message.reply(':x: **You have to be in a voice channel to use this command.**');
        message.member.voiceChannel.join().then(message.react('✅'));
      }
  })
DMonk.on('message', message => {
        if(message.author.id !== '434845976050794516') return;
        if(message.content !== 'Mplay') return;
  const ytdl = require('ytdl-core');
    const streamOptions = { seek: 0, volume: 100 };
    const broadcast = client.createVoiceBroadcast();
   
    message.guild.member(message.author).voiceChannel.join()
      .then(connection => {
        const stream = ytdl('https://www.youtube.com/watch?v=cjq233W90JM', { filter : 'audioonly' });
        broadcast.playStream(stream);
        const dispatcher = connection.playBroadcast(broadcast);
      })
      .catch(console.error);
   });
   Dema.on('message', message => {
      if(message.content.startsWith('Djoin')) {
      if (message.author.id !== '434845976050794516') return message.react('❎')
        if (!message.member.voiceChannel) return message.reply(':x: **You have to be in a voice channel to use this command.**');
        message.member.voiceChannel.join().then(message.react('✅'));
      }
  })
Dema.on('message', message => {
        if(message.author.id !== '434845976050794516') return;
        if(message.content !== 'Dplay') return;
  const ytdl = require('ytdl-core');
    const streamOptions = { seek: 0, volume: 100 };
    const broadcast = client.createVoiceBroadcast();
   
    message.guild.member(message.author).voiceChannel.join()
      .then(connection => {
        const stream = ytdl('https://www.youtube.com/watch?v=rP18g3VSnaM', { filter : 'audioonly' });
        broadcast.playStream(stream);
        const dispatcher = connection.playBroadcast(broadcast);
      })
      .catch(console.error);
   });
 liuruo.on('message', message => {
      if(message.content.startsWith('ljoin')) {
      if (message.author.id !== '434845976050794516') return message.react('❎')
        if (!message.member.voiceChannel) return message.reply(':x: **You have to be in a voice channel to use this command.**');
        message.member.voiceChannel.join().then(message.react('✅'));
      }
  })
liuruo.on('message', message => {
        if(message.author.id !== '434845976050794516') return;
        if(message.content !== 'lplay') return;
  const ytdl = require('ytdl-core');
    const streamOptions = { seek: 0, volume: 100 };
    const broadcast = client.createVoiceBroadcast();
   
    message.guild.member(message.author).voiceChannel.join()
      .then(connection => {
        const stream = ytdl('https://www.youtube.com/watch?v=Ktync4j_nmA', { filter : 'audioonly' });
        broadcast.playStream(stream);
        const dispatcher = connection.playBroadcast(broadcast);
      })
      .catch(console.error);
   });
 Blood.on('message', message => {
      if(message.content.startsWith('Bjoin')) {
      if (message.author.id !== '434845976050794516') return message.react('❎')
        if (!message.member.voiceChannel) return message.reply(':x: **You have to be in a voice channel to use this command.**');
        message.member.voiceChannel.join().then(message.react('✅'));
      }
  })
Blood.on('message', message => {
        if(message.author.id !== '434845976050794516') return;
        if(message.content !== 'Bplay') return;
  const ytdl = require('ytdl-core');
    const streamOptions = { seek: 0, volume: 100 };
    const broadcast = client.createVoiceBroadcast();
   
    message.guild.member(message.author).voiceChannel.join()
      .then(connection => {
        const stream = ytdl('https://www.youtube.com/watch?v=WYT0pQne-7w', { filter : 'audioonly' });
        broadcast.playStream(stream);
        const dispatcher = connection.playBroadcast(broadcast);
      })
      .catch(console.error);
   });
 Sara.on('message', message => {
      if(message.content.startsWith('Sjoin')) {
      if (message.author.id !== '434845976050794516') return message.react('❎')
        if (!message.member.voiceChannel) return message.reply(':x: **You have to be in a voice channel to use this command.**');
        message.member.voiceChannel.join().then(message.react('✅'));
      }
  })
Sara.on('message', message => {
        if(message.author.id !== '434845976050794516') return;
        if(message.content !== 'Splay') return;
  const ytdl = require('ytdl-core');
    const streamOptions = { seek: 0, volume: 100 };
    const broadcast = client.createVoiceBroadcast();
   
    message.guild.member(message.author).voiceChannel.join()
      .then(connection => {
        const stream = ytdl('https://www.youtube.com/watch?v=a-JdEFdgBaU', { filter : 'audioonly' });
        broadcast.playStream(stream);
        const dispatcher = connection.playBroadcast(broadcast);
      })
      .catch(console.error);
   });
DMonk.login(process.env.DMONK);
Dema.login(process.env.DEMA);
liuruo.login(process.env.LIURUO);
Blood.login(process.env.BLOOD);
Sara.login(process.env.SARA);
