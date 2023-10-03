let handler = async (m, { conn, args, usedPrefix, command }) => {
let isClose = { // S H A D O W
'open': 'not_announcement',
'close': 'announcement',
'افتح': 'not_announcement',
'اغلق': 'announcement',
'فتح': 'not_announcement',
'غلق': 'announcement',
}[(args[0] || '')]
if (isClose === undefined)
throw `
*تستخدم الامر خطأ راقب عمتك وهي تشرح 🤓*

*┏━━━❲ هينا بوت ❳━━━┓* 
*┠┉↯ ${usedPrefix + command} فتح*
*┠┉↯ ${usedPrefix + command} غلق*
`.trim()
await conn.groupSettingUpdate(m.chat, isClose)
{m.reply('*[❣️]~ تم تغير اعدادات الجروب بنجاح*')}
}
handler.help = ['S H A D O W']
handler.command = /^(جروب)$/i
handler.admin = true
handler.botAdmin = true
export default handler
