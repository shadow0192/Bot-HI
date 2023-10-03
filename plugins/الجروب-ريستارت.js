let handler = async (m, { conn }) => {
  let res = await conn.groupRevokeInvite(m.chat)
  m.reply('*[⚡]⌯ تم تعير لينك الجروب*\n*[❣️]⌯ اللينك الجديد :*\nhttps://chat.whatsapp.com/' + res)
}
handler.help = ['S H A D O W']
handler.tags = ['S H A D O W']
handler.command = ['ريسيت', 'نيولينك', 'رستر'] 
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
