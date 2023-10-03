let handler  = async (m, { conn }) => { 
 let name = conn.getName(m.sender) 
 let teks = ` 
 ${pickRandom([`نعم يبابي`])} 
 `.trim() 
 conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }}) 
 } 
 handler.customPrefix = /كيوتي/i 
 handler.command = new RegExp 
 handler.mods = true
 export default handler 

 function pickRandom(list) { 
     return list[Math.floor(Math.random() * list.length)] 
 }