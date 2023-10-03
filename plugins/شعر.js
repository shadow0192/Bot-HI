import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `${lenguajeGB['smsContAdult']()}`
let url = piees[Math.floor(Math.random() * piees.length)]
conn.sendFile(m.chat, url, 'error.jpg', ` >_<...`, m)

}
handler.help = ['S H A D O W']
handler.tags = ['S H A D O W']
handler.command = /^(شعر)$/
handler.exp = 50
handler.level = 0
export default handler


global.piees =[
  "https://audio.jukehost.co.uk/cFgTBq5smuONwUoZnBBP4jKy3D12OtKc",
  "https://audio.jukehost.co.uk/Rx1uYvvuF7b1lJg1zwucHaOCbVi1dQyi",
  "https://audio.jukehost.co.uk/cEDaa7SpNcJSXCaoa1DhRpyLglXEhIms",
  "https://audio.jukehost.co.uk/fH73vhc5PXI3oCEOnqqo03G9rDK6iXfD",
  "https://audio.jukehost.co.uk/7G2W7bgkPCa6wRkEKRgJ5Wv7b6FTPH02",
  "https://audio.jukehost.co.uk/ESPWlVK7kvQstqkXTOwoiVtqG2X5T7tu",
  "https://audio.jukehost.co.uk/ea9VqDy6eC7EHwCBxqtTokKBVzOdpL2R",
  "https://audio.jukehost.co.uk/SErFliXRAV3iQntqBRhTH94u3vLApK7r",
  "https://audio.jukehost.co.uk/ea9VqDy6eC7EHwCBxqtTokKBVzOdpL2R",
  "https://audio.jukehost.co.uk/SErFliXRAV3iQntqBRhTH94u3vLApK7r",
  "https://audio.jukehost.co.uk/ea9VqDy6eC7EHwCBxqtTokKBVzOdpL2R",
  "https://audio.jukehost.co.uk/1IiYMCueOJFmCiPGbI1FGDcIvGh5ffRP",
  "https://audio.jukehost.co.uk/oKBHAMqduvHJKZr0m4GahELoHXx222r3",
  "https://audio.jukehost.co.uk/oKBHAMqduvHJKZr0m4GahELoHXx222r3",
  "https://audio.jukehost.co.uk/dSiD4xXyoiArvVGIlbMJVNWnI5UM3CxR",
  "https://audio.jukehost.co.uk/YMc2EfKTab3oKVHc5vSl84FdtLlBNbyq",
  ];