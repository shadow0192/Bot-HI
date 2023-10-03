import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = (await axios.get(`https://raw.githubusercontent.com/Darkshadow201293/ShadowMedia-MD/main/edit.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendFile(m.chat, url, 'error.jpg', `بب`, m)}

handler.help = ['S H A D O W']
handler.tags = ['S H A D O W']
handler.command = /^(ايديت)$/i
export default handler
