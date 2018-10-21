const Discord = require("discord.js")
const bot = new Discord.Client()

//id des roles
LCT=503225813873983498
TF=503225969574805544
TH=503230180295180288
PW=503226041150603289
Ash=503226094644756501
Ni=503226278380437504

everyone=503225451175608320
admin=503225529369886741
Leaders=503225672160903182

function roleNonAttribue (member) {
    tab = Array.from(member.roles)
    for (i = 0; i<tab.length;i++){
        if (tab[i][0] != 503225451175608320 &&
            tab[i][0] != 503225529369886741 &&
            tab[i][0] != 503225672160903182){
                return false
            }
    }
    return true
}



bot.on('message', msg => {
    if (msg.content === ':help') {
      msg.reply('Write :LCT or :TF or :TH or :PW or :Ash or :Ni in order to your alliance.');
    }
    else if (msg.content === ':LCT') {//LCT
        if (roleNonAttribue(msg.member)) {
            msg.member.addRole('503225813873983498')
            .then(console.log)
            .catch(console.error);
            msg.reply('Now you have the role LCT')
        }
        else {
            msg.reply('You already have a role')
        }
    }
    else if (msg.content === ':PW') {//PW
        if (roleNonAttribue(msg.member)) {
            msg.member.addRole('503226041150603289')
            .then(console.log)
            .catch(console.error);
            msg.reply('Now you have the role PW')
        }
        else {
            msg.reply('You already have a role')
        }
    }
    else if (msg.content === ':TF') {//TF
        if (roleNonAttribue(msg.member)) {
            msg.member.addRole('503225969574805544')
            .then(console.log)
            .catch(console.error);
            msg.reply('Now you have the role TF')
        }
        else {
            msg.reply('You already have a role')
        }
    }
    else if (msg.content === ':TH') {//TH
        if (roleNonAttribue(msg.member)) {
            msg.member.addRole('503230180295180288')
            .then(console.log)
            .catch(console.error);
            msg.reply('Now you have the role TH')
        }
        else {
            msg.reply('You already have a role')
        }
    }
    else if (msg.content === ':Ni') {//Ni
        if (roleNonAttribue(msg.member)) {
            msg.member.addRole('503226278380437504')
            .then(console.log)
            .catch(console.error);
            msg.reply('Now you have the role Ni')
        }
        else {
            msg.reply('You already have a role')
        }
    }
    else if (msg.content === ':Ash') {//Ash
        if (roleNonAttribue(msg.member)) {
            msg.member.addRole('503226094644756501')
            .then(console.log)
            .catch(console.error);
            msg.reply('Now you have the role Ash')
        }
        else {
            msg.reply('You already have a role')
        }
    }
  });


bot.login("NTAzMjcyNjE4MjQ2Mjc1MDky.Dq4dnw.PC2HQcYOvPop-SUOfjPAaOPM7dk")
