import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let pp = imagen4
let vn = './media/menu.mp3'
global.shadow = ['@201063720595'] 
let img = await(await fetch('https://i.imgur.com/JP52fdP.jpg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'ar'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
const numberToEmoji = { "0": "0️⃣", "1": "1️⃣", "2": "2️⃣", "3": "3️⃣", "4": "4️⃣", "5": "5️⃣", "6": "6️⃣", "7": "7️⃣", "8": "8️⃣", "9": "9️⃣", }
let lvl = level
let emoji = Array.from(lvl.toString()).map((digit) => numberToEmoji[digit] || "❓").join("")

let str = `╭*⚜️━━─━━━⌠⚜️⌡━━━─━━⚜️*
*⚜️♤↺${wm}↻♤⚜️*
*⚜️━━─━━━⌠⚜️⌡━━━─━━⚜️*
⚜️⇜ *ミ💖 ${taguser} 💖彡*
*⚜️━━─━━━⌠⚜️⌡━━━─━━⚜️*
⚜️⇜ *المطور:*${shadow}
⚜️⇜ *الرقم:* wa.me/201063720595
⚜️⇜ *روابط:* https://solo.to/shadowsensei
⚜️⇜ *التاريخ:* ${date}
⚜️⇜ *اليوم:* ${dia}
⚜️⇜ ${bottime}
⚜️⇜ *وقـت الـعـمـل:* ${uptime}
*⚜️━━─━━━⌠⚜️⌡━━━─━━⚜️*
*❖┃قــائمــه┋📜┋الاوامر┃❖*
*⚜️━━─━━━⌠⚜️⌡━━━─━━⚜️*

*⚜️━━─━━⌠ قائمه الجروب ⌡━━─━━⚜️*

⚜️⇜ .منشن 
⚜️⇜ منشن جماعي لكل الاعضاء 📧


⚜️⇜ .منشنلي
⚜️⇜ البوت يمنشن لك 🐤


⚜️⇜ .وهمي
⚜️⇜ منشن وهمي لكل الاعغضاء 👽


⚜️⇜ .رستر
⚜️⇜ يسوي رستارت لرابط القروب ♻️


⚜️⇜ .الاوامر
⚜️⇜ لعرض اوامر البوت 📜
 

⚜️⇜ الدعم
⚜️⇜ يجلب لك رابط الاستقبال 🌐


⚜️⇜ .المطور
⚜️⇜ يجلب لك رقم المطور 🧑‍💻


⚜️⇜ .ترقيه
⚜️⇜ ترقيه عضو لمشرف ↖️


⚜️⇜ .تخفيض
⚜️⇜ تخفيض مشرف لعضو ↙️


⚜️⇜ .اضافه
⚜️⇜ اضافه عضو للقروب 🚸


⚜️⇜ .طرد
⚜️⇜ طرد عضو من القروب 🐍


⚜️⇜ .حذف
⚜️⇜ حذف رسائل الاعضاء في الجروب 🦦


⚜️⇜ .المشرفين
⚜️⇜ يعرض لك قائمه المشرفين ✨


⚜️⇜ .لينك
⚜️⇜ يجلب لك رابط الجروب 🪀


⚜️⇜ .تغيرالترحيب
⚜️⇜ تغيير ترحيب البوت 🎉


⚜️⇜ .تغيرالمغادره
⚜️⇜ تغيير مغادره البوت 🗑️


⚜️⇜ .بوت
⚜️⇜يعطيك تعليم على البوت📜
*⚜️━━─━━⌠ قائمه التحميل ⌡━━─━━⚜️*
⚜️⇜ .صورتك
⚜️⇜تصميم صورتك مع شخصية انمي😒


⚜️⇜ .صورتي
⚜️⇜يعطيك خلفيتك😎


⚜️⇜ انطق
⚜️⇜يحول لك اي نص الي كلام 😯


⚜️⇜ .قط
⚜️⇜يعطيك صور قطط🐱
*⚜️━━─━━⌠ قائمه التحويل ⌡━━─━━⚜️*

⚜️⇜ .ملصق
⚜️⇜ تحويل الصور وفيديوهات لملصق 🎴


⚜️⇜ .سرقه
⚜️⇜ سرقه الملصقات بحقوقك 🎴


⚜️⇜ .لصوره
⚜️⇜ تحويل الملصقات لصور 🔂


⚜️⇜ .لفيديو
⚜️⇜ تحويل الملصق المتحرك لفيديو ♻️


⚜️⇜ .لصوتي
⚜️⇜ تحويل الفيديوهات لصوت 🔁


⚜️⇜ .تليجراف
⚜️⇜ رفع الصور وعمل لها رابط 📠


⚜️⇜ .صوره
⚜️⇜ يجلب لك صور من جوجل 🖼️

*⚜️━━─━━⌠ قائمه التسليه ⌡━━─━━⚜️*

⚜️⇜ .بروفايل
⚜️⇜ يجلب لك معلومات بروفايلك 🪪


⚜️⇜ .اكس-او
⚜️⇜ لعبه اكس او للتسليه 🎮


⚜️⇜ .مغادره
⚜️⇜ مغادره الجوله في اكس او ❌


⚜️⇜ .توب
⚜️⇜ يجيب توب 10 اللي تختارهم 🏆


⚜️⇜ .شاذ
⚜️⇜ امزح مع صاحبك بالمنشن 🏳️‍🌈


⚜️⇜ .لو
⚜️⇜لو خيروك 😅


⚜️⇜ .حب
⚜️⇜منشن الي تحبه والبوت يقيس حبه لك❤️

⚜️⇜ .غباء 
⚜️⇜البوت يحدد لك كم غبائه🐱

⚜️⇜ .رجال
⚜️⇜يحدد لك كم عدد رجولته 🤣

⚜️⇜ .ذكي
⚜️⇜يحدد لك كم عدد الذكاء فيك😂


⚜️⇜ .الحب
⚜️⇜ مقياس حب الاصدقاء 🫂


⚜️⇜ .سؤال
⚜️⇜ لعبه الصراحه 🎋


⚜️⇜ .نوم
⚜️⇜يعطيك ملصقات انمي في شكل 😴 


⚜️⇜ .عيد
⚜️⇜يعطيك صور عيد ميلاد 🧣
*⚜️━━─━━━⌠⚜️⌡━━━─━━⚜️*

*⚜️━━─━━━⌠⚜️⌡━━━─━━⚜️*`.trim()
if (m.isGroup) {
await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})

let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })  
} else { 
await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat,{ image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })}
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(منيو)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}