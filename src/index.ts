// build 14d7e225cd
// (bot) 8ca352
import { Client, GatewayIntentBits } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.once('ready', () => console.log('ready'));
client.login(process.env.DISCORD_TOKEN);
