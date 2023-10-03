import axios from "axios"
let handler = async (m, { args }) => {
if (!args[0]) throw "*Give a place to search*"
try {
const response = axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`)
const res = await response
const name = res.data.name
const Country = res.data.sys.country
const Weather = res.data.weather[0].description
const Temperature = res.data.main.temp + "°درجة"
const Minimum_Temperature = res.data.main.temp_min + "°درجة"
const Maximum_Temperature = res.data.main.temp_max + "°درجة"
const Humidity = res.data.main.humidity + "%"
const Wind = res.data.wind.speed + "كيلومتر/ساعة"
const wea ش= `「 📍 」المكان: ${name}\n「 🗺️ 」الدولة: ${Country}\n「 🌤️ 」السماء: ${Weather}\n「 🌡️ 」الحرارة: ${Temperature}\n「 💠 」 متوسط الحراره: ${Minimum_Temperature}\n「 📛 」 الحرارة القصوي: ${Maximum_Temperature}\n「 💦 」الرطوبة: ${Humidity}\n「 🌬️ 」 الرياح: ${Wind}`
m.reply(wea)
} catch {
return "*ايرور*"}}
handler.help = ['climate *<place>*']
handler.tags = ['herramientas']
handler.command = /^(طقس|الطقس)$/i
export default handler
