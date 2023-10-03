import cp from 'child_process'
import { promisify } from 'util'
let exec = promisify(cp.exec).bind(cp)
var handler = async (m) => {
	await conn.reply(m.chat, "[❣️]~ استني", m)
    let o
    try {
        o = await exec('python3 speed.py --share')
    } catch (e) {
        o = e
    } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
    }
}
handler.help = ['S H A D O W']
handler.tags = ['S H A D O W']
handler.command = /^(السرعة|السرعه)$/i

export default handler
