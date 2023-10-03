import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `${lenguajeGB['smsContAdult']()}`
let url = pieexs[Math.floor(Math.random() * pieexs.length)]
conn.sendFile(m.chat, url, 'error.jpg', ` موت ياورع`, m)
}

handler.help = ['S H A D O W']
handler.tags = ['S H A D O W']
handler.command = /^(تخ)$/
handler.exp = 50
handler.level = 0
export default handler

global.pieexs =[
"https://telegra.ph/file/499f22e2d468d4f5e31c6.mp4",
  ];