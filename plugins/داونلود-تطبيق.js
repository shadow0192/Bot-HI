import { download } from 'aptoide-scraper';

let handler = async (m, { conn, usedPrefix: prefix, command, text }) => {
  try {
    if (command === 'تطبيق') {
      if (!text) throw `*[❗] ضيف اسم التطبيق ال انت عاوز تحمله.*`;

      await conn.reply(m.chat, global.wait, m);
      let data = await download(text);

      if (data.size.replace(' MB', '') > 100000) {
        return await conn.sendMessage(m.chat, { text: '*[⛔] الملف كبير فشخ.*' }, { quoted: m });
      }

      await conn.sendMessage(
        m.chat,
        { document: { url: data.dllink }, mimetype: 'application/vnd.android.package-archive', fileName: data.name + '.apk', caption: null },
        { quoted: m }
      );
    }
  } catch {
    throw `*[❗] حدث خطأ. تأكد من توفير رابط صالح.*`;
  }
};

handler.command = /^تطبيق$/i;
export default handler;
