let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let user = global.db.data.users[m.sender]
  global.db.data.users[m.sender].pickaxe = global.db.data.users[m.sender].pickaxe || 0
  global.db.data.users[m.sender].pedang = global.db.data.users[m.sender].pedang || 0
  global.db.data.users[m.sender].fishingrod = global.db.data.users[m.sender].fishingrod || 0
  let botol = 'Abdelrahman Mohamed'
  let wm = 'S H A D O W'

let lgocraft = `
┏━──━✦⊱⋟⚡⋞⊰✦━──━┓
⌯   جـــدول الـبــنــاء
┗━──━✦⊱⋟⚡⋞⊰✦━──━┛`

  let caption = `
▧ بيكاكس ⛏️
▧ سيف ⚔️
▧ مصيده 🎣
[⚡]⌯ مواد الصناعة
▧ بيكاكس ⛏️
⌯ 10 خشب
⌯ 5 صخر
⌯ 5 حديد
⌯ 20 خيط
▧ سيف ⚔️
⌯ 10 خشب
⌯ 15 حديد
▧ مصيده 🎣
⌯ 10 خشب
⌯ 2 حديد
⌯ 20 خيط
▧ درع 🥼
⌯ 30 حديد
⌯ 1 زمرد
⌯ 5 ماس
▧ فيزا 💳
⌯ 3 زمرد
⌯ 6 ماس
⌯ 10 الاف مال
`

  try {
    if (/craft|صناعه|كرافت|بناء/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'بيكاكس':
          if (user.pickaxe > 0) return m.reply('⌯ انت بالفعل تملك بيكاكس')
            if(user.rock < 5 || user.wood < 10 || user.iron < 5 || user.string < 20) return conn.sendMessage(m.chat, { text: `⌯ لا تملك بضائع كافية\n⌯ لصناعة البيكاكس تحتاج الي :\n10 خشب 🪵 \n5 حديد ⛓\n20 خيط 🕸️\n5 صخر 🪨`, quoted: m, contextInfo: { mentionedJid: [m.sender] } })
            global.db.data.users[m.sender].wood -= 10
            global.db.data.users[m.sender].iron -= 5
            user.rock -= 5
            global.db.data.users[m.sender].string -= 20
            global.db.data.users[m.sender].pickaxe += 1
            user.pickaxedurability = 40
            conn.sendMessage(m.chat, { text: "⌯ تم صنع بيكاكس 🔨", quoted: m, contextInfo: { mentionedJid: [m.sender] } })
            break
          case 'سيف':
          if (user.sword > 0) return m.reply('⌯ انت بالفعل تملك سيف')
            if(user.wood < 10 || user.iron < 15) return conn.sendMessage(m.chat, { text: `⌯ لا تملك بضائع كافية\n⌯ لصناعة السيف تحتاج الي :\n10 خشب 🪵\n15 حديد ⛓️`, quoted: m, contextInfo: { mentionedJid: [m.sender] } })
            global.db.data.users[m.sender].wood -= 10
            global.db.data.users[m.sender].iron -= 15
            global.db.data.users[m.sender].sword += 1
            user.sworddurability = 40
            conn.sendMessage(m.chat, { text: "⌯ تم صنع سيف 🗡️", quoted: m, contextInfo: { mentionedJid: [m.sender] } })
            break
          case 'مصيده':
          if (user.fishingrod > 0) return m.reply('⌯ انت بالفعل تملك مصيده')
            if(user.wood < 20 || user.iron < 5 || user.string < 20) return conn.sendMessage(m.chat, { text: `⌯ لا تملك بضائع كافية\n⌯ لصناعة مصيده تحتاج الي :\n10 خشب 🪵\n5 حديد ⛓\n20 خيط 🕸️`, quoted: m, contextInfo: { mentionedJid: [m.sender] } })
            global.db.data.users[m.sender].wood -= 10
            global.db.data.users[m.sender].iron -= 2
            global.db.data.users[m.sender].string -= 20
            global.db.data.users[m.sender].fishingrod += 1
            user.fishingroddurability = 40
            conn.sendMessage(m.chat, { text: "⌯ تم صنع مصيده 🎣", quoted: m, contextInfo: { mentionedJid: [m.sender] } })
            break
          case 'درع':
          if (user.armor > 0) return m.reply('⌯ انت بالفعل تملك درع')
            if(user.iron < 15 || user.emerald < 1 || user.diamond < 5) return conn.sendMessage(m.chat, { text: `⌯ لا تملك بضائع كافية\n⌯ لصناعة الدرع تحتاج الي :\n30 حديد ⛓️\n1 زمرد ❇️\n5 ماس 💎`, quoted: m, contextInfo: { mentionedJid: [m.sender] } })
            global.db.data.users[m.sender].emerald -= 1
            global.db.data.users[m.sender].iron -= 15
            global.db.data.users[m.sender].diamond -= 5
            global.db.data.users[m.sender].armor += 1
            user.armordurability = 50
            conn.sendMessage(m.chat, { text: "⌯ تم صنع درع 🥼", quoted: m, contextInfo: { mentionedJid: [m.sender] } })
            break
            case 'فيزا':
          if (user.atm > 0) return m.reply('⌯ انت بالفعل تملك اي تي ام')
            if(user.emerald < 3 || user.money < 10000 || user.diamond < 6) return conn.sendMessage(m.chat, { text: `⌯ لا تملك بضائع كافية\n⌯ لصناعة اي تي ام تحتاج الي :\n10 الاف مال 💹\n3 زمرد ❇️\n6 ماس 💎`, quoted: m, contextInfo: { mentionedJid: [m.sender] } })
            global.db.data.users[m.sender].emerald -= 3
            global.db.data.users[m.sender].money -= 10000
            global.db.data.users[m.sender].diamond -= 6
            global.db.data.users[m.sender].atm += 1
            conn.sendMessage(m.chat, { text: "⌯ تم صنع اي تي ام 💳", quoted: m, contextInfo: { mentionedJid: [m.sender] } })
            break
            default:
            return conn.sendMessage(m.chat, { text: lgocraft + caption, quoted: m, contextInfo: { mentionedJid: [m.sender] } })
        }
      }
  } catch (e) {
    conn.reply(m.chat, '⌯ عذرًا، حدث خطأ أثناء تشغيل الأمر 😔', m)
    if (DevMode) {
      m.reply(`⌯ ايرور : ${util.format(e)}`)
    }
  }
}
handler.help = ['S H A D O W']
handler.tags = ['S H A D O W']
handler.command = /^(كرافت|بناء)$/i


export default handler
