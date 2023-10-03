import fetch from "node-fetch"
let handler = async (m, { conn }) => {

  let data = await (await fetch('https://raw.githubusercontent.com/Darkshadow201293/ShadowMedia-MD/main/ppcp.json')).json()
  let cita = data[Math.floor(Math.random() * data.length)]
  
  let cowi = await(await fetch(cita.cowo)).buffer()
  await conn.sendFile(m.chat, cowi, '', 'صوره الولد 🙎🏻‍♂️', m)
  let ciwi = await(await fetch(cita.cewe)).buffer()
  await conn.sendFile(m.chat, ciwi, '', 'صوره البنت 🙎🏻‍♀️', m)
}
handler.help = ['S H A D O W']
handler.tags = ['S H A D O W']
handler.command = /^طقم|تطقيم$/i
handler.limit = true

export default handler
