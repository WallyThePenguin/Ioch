const { Client, PermissionLevels } = require('klasa');
const config = require('./client/config.json');

const client = new Client({
  clientOptions: {
    fetchAllMembers: false,
  },
  prefix: 'Now',
  cmdEditing: true,
  cmdLogging: true,
  typing: true,
  readyMessage: client => `${client.user.tag}, Ready to serve ${client.guilds.size} guilds and ${client.users.size} users`,
});

this.client.user.setActivity(`Now with ${this.client.users.size} Users`, { type: 'LISTENING' });
client.login(config.botToken);