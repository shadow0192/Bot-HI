//prince lo9mane
import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `اكتب نصا للتحدث معي\nمثال: ${usedPrefix + command} مرحبا ياشادو*`
let res = await fetch(`https://api.simsimi.net/v2/?text=${text}&lc=ar`)
let json = await res.json()
let tes = json.success.replace('simsimi', 'simsimi').replace('Simsimi', 'Simsimi').replace('sim simi', 'sim simi')
m.reply(`${tes}`) 
}
handler.help = ['simsimi']
handler.tags = ['General']
handler.command = ['بوت', 'يابوت', 'simsimi'] 
export default handler