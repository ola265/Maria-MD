const fs = require('fs');
const chalk = require('chalk');
require('dotenv').config();

//contact details
global.ownernumber = [ process.env.OWNER_NUMBER || "2349034886823"],
global.ownername = process.env.OWNER_NAME || "💙𓆩‎✘𝓥𝓘𝓡𝓤𝓢✘𓆪_✰",
global.ytname = "YT: VirusBotz.inc"
global.socialm = "GitHub: ola265"
global.location = "Nigerian"

global.botname = process.env.BOTNAME || "𝓥𝓘𝓡𝓤𝓢-𝐌𝐃",//name of the bot

//sticker details
global.stickername = process.env.STICKER || "💙𓆩‎✘𝓥𝓘𝓡𝓤𝓢✘𓆪_✰",
global.packname = 'Sticker By 💙𓆩‎✘𝓥𝓘𝓡𝓤𝓢✘𓆪_✰'
global.author = process.env.AUTHOR || "💙𓆩‎✘𝓥𝓘𝓡𝓤𝓢✘𓆪_✰",
//console view/theme
global.themeemoji = '🧩'
global.wm = "Virus botz inc."

//theme link
global.link = 'https://chat.whatsapp.com/JkAV3ikV8k0Hxxkopw4khz'

//custom prefix
global.prefa = process.env.PREFIX || ".",

//false=disable and true=enable
global.welcome = process.env.WELCOME || "false", //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = false //auto view status/story



//reply messages
global.mess = {
    done: '🍭 *Here you go, darling!* ',
    prem: '🍭 *My darling, this feature is reserved for premium users only*',
    admin: '🍭 *My darling, Virus/Ola has set this feature to be reserved for admins only*',
    botAdmin: '🍭 *Darling, this feature can only be used when the bot is a group admin* ',
    owner: '🍭 *My dearest, this feature is reserved for the owner only*',
    group: '🍭 *Sweetheart, this feature is exclusively for groups*',
    private: '🍭 *My love,Virus/Ola has set this feature to be exclusively available for only private chats*',
    wait: '🍭 *Darling, in process...* ',    
    error: '🍭 *Oh darling, there seems to be an error!*',
}

module.exports = {
ownernumber: global.ownernumber,
ownername: global.ownername,
sessionId: process.env.id,
AUTO_BLOCK : process.env.PM_BLOCKER,
STATUS_SAVER : "true",
ANTI_BOT:"true",
}


global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
