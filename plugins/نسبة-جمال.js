let handler = async (m, { conn, command, text }) => {
if (!text) throw `[❣️]~ ما تنسي المنشن`
  let beauty2 = 
`▣──────────────────
${text} 
${Math.floor(Math.random() * 100)}%
▣──────────────────
  `.trim()
m.reply(beauty2, null, { mentions: conn.parseMention(beauty2) })}
handler.help = ['S H A D O W']
handler.tags = ['S H A D O W']
handler.command = /^(جمال)$/
export default handler 