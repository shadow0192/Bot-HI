import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = (await axios.get(`https://raw.githubusercontent.com/Darkshadow201293/ShadowMedia-MD/main/3ed.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendFile(m.chat, url, 'error.jpg', `هينااا عمتك تقولللك كل عام وانت بخير 😁`, m)}

handler.help = ['S H A D O W']
handler.tags = ['S H A D O W']
handler.command = /^(عيد)$/i
export default handler
