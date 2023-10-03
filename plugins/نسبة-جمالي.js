let handler = async (m, { conn, command, text }) => {
let user = m.sender;
  let beauty = `✦•━━━━ ∘⊰⚡⊱∘ ━━━━•✦
 مز/ة (@${user.split('@')[0]}) *نسبة جمالك ✨🤍*: *${Math.floor(Math.random() * 100)}%*
 ✦•━━━━ ∘⊰⚡⊱∘ ━━━━•✦
`.trim()
m.reply(beauty, null, { mentions: conn.parseMention(beauty) })}
handler.help = ['S H A D O W']
handler.tags = ['S H A D O W']
handler.command = /^(جمالي)$/
export default handler