const { MessageEmbed } = require('discord.js');
const logger = require('../services/logger');

module.exports = {
    name: 'Contract',
    contexts: {
        text: true,
    },
    async execute(msg, args, guildSettings, user) {
        if(args.length < 1) {
            const embed = new MessageEmbed();
            embed.setTitle(`${process.env.BOT_NAME} | Prefix`);
            embed.setColor('#00ffaa');
            embed.addField('Prefix', guildSettings.prefix);
            msg.channel.send(embed);
        }
    },
};