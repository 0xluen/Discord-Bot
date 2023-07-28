const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
/// Example /id 5 
client.on('message', msg => {
    const args = msg.content.split(' ');
    const command = args[0];
  
    if (command === '/id') {
      if (args.length === 2) {
        const num = parseInt(args[1]);
        if (!isNaN(num)) {
          msg.channel.send("Hello!\nHello!\n\nHello!");
        } else {
          msg.channel.send('Invalid command. Please enter a number when using the /id command.');
        }
      } else {
        msg.channel.send('Invalid command. Please use the /id command in the format /id <number>.');
      }
    }
});

client.login('TOKEN'); 