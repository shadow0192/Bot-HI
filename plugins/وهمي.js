import { generateWAMessageFromContent } from '@adiwajshing/baileys'
let handler = async (m, { conn, text, participants, isOwner, isAdmin }) => {
let users = participants.map(u => conn.decodeJid(u.id))
let q = m.quoted ? m.quoted : m || m.text || m.sender
let c = m.quoted ? await m.getQuotedObj() : m.msg || m.text || m.sender
let msg = conn.cMod(m.chat, generateWAMessageFromContent(m.chat, { [m.quoted ? q.mtype : 'extendedTextMessage']: m.quoted ? c.message[q.mtype] : { text: '' || c }}, { quoted: m, userJid: conn.user.id }), text || q.text, conn.user.jid, { mentions: users })
await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
}
handler.help = ['S H A D O W']
handler.tags = ['S H A D O W']
handler.command = /^(وهمي)$/i
handler.group = true
handler.owner = true
export default handler
