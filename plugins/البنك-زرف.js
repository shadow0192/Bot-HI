let ro = 2000
let handler = async (m, { conn, usedPrefix, command}) => {
let time = global.db.data.users[m.sender].lastrob + 600000
if (new Date - global.db.data.users[m.sender].lastrob < 600000) throw `*⏱️ تقدر تسرق تاني بعد ${msToTime(time - new Date())}*`
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
else who = m.chat
if (!who) throw `*[❗] اعمل منشن لل هتسرقه يحرامي*`
if (!(who in global.db.data.users)) throw `*[❗] المستخدم غير موجود في قاعدة البيانات الخاصة بي.*`
let users = global.db.data.users[who]
let rob = Math.floor(Math.random() * ro)
if (users.exp < rob) return m.reply(`😔 @${who.split`@`[0]} لديه أقل من *${ro} خبرة*\nلا تسرق رجل فقير":`, null, { mentions: [who] })    
global.db.data.users[m.sender].exp += rob
global.db.data.users[who].exp -= rob 
m.reply(`*‣ خد يحرامي ${rob} خبره من @${who.split`@`[0]}*`, null, { mentions: [who] })
global.db.data.users[m.sender].lastrob = new Date * 1
}
handler.help = ['S H A D O W']
handler.tags = ['S H A D O W']
handler.command = ['زرف','اسرق','هجوم']
export default handler  
function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return minutes + " دقائق"}