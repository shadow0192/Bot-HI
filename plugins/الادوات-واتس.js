let handler = async (m, { conn, usedPrefix, text, command }) => {
  if (!text) throw `*[❣️]~ لو سمحت ضيف رقم التلفون ال عاوز شات الواتس بتاعه*\n*[❣️]~ متنساش كود الدولة*\n\n📌 مثال: *${usedPrefix + command}* 201063720595`;

  const waLink = `https://wa.me/${text}`;
  const message = `*[❣️]~اتفضل يقلبي لينك شات الواتس:*\n${waLink}`;

  conn.sendMessage(m.chat, { text: message, quoted: m, contextInfo: { mentionedJid: [m.sender] } });
};

handler.help = ['S H A D O W'];
handler.tags = ['S H A D O W'];
handler.command = ['واتس'];

export default handler;


