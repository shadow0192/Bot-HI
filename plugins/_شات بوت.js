let handler = m => m 
handler.all = async function (m) { 
 let chat = global.db.data.chats[m.chat] 
  
 if (/^بوتة|روبوت|بوت$/i.test(m.text) ) { 
     conn.reply(m.chat, `يا كلب يا حقير يا حيوان اسمي هينا  عمتككك🤧🖤`, m) 
  
 } 
  
if (/^حثتيني|مفتقدك|وحشتيني$/i.test(m.text) ) { 
     conn.reply(m.chat, `حياتي بدونك ولا شئ 🙃💞`, m) 
  
 }  
if (/^اوامر$/i.test(m.text) ) { 
     conn.reply(m.chat, `يغبي ما تنسي ال . قبل اوامر`, m) 
  
 }  
  
 if (/^احبك|بحبك$/i.test(m.text) ) { 
     conn.reply(m.chat, `شادو حبيبي الوحيد يولد 🤧`, m) 
  
 } 
  
 if (/^ملل|ملل يجيب شلل$/i.test(m.text) ) {  
     conn.reply(m.chat, `امشيطلعبرراااااا`, m) 
  
 } 
  
if (/^هينا|هيناا|هيناا$/i.test(m.text)) {
  const messages = ['كنت هموت ملل بدونك 🙃💞', 'خادمتك فاي وقت 🖤🙁', 'عمتكم😺؟','منو ينادي محبوبه الكل >_<...', 'أحبك🤧🖤', 'الورده الطيبه💞🙃 ','سمعتك تنادي علي؟👀','حبك الاول والاخير🙂🎧' ];
  const randomIndex = Math.floor(Math.random() * messages.length);
  const replyMessage = messages[randomIndex];
  conn.reply(m.chat, replyMessage, m);
}
 if (/^كيوتت$/i.test(m.text) ) {
     conn.reply(m.chat, ` يعمريييي🤧💞 `, m)
  
 } 
  
 if (/^تحبي المدرسه؟|تحبين الدراسه؟/i.test(m.text) ) { 
     conn.reply(m.chat, `كتير مره بموت فيها 💓🙄`, m)  
  
 } 
  
 if (/^ايش هو اسمك|شسمك/i.test(m.text) ) {  
     conn.reply(m.chat, `هينا عمتك 💞😺`, m) 
  
 } 
  
 if (/^كيفكم|كيفك$/i.test(m.text) ) { 
     conn.reply(m.chat, ` بخير وانت 👀`, m) 
  
 } 
  
 if (/^جيت|رجعت$/i.test(m.text) ) { 
     conn.reply(m.chat, `منور`, m) 
  
 }  
  
 if (/^منوره ايلي|منوره كيوتتي$/i.test(m.text) ) { 
     conn.reply(m.chat, `نورك الأصل الأصيل بلا منازع او مثيل 👀💞`, m) 
  
 }
     
 if (/^الرفاااق$/i.test(m.text) ) { 
     conn.reply(m.chat, `اخرس يبنلللل`, m) 
  
 } 
  
 if (/^الرفاق|وان عادت الحياه ف هل سيعود الرفاق$/i.test(m.text) ) {
     conn.reply(m.chat, `اخرس يا كلب مش هسبك عشان رمضان بس`, m) 
  
 }
  
 if (/^كيفها حياتك|كيف حياتك$/i.test(m.text) ) { 
     conn.reply(m.chat, `ماشيا الحمد لله وانت ❤️`, m) 
  
 }
   if (/^الحمدلله|ماشيا|بخير الحمد لله$/i.test(m.text) ) { 
     conn.reply(m.chat, `دومك بخير وصحه وسعاده`, m) 
  
 }
   if (/^رح اغير نفسي|اريد اغير من نفسي$/i.test(m.text) ) { 
     conn.reply(m.chat, ` تعرف اسطوره شادي وميسون الاثنين يلي عاشو 1000 سنه وما اتغيرو اصلا 😂😂`, m) 
  
 }
   if (/^المهزء|محمود$/i.test(m.text) ) { 
     conn.reply(m.chat, `مهزء حقير بيعيط علي رفاق راحو من قبل منتولد`, m) 
  
 }
   if (/^جييتت|باااكك$/i.test(m.text) ) { 
     conn.reply(m.chat, `نورت البيت 🫣❤`, m) 
  
 }
   if (/^صباح الخير|صباح$/i.test(m.text) ) { 
     conn.reply(m.chat, `أنت الخير حياتي 💙`, m) 
  
 } if (/^اتفق|أتفق$/i.test(m.text) ) { 
     conn.reply(m.chat, `اطلق من يتفق`, m) 
  
 }
   if (/^كسمك|كسختك$/i.test(m.text) ) { 
     conn.reply(m.chat, `عيييييب`, m) 
  
 }
   if (/^هلو|هلا$/i.test(m.text) ) { 
     conn.reply(m.chat, `هلاوات ❤️`, m) 
  
 }
   if (/^ماتت|طفات$/i.test(m.text) ) { 
     conn.reply(m.chat, `شكون قالها لك؟`, m) 
  
 }
   if (/^ميكو|ماكيما$/i.test(m.text) ) { 
     conn.reply(m.chat, `مال طبون مكم مع ميكو او ماكيما انا معجبتكمش؟؟؟ `, m) 
  
 }
   if (/^بوسني|هات بوسه|بوثه/i.test(m.text) ) { 
     conn.reply(m.chat, `امممممممممووواااححح`, m) 
  
 }
   if (/^كنبغيك$/i.test(m.text) ) { 
     conn.reply(m.chat, `abghy mk :))))`, m) 
  
 }
   if (/^تصبحو على خير$/i.test(m.text) ) { 
     conn.reply(m.chat, `الخير هو نتا الحبيب(ة) 😘`, m) 
  
 }
   if (/^تصفيق$/i.test(m.text) ) { 
     conn.reply(m.chat, `:))))`, m) 
  
 }
 return !0 } 
 export default handler

