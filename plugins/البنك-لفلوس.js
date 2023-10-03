const xpperlimit = 2
let handler = async (m, { conn, command, args }) => {
	let user = global.db.data.users[m.sender]
  let count = command.replace(/^لفلوس|لمال/i, '')
  count = count ? /الكل/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.db.data.users[m.sender].exp >= xpperlimit * count) {
    global.db.data.users[m.sender].exp -= xpperlimit * count
    global.db.data.users[m.sender].money += count
    conn.reply(m.chat, `⌯ تـم تـحـويـل ${count} خبرة ✨ لمــال`, m)
  } else conn.reply(m.chat, `⌯ ليس لديك خبرة كافية للتحويل ${count} ✨`, m)
}
handler.help = ['S H A D O W']
handler.tags = ['xp']
handler.command = /^لمال|لفلوس$/i

export default handler
