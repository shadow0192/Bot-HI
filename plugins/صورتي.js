let handler = async(m, {
	conn,
	text,
	command
}) => {
	let yh = global.shaadw
	let url = yh[Math.floor(Math.random() * yh.length)]
	conn.sendMessage(m.chat, {
		image: {
			url: url
		},
		caption: "[⚡] صورتك ذا انت ما تنكر "
	}, {
		quoted: m
	});
}
handler.command = /^(صورتي)$/i
handler.tags = ['S H A D O W']
handler.help = ['S H A D O W']
export default handler

global.shaadw =[
"https://telegra.ph/file/e1effc893117b46c0fab7.jpg",
  ];