import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `⚜️━━─━━━⌠⚜️⌡━━━─━━⚜️
𝑺𝑈𝑃𝑃𝛩𝑅𝑇 𝐵𝛩𝑇 𝑺𝐻𝐴𝐷𝛩𝑊
⚜️━━─━━━⌠⚜️⌡━━━─━━⚜️
❖┃رابط ┋📜┋ الجروب ┃❖
⚜️━━─━━━⌠⚜️⌡━━━─━━⚜️
⚜️⇜ https://chat.whatsapp.com/F6gNHec7QOCERSVC5mAEGr
⚜️━━─━━━⌠⚜️⌡━━━─━━⚜️`
await conn.reply(m.chat, info, m)
return conn.sendMessage(m.chat, {
          react: {
            text: '✨',
            key: m.key,
          }})
}
handler.customPrefix = /^الدعم$/i
handler.command = new RegExp

export default handler
function pickRandom(list) { 
     return list[Math.floor(Math.random() * list.length)] 
 }