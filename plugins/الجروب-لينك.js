import fs from 'fs'
let handler = async (m, { conn, args }) => {
let group = m.chat
conn.reply(m.chat, 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group), m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title:'S H A D O W', 
body: 'S H A D O W',         
previewType: 0, thumbnail: fs.readFileSync("./Hina.jpg"),
sourceUrl: `https://solo.to/shadowsensei`}}})   
}
handler.help = ['S H A D O W']
handler.tags = ['S H A D O W']
handler.command = /^لينك$/i
handler.group = true
handler.botAdmin = true
export default handler
