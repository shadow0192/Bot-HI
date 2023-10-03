let handler = async (m, { conn, text, command }) => {
  try {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    else who = m.quoted.sender ? m.quoted.sender : m.sender
    let bio = await conn.fetchStatus(who)
    m.reply(bio.status)
  } catch {
    if (text) throw `*[⚡]⌯ البايو برايفت*`
    else try {
      let who = m.quoted ? m.quoted.sender : m.sender
      let bio = await conn.fetchStatus(who)
      m.reply(bio.status)
    } catch {
      throw `*[⚡]⌯ البايو برايفت*`
    }
  }
}
handler.help = ['S H A D O W']
handler.tags = ['S H A D O W']
handler.command = /^(بايو)$/i
handler.limit = true
export default handler
// جروب