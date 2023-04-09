# Making the bot
**If you have already made the bot ignore this part**
- Go to the [Discord Developers portal](https://discord.com/developers) and login with your discord account
- Click on the new application button and enter the bot name and agree to the terms and policies
- Open the application and go to the bot section and click add bot
- Congratulations you have made a bot!
***
# Getting the client id and token
**If you already have them skip to the next step**
- In the bot sections under the bots username you will find a button called copy, click it to get the token
- Then for the client id go to the OAuth2 section and under the client info you will find the client id, now copy it
***
# Setting up the bot
- Using the env GUI (Recommended method because it is easier)
  - From the tools section in the replit sidebar click the padlock icon or open the secrets tab
  - Make a secret with the key TOKEN and it has to be all caps because it's case sensitive and in the value enter your bot token
  - Then create a new secret and name it CLIENTID also all caps and enter your client id
- Using JSON (You can use this if you have experience in JSON or know how to use the JSON format)
  - Copy the JSON code from [config.json](./config.json)
  - In the secrets tab click open raw editor and delete the text in it then paste the code from [config.json](./config.json)
  - Delete the `Enter token here` text and put your bot token
  - Then delete the `Enter client id here` text and put your bot client id

- Now for the bot to work properly open the bot section for your application in the discord developer portal and turn on the presence intent, server members intent, and the message content intent
***
# How to keep the bot online 24/7
- Go to [UpTimeRobot](https://uptimerobot.com)
- Sign up or login
- Click Add New Monitor
- Set the monitor type to HTTP(S)
- Set the name to anything you want and set the url to the repl url which is above the webview for example https://acoolrepl.yourusername.repl.co
- Then set the monitor interval to "every 5 minutes" and set the monitor timeout to "in one second"
- Then click create monitor
- Now the pinger should work

**Your are done setting up the bot and pinger, info on how to add commands and other things can be found inside [index.js](./index.js) with the code or if you want other things not included with the code I really recomend checking out [Discord.js guide](https://discordjs.guide) or using the [discord developer documentation](https://discord.com/developers/docs)**