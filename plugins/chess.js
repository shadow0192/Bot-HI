import { Chess } from 'chess.js';

const handler = async (m, { conn, args }) => {
  const key = m.chat;
  conn.chess = conn.chess || {};
  let chessData = conn.chess[key] || {
    gameData: null,
    fen: null,
    currentTurn: null,
    players: [],
    hasJoined: []
  };
  conn.chess[key] = chessData;
  const { gameData, fen, currentTurn, players, hasJoined } = chessData;
  const feature = args[0]?.toLowerCase();

  if (feature === 'احذف') {
    delete conn.chess[key];
    return conn.reply(m.chat, '⌯ تم الغاء اللعبة 🏳️', m);
  }

  if (feature === 'صمم') {
    if (gameData) {
      return conn.reply(m.chat, '⌯ اللعبة قيد التقدم بالفعل', m);
    }
    chessData.gameData = { status: 'waiting', black: null, white: null };
    return conn.reply(m.chat, '⌯ بدات اللعبة 🎮\n⌯ في انتظار انضمام لاعبين آخرين', m);
  }

  if (feature === 'ادخل') {
    const senderId = m.sender;
    if (players.includes(senderId)) {
      return conn.reply(m.chat, '⌯ انت بالفعل منضم في هذه اللعبة 🙅‍♂️', m);
    }
    if (!gameData || gameData.status !== 'waiting') {
      return conn.reply(m.chat,  '⌯ في انتظار لاعبين اخرين حاليا 😒', m);
    }
    if (players.length >= 2) {
      return conn.reply(m.chat,  '⌯ الغرفة مكتملة بالفعل 👥\n⌯ سوف تبدأ اللعبة تلقائيا', m);
    }
    players.push(senderId);
    hasJoined.push(senderId);
    if (players.length === 2) {
      gameData.status = 'ready';
      const [black, white] = Math.random() < 0.5 ? [players[1], players[0]] : [players[0], players[1]];
      gameData.black = black;
      gameData.white = white;
      chessData.currentTurn = white;
      return conn.reply(m.chat,  `👥 اللاعبين :*\n${hasJoined.map(playerId => `- @${playerId.split('@')[0]}`).join('\n')}\n\n⌯ *الاسود:* @${black.split('@')[0]}\n⌯ *الابيض:* @${white.split('@')[0]}\n\n⌯ ارجو منك استخدام الامر - شطرنج ابدا - للبدء باللعبة 👥`, m, { mentions: hasJoined });
    } else {
      return conn.reply(m.chat, '⌯ لقد انضممت الي لعبة الشطرنج 🙋‍♂️\n⌯ في انتظار انضمام لاعبين آخرين', m);
    }
  }

  if (feature === 'ابدا') {
    if (gameData.status !== 'ready') {
      return conn.reply(m.chat, '⌯ انتظر حتي ينضم لاعبان 👥', m);
    }
    gameData.status = 'playing';
    const senderId = m.sender;
    if (players.length === 2) {
      const fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
      chessData.fen = fen;
      const encodedFen = encodeURIComponent(fen);
      const turn = `⌯ الابيض : @${gameData.white.split('@')[0]}`;
      const flipParam = senderId === gameData.black ? '' : '&flip=true';
      const flipParam2 = senderId === gameData.black ? '' : '-flip';
      const boardUrl = `https://www.chess.com/dynboard?fen=${encodedFen}&board=graffiti&piece=graffiti&size=3&coordinates=inside${flipParam}`;
      try {
        await conn.sendFile(m.chat, boardUrl, '', turn, m, false, { mentions: [gameData.white] });
      } catch (error) {
        const boardUrl2 = `https://chessboardimage.com/${encodedFen + flipParam2}.png`;
        await conn.sendFile(m.chat, boardUrl2, '', turn, m, false, { mentions: [gameData.black] });
      }
      return;
    } else {
      return conn.reply(m.chat, '⌯ لقد انضممت الي لعبة الشطرنج 🙋‍♂️\n⌯ في انتظار انضمام لاعبين آخرين', m);
    }
  }

  if (args[0] && args[1]) {
    const senderId = m.sender;
    if (!gameData || gameData.status !== 'playing') {
      return conn.reply(m.chat, '⌯ لم تبدأ اللعبة بعد', m);
    }
    if (currentTurn !== senderId) {
      return conn.reply(m.chat, `⌯ دور ${chessData.currentTurn === gameData.white ? 'الابيض' : 'الاسود'}' عشان يحرك القطع`, m, {
        contextInfo: {
          mentionedJid: [currentTurn]
        }
      });
    }
    const chess = new Chess(fen);
    if (chess.isCheckmate()) {
      delete conn.chess[key];
      return conn.reply(m.chat, ` كش ملك\n⌯ انتهت اللعبة 🏳️*\n⌯ الفائز : @${m.sender.split('@')[0]} 🫂`, m, {
        contextInfo: {
          mentionedJid: [m.sender]
        }
      });
    }
    if (chess.isDraw()) {
      delete conn.chess[key];
      return conn.reply(m.chat, `⌯ سورس شادو - هينا\n⌯ انتهت اللعبة 🏳️*\n⌯ *اللاعبين:* ${hasJoined.map(playerId => `- @${playerId.split('@')[0]}`).join('\n')}`, m, {
        contextInfo: {
          mentionedJid: hasJoined
        }
      });
    }
    const [from, to] = args;
    try {
      chess.move({ from, to, promotion: 'q' });
    } catch (e) {
      return conn.reply(m.chat, '❌ *تحريك خاطئ*', m);
    }
    chessData.fen = chess.fen();
    const currentTurnIndex = players.indexOf(currentTurn);
    const nextTurnIndex = (currentTurnIndex + 1) % 2;
    chessData.currentTurn = players[nextTurnIndex];
    const encodedFen = encodeURIComponent(chess.fen());
    const currentColor = chessData.currentTurn === gameData.white ? 'الابيض' : 'الاسود';
    const turn = `⌯ ${currentColor} : @${chessData.currentTurn.split('@')[0]}\n\n${chess.getComment() || ''}`;
    const flipParam = senderId === gameData.black ? '' : '&flip=true';
    const flipParam2 = senderId === gameData.black ? '' : '-flip';
    const boardUrl = `https://www.chess.com/dynboard?fen=${encodedFen}&board=graffiti&piece=graffiti&size=3&coordinates=inside${flipParam}`;
    try {
      await conn.sendFile(m.chat, boardUrl, '', turn, m, false, { mentions: [chessData.currentTurn] });
    } catch (error) {
      const boardUrl2 = `https://chessboardimage.com/${encodedFen + flipParam2}.png`;
      await conn.sendFile(m.chat, boardUrl2, '', turn, m, false, { mentions: [chessData.currentTurn] });
    }
    chess.deleteComment();
    return;
  }

  if (feature === 'شرح') {
    return conn.reply(m.chat, `
      🌟 *اوامر لعبة الشطرنج :*

⌯ *شطرنج صمم* :- عشان تعمل غرفة
⌯ *شطرنج ادخل* :- عشان تنضم للغرفة
⌯ *شطرنج ابدا* :- عشان تبدأ اللعبة
⌯ *شطرنج احذف* :- عشان تحذف الغرفة
⌯ شطرنج [مكان القطعه الاولي] [المكان الي انت عايز تحط عنده القطعة] :- عشان تحرك القطع

[❣️]⌯ توضيح :  
اكتب *شطرنج صمم* عشان تعمل اللعبه.
بعدها اكتب *شطرنج ادخل* عشان تخش انت وصاحبك اللعبه.
    `, m);
  }
  return conn.reply(m.chat, '⌯ امر خاطئ استخدم *شطرنج شرح* عشان تفهم اكتر', m);
};

handler.help = ['S H A D O W'];
handler.tags = ['S H A D O W'];
handler.command = /^(شطرنج)$/i;

export default handler;
