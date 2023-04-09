// Please open README.md for info on how to setup the bot

// To keep the bot online 24/7 see the steps in stayonline.md

// You can use keepalive.js to have uptimerobot.com ping your robot and keep it online 24/7
const keepalive = require('./keepalive.js');
keepalive;
// Express is used to show when the keepalive server is online and sends "Alive" in webview
const express = require('express');
const app = express();
// dotenv is used to process the token and clientid
require('dotenv/config');
// These are some of the important packages for discord js that you might need you can always add more between the {}
const { Client, GatewayIntentBits, ActivityType, Routes, CommandInteraction, PermissionsBitField, ButtonStyle, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');
const { REST } = require('@discordjs/rest');

const token = (process.env.TOKEN);
const clientid = (process.env.CLIENTID);

const client = new Client({
    intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
  ],
});
const rest = new REST({ version: '10' }).setToken(token);

client.on('ready', () => {
  console.log(`Successfully logged in as ${client.user.username}`);
  console.log('Bot is online!')
  // activity is optional if you don't want it just remove it
  // replace the Playing ActivityType.Playing with the activity type you want the types are Watching,Playing,Listening,Competing,Streaming
  client.user.setActivity("activity here", { type: ActivityType.Playing })
})

// Prefixed commands
const prefix = "prefix here"
client.on('messageCreate', message => {
  // to make a prefixed command replace commandname with the command name and change the reply to whatever reply you want
  if (message.content.toLowerCase() === prefix + "commandname") {
    message.reply("reply");
    
  }
  // to make more commands just copy and pase the else if statement below to make more commands
  else if(message.content.toLowerCase() === prefix + "comannd2") {
    message.reply("another reply")
  }
});

// Slash commands
async function cmds() {
  // command types are 1 for a normal slash command, 2 for a user command and 3 for an interact with message command more info about 2 and 3 can be found here https://discord.com/developers/docs/interactions/application-commands#user-commands
  const commands = [
    // to create a new command copy and paste the first command under another command as shown with cmd2 then change the name, description and type field
  {
    name: "ping",
    description: "reply with pong",
    type: 1
  },
  {
    name: "cmd2",
    description: "second cmd",
    type: 1
  },
  ];
  try {
    Routes.applicationCommands
    await 
rest.put(Routes.applicationCommands(clientid), {
      body: commands
    })
  } catch (err) {
    console.log(err)
  }
}

// Adding functions to the slash commands
client.on('interactionCreate', async (interaction) => {
  // enter the command name between the double quotes
  if (interaction.commandName === "ping") {
    // enter what you want to make the bot do when a user uses the command in this example it just replies with pong
    interaction.reply("pong")
  }
    // copy and paste the else if statement below to make functions for other slash commands
  else if (interaction.commandName === "another cmd") {
    // enter the function you want here
  }
});

cmds();

// Run the bot

client.login(token).catch(error => {
  // Log errors
  // If error is Unknown application code:10002 please check if the client id is correct

	if (error.code == 'TokenInvalid') {
		console.log('Error: Please enter a valid token');
	}
  else{
    console.error(error)
  }
});

// Congratulations your bot should work now