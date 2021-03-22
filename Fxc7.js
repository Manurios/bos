const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require('@adiwajshing/baileys');

const fs = require("fs");
const axios = require('axios');
const util = require('util');
const crypto = require('crypto');
const request = require('request');
const moment = require('moment-timezone');
const { exec, spawn } = require('child_process');
const fetch = require('node-fetch');
const FileType = require('file-type');
const tiktod = require('tiktok-scraper');
const ffmpeg = require('fluent-ffmpeg');
const emojiUnicode = require('emoji-unicode');
const translate = require('translate');
const os = require('os');
const cheerio = require('cheerio');
const base64Img = require('base64-img');
const imageToBase64 = require('image-to-base64');
const googleIt = require('google-it');
const speed = require('performance-now');
const imgbb = require('imgbb-uploader');
const { removeBackgroundFromImageFile } = require('remove.bg');
const brainly = require('brainly-scraper');
const randomString = require('random-string');
const vapor = require('vapor-text');
const toMs = require('ms');
const ms = require('parse-ms');
const path = require('path');
const cd = 4.32e+7;
const lolcatjs = require('lolcatjs');
const figlet = require('figlet');

// menu all
const { listephoto, listtextpro, menumaker } = require('./menu/creator.js');
const { antivirtexx } = require('./menu/antivirtex.js');
const { help, menuowner, menuothers, menuinfo, menugrup, menupremium, bahasa, donasi, limitcount, bottt, listsurah } = require('./menu/help');
const { ind } = require('./language');
const {
	addAfkUser,
    checkAfkUser,
    getAfkReason,
    getAfkTime,
    getAfkId,
    getAfkPosition
} = require('./Fxc7/aefka.js');

// json read file
const { BarBarApi, ZeksApi, TobzApi, VthearApi, LolApi, fxc7Api, XteamApi } = JSON.parse(fs.readFileSync('./database/json/apikey.json'));
const welkom = JSON.parse(fs.readFileSync('./database/json/welkom.json'));
const _nsfw = JSON.parse(fs.readFileSync('./database/json/nsfw.json'));
const _samih = JSON.parse(fs.readFileSync('./database/json/simi.json'));
const _antilink = JSON.parse(fs.readFileSync('./database/json/antilink.json'));
const _antivirtex = JSON.parse(fs.readFileSync('./database/json/antivirtex.json'));
const _badword = JSON.parse(fs.readFileSync('./database/json/badword.json'));
const _limit = JSON.parse(fs.readFileSync('./database/json/limit.json'));
const user = JSON.parse(fs.readFileSync('./database/json/user.json'));
const astik = JSON.parse(fs.readFileSync('./database/json/autos.json'));
const bucinrandom = JSON.parse(fs.readFileSync('./database/json/bucin.json'));
const randomdilan = JSON.parse(fs.readFileSync('./database/json/dilan.json'));
const hekerbucin = JSON.parse(fs.readFileSync('./database/json/hekerbucin.json'));
const katailham = JSON.parse(fs.readFileSync('./database/json/katailham.json'));
const blocked = JSON.parse(fs.readFileSync('./database/json/blocked.json'));
const setting = JSON.parse(fs.readFileSync('./database/json/setting.json'));
const bad = JSON.parse(fs.readFileSync('./database/json/bad.json'));
const setiker = JSON.parse(fs.readFileSync('./database/json/stik.json'));
const videonye = JSON.parse(fs.readFileSync('./database/json/video.json'));
const audionye = JSON.parse(fs.readFileSync('./database/json/audio.json'));
const imagenye = JSON.parse(fs.readFileSync('./database/json/image.json'));
const premium = JSON.parse(fs.readFileSync('./database/json/premium.json'));
const commandsDB = JSON.parse(fs.readFileSync('./database/json/commands.json'));
const _afk = JSON.parse(fs.readFileSync('./database/json/userafk.json'));

memberLimit = setting.memberlimit;
OwnerNumber = setting.OwnerNumber;
instagram = setting.instagram;
alasanafk = setting.alasanafk;
banChats = setting.banchats;
waktuafk = setting.waktuafk;
limitawal = setting.limitt;
offline = setting.offline;
botinfo = setting.botinfo;
publik = setting.offline;
prefix = setting.prefix;
imgbase64 = setting.imgbase64;
locbase64 = setting.locbase64;
productimg64 = setting.productimg64;
name = setting.name;
FarhanGans2 = setting.FarhanGans2;
linkCuriga = setting.linkCuriga;
ban = [];

//function
const Exif = require('./Fxc7/exif');
const exif = new Exif();
const zalgo = require('./Fxc7/zalgo');
const { fetchFxc7, fetchText } = require('./lib/fetcher');
const { recognize } = require('./lib/ocr');
const { color, bgcolor } = require('./lib/color');
const { wait, simih, getBuffer, h2k, banner, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions');
const { uploadimg } = require('./Fxc7/uploadimg');
const { addCommands, checkCommands, deleteCommands } = require('./Fxc7/autoresp');
const { yta, ytv, buffer2Stream, ytsr, baseURI, stream2Buffer, noop } = require('./Fxc7/ytdl');

const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:M̴̀̈́̆̈́̽̕a̴̡̲̤͛͂ń̶̍̄urios\n'
            + 'ORG:Owner M̴̀̈́̆̈́̽̕a̴̡̲̤͛͂ń̶̍̄urios;\n'
            + 'TEL;type=CELL;type=VOICE;waid=6283141926935:+62 831-4192-6925\n'
            + 'END:VCARD';

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`;
}
function tanggal(){
myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
			myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum at','Sabtu'];
			var tgl = new Date();
			var day = tgl.getDate()
			bulan = tgl.getMonth()
			var thisDay = tgl.getDay(),
			thisDay = myDays[thisDay];
			var yy = tgl.getYear()
			var year = (yy < 1000) ? yy + 1900 : yy;
			return `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}

function monospace(string) {
return '```' + string + '```'

}
global.config = {
    unvoke: true,
    unvokeMe: false
}

const { addMetadata } = require('./Fxc7/stikernya.js')

const createSerial = (size) => {
		return crypto.randomBytes(size).toString('hex').slice(0, size)
	}

const limitAdd = (sender) => {
		let position = false
		Object.keys(_limit).forEach((i) => {
		if (_limit[i].id == sender) {
		position = i 
	}
})
		if (position !== false) {
		_limit[position].limit += 1
		fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
	}
}

async function starts() {
	const frhan = new WAConnection()
	frhan.logger.level = 'warn'
	console.log(banner.string)
	frhan.on('qr', () => {
		console.log('[SYSTEM] SCAN THIS QR CODE...')
	})

	fs.existsSync('./Fxc7.json') && frhan.loadAuthInfo('./Fxc7.json')
	frhan.on('connecting', () => {
		start('2', 'Connecting...')
	})
	frhan.on('open', () => {
		success('2', 'Connected:)')
	})
	await frhan.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Fxc7.json', JSON.stringify(frhan.base64EncodedAuthInfo(), null, '\t'))
frhan.on('group-participants-update', async (nganu) => {
	const mdata = await frhan.groupMetadata(nganu.jid)
	if (nganu.action == 'demote') {
				num = nganu.participants[0]
				teks = `DEMOTE DETECTED\n@${num.split('@')[0]} Telah di demote di grup ini`
				frhan.sendMessage(mdata.id, monospace(teks), MessageType.text, {contextInfo: {"mentionedJid": [num]}})
			} else if (nganu.action == 'promote') {
				num = nganu.participants[0]
				teks = `PROMOTE DETECTED\n@${num.split('@')[0]} Telah di promote di grup ini`
				frhan.sendMessage(mdata.id, monospace(teks), MessageType.text, {contextInfo: {"mentionedJid": [num]}})
			}
	})
	frhan.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await frhan.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await frhan.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/Wg3qpfT/1200397ddb31.jpg'
				}
				teks = `@${num.split('@')[0]} \nWelcome Di Group *${mdata.subject}*\nGausa Intro Alay!!`
				let buff = await getBuffer(ppimg)
				frhan.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await frhan.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/Wg3qpfT/1200397ddb31.jpg'
				}
				teks = `Baperan Si @${num.split('@')[0]} Balik Lagi Wajib Donasi`
				let buff = await getBuffer(ppimg)
				frhan.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'yellow'))
		}
	}
)

	frhan.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
		for (let i of json[1].blocklist) {
		blocked.push(i.replace('c.us','s.whatsapp.net'))
		}
	}
)
	frhan.on("CB:Call", json => {
		let call;
		calling = JSON.parse(JSON.stringify(json))
		call = calling[1].from
		setTimeout(function(){
			frhan.sendMessage(call, `Maaf, Jenny tidak bisa menerima panggilan. nelfon = block!.\nJika ingin membuka block harap chat Owner!`, MessageType.text)
			.then(() => frhan.blockUser(call, "add"))
			}, 100);
		}
	)
	frhan.on('CB:action,,battery', json => {
			const batteryLevelStr = json[2][0][1].value
			const batterylevel = parseInt(batteryLevelStr)
			lolcatjs.fromString('[SYSTEM] SISA BATERAI BOT:'+ batterylevel +'%')
		}
	)
    if (!Array.isArray(frhan._events['CB:action,add:relay,message'])) frhan._events['CB:action,add:relay,message'] = [frhan._events['CB:action,add:relay,message']]
    else frhan._events['CB:action,add:relay,message'] = [frhan._events['CB:action,add:relay,message'].pop()]
    frhan._events['CB:action,add:relay,message'].unshift(async json => {
    try {
    if (!global.config.unvoke) return
    let m = json[2][0][2]
    if (m.message && m.message.protocolMessage && m.message.protocolMessage.type == 0) {
    let key = m.message.protocolMessage.key
    if (key.fromMe && !global.config.unvokeMe) return
    let c = frhan.chats.get(key.remoteJid)
    let a = c.messages.dict[`${key.id}|${key.fromMe ? 1 : 0}`]
    let participant = key.fromMe ? frhan.user.jid : a.participant ? a.participant : key.remoteJid
    frhan.sendMessage(key.remoteJid, monospace(`[ BOT ] Terdeteksi @${(participant).replace(/@.+/, '')} telah menghapus pesan:v`), MessageType.extendedText, {
    contextInfo: {
    mentionedJid: [participant],
    quotedMessage: a.message
    }
    })
    
    let content = frhan.generateForwardMessageContent(a, false)
    
    let ctype = Object.keys(content)[0]
    let atype = Object.keys(a.message)[0]
    let context = {}
    if (atype != MessageType.text) context = a.message[atype].contextInfo
    content[ctype].contextInfo = {
    ...context,
    ...content[ctype].contextInfo
    }
    const waMessage = frhan.prepareMessageFromContent(key.remoteJid, content, {})
    await frhan.relayWAMessage(waMessage)
    }
    } catch (e) {
    console.log(e)
    }
    })

	frhan.on('chat-update', async (mek) => {
		try {
			if (!mek.hasNewMessage) return 
			mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return 
			if (mek.key.fromMe) return 
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const insom = from.endsWith('@g.us')
			const nameReq = insom ? mek.participant : mek.key.remoteJid
			pushname2 = frhan.contacts[nameReq] != undefined ? frhan.contacts[nameReq].vname || frhan.contacts[nameReq].notify : undefined 
			var Link = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType

			const date = new Date().toLocaleDateString()
			const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const JAM = moment.tz('Asia/Jakarta').format('HH:mm')
			const Jadian = moment.tz('Asia/Jakarta').format('DD/mm/yy')

			const more = String.fromCharCode(8206)
			const readMore = more.repeat(4001)
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : '' 
			const typei = Object.keys(mek.message)[0]
			budo = (typei === 'conversation') ? mek.message.conversation : (typei === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const FXC7 = Link.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const arg = budy.slice(command.length + 2, budy.length)
			const Far = args.join(' ')
			const isCmd = body.startsWith(prefix)
			frhan.chatRead(from)

			mess = {
				wait: '*⏳ ᴡᴀɪᴛ ꜱᴇᴅᴀɴɢ ᴅɪ ᴩʀᴏꜱᴇꜱ...*',
				success: '*ꜱᴜᴋꜱᴇꜱ...*',
				error: {
				 bug: '*ʏᴀʜʜ ᴇʀʀᴏʀ "_"*',
				stick: ' *ɢᴀɢᴀʟ, ᴛᴇʀᴊᴀᴅɪ ᴋᴇꜱᴀʟᴀʜᴀɴ ꜱᴀᴀᴛ ᴍᴇɴɢᴋᴏɴᴠᴇʀꜱɪ ɢᴀᴍʙᴀʀ ᴋᴇ ꜱᴛɪᴄᴋᴇʀ*\n*ᴄᴏʙᴀ ᴜʟᴀɴɢɪ ᴅᴇɴɢᴀɴ ʀᴇᴩʟy ꜰᴏᴛᴏ yɢ ꜱᴜᴅᴀʜ ᴛᴇʀᴋɪʀɪᴍ*',
				Iv: '*ᴍᴀᴀꜰ ʟɪɴᴋ ᴛɪᴅᴀᴋ ᴠᴀʟɪᴅ!!*'
				},
			only: {
				group: '*ᴍᴀᴀꜰ ᴩᴇʀɪɴᴛᴀʜ ɪɴɪ ʜᴀɴyᴀ ʙɪꜱᴀ ᴅɪ ɢᴜɴᴀᴋᴀɴ ᴅᴀʟᴀᴍ ɢʀᴏᴜᴩ!*',
				benned: '*ᴍᴀᴀꜰ ɴᴏᴍᴇʀ ᴋᴀᴍᴜ ᴋᴇ ʙᴀɴɴᴇᴅ ꜱɪʟᴀʜᴋᴀɴ ʜᴜʙᴜɴɢɪ ᴏᴡɴᴇʀ ᴀɢᴀʀ ᴍᴇᴍʙᴜᴋᴀ ʙᴀɴɴᴇᴅ ᴀɴᴅᴀ*',
				ownerG: '*ᴍᴀᴀꜰ ᴩᴇʀɪɴᴛᴀʜ ɪɴɪ ʜᴀɴyᴀ ʙɪꜱᴀ ᴅɪ ɢᴜɴᴀᴋᴀɴ ᴏʟᴇʜ ᴏᴡɴᴇʀ ɢʀᴏᴜᴩ!*',
				ownerB: '*ᴍᴀᴀꜰ ᴩᴇʀɪɴᴛᴀʜ ɪɴɪ ʜᴀɴyᴀ ʙɪꜱᴀ ᴅɪ ɢᴜɴᴀᴋᴀɴ ᴏʟᴇʜ ᴏᴡɴᴇʀ ʙᴏᴛ!* ',
				premiumU: '*ᴍᴀᴀꜰ ꜰɪᴛᴜʀ ɪɴɪ ᴋʜᴜꜱᴜꜱ ᴜꜱᴇʀ ᴩʀᴇᴍɪᴜᴍ!!*',
				userB: `Hai Kak ${pushname2} Kamu Belom Terdaftar Didatabase Silahkan Ketik \n${prefix}daftar`,
				admin: '*ᴍᴀᴀꜰ ᴩᴇʀɪɴᴛᴀʜ ɪɴɪ ʜᴀɴyᴀ ʙɪꜱᴀ ᴅɪ ɢᴜɴᴀᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ ɢʀᴏᴜᴩ!*',
				Badmin: '*ᴍᴀᴀꜰ ᴩᴇʀɪɴᴛᴀʜ ɪɴɪ ʜᴀɴyᴀ ʙɪꜱᴀ ᴅɪ ɢᴜɴᴀᴋᴀɴ ᴋᴇᴛɪᴋᴀ ʙᴏᴛ ᴍᴇɴᴊᴀᴅɪ ᴀᴅᴍɪɴ!*',
				publikG: `*ᴍᴀᴀꜰ ʙᴏᴛ ꜱᴇᴋᴀʀᴀɴɢ ꜱᴜᴅᴀʜ ᴅɪᴩʀɪᴠᴀᴛᴇ ᴏʟᴇʜ ᴏᴡɴᴇʀ*\n*ᴜɴᴛᴜᴋ ʟᴇʙɪʜ ᴊᴇʟᴀꜱɴyᴀ ᴋᴇᴛɪᴋ*\n*${prefix}infobot*`
				}
			}

			const botNumber = frhan.user.jid
			const ownerNumber = [`${OwnerNumber}@s.whatsapp.net`] // owner number ubah aja 
			const ownerInfo = `${OwnerNumber}`
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await frhan.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false 
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false 
			const isNsfw = isGroup ? _nsfw.includes(from) : false
			const isSimi = isGroup ? _samih.includes(from) : false 
			const isStiker = isGroup ? astik.includes(from) : false
			const isBadWord = isGroup ? _badword.includes(from) : false
			const isAntiLink = isGroup ? _antilink.includes(from) : false 
			const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false 
			const isAfkOn = checkAfkUser(sender)
			const isOwner = ownerNumber.includes(sender)
			const isUser = user.includes(sender)
			const isBanned = ban.includes(sender)
			const isPrem = premium.includes(sender)
			const RAM = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
			const statusme = frhan.getStatus(`${sender}`)
			Ucapan = ''
			var now = new Date();
			var hours = now.getHours();
			if (hours >= 16 && hours <= 19){
			Ucapan += "Selamat Sore Jangan Lupa Makan Yaa"
			} else if (hours >= 20 && hours <= 22){
			Ucapan += "Selamat Malam Istirahat Loh Yaa"
			} else if (hours >= 23 || hours <= 3){
			Ucapan += "Udah Larut Malam Ihh Ga Bobo Kamu?"
			} else if (hours >= 3 && hours <= 5){
			Ucapan += "Selamat Pagi Bangun Gih Sholat Subuh"
			} else if (hours >= 5 && hours <= 9){
			Ucapan += "Udah Pagi Waktunya Mandi Jangan Bobo terus"
			} else if (hours >= 9 && hours <= 14){
			Ucapan += "Selamat Siang Jangan Lupa Makan Yaa"
			} else if (hours >= 14 && hours <= 16){
			Ucapan += "Selamat Sore Jangan Lupa Mandi Yaa"
			}
			const hariRaya = new Date('April 12, 2021 07:00:00')
			const Sekarang = new Date().getTime();
			const Selisih = hariRaya - Sekarang;
			const hari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
			const jam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
			const menit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
			const detik = Math.floor( Selisih % (1000 * 60) / 1000);
			const Ramadhan = `${hari} Hari ${jam} Jam ${menit} Menit ${detik} Detik`
			
			const NewYear = new Date('December 31, 2021 00:00:00')
			const sekarang = new Date().getTime();
			const selisih = NewYear - sekarang;
			const Hari = Math.floor( selisih / (1000 * 60 * 60 * 24));
			const Jam = Math.floor( selisih % (1000 * 60 * 60* 24) / (1000 * 60* 60))
			const Menit = Math.floor( selisih % (1000 * 60 * 60) / (1000 * 60))
			const Detik = Math.floor( selisih % (1000 * 60) / 1000);
			const thnBaru = `${Hari} Hari ${Jam} Jam ${Menit} Menit ${Detik} Detik`
			var Propil = await getBuffer("https://storage.naufalhoster.xyz/uploads/1616275848395_7300019843416557160021011.jpg")
			const FarhanGans = ["0@s.whatsapp.net"]
			const isUrl = (url) => {
			return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
		const sendMediaURL = async(to, url, text="", mids=[]) =>{
				if(mids.length > 0){
					text = normalizeMention(to, text, mids)
				}
				const fn = Date.now() / 10000;
				const filename = fn.toString()
				let mime = ""
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						mime = res.headers['content-type']
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, filename, async function () {
					console.log('done');
					let media = fs.readFileSync(filename)
					let type = mime.split("/")[0]+"Message"
					if(mime === "image/gif"){
						type = MessageType.video
						mime = Mimetype.gif
					}
					if(mime.split("/")[0] === "audio"){
						mime = Mimetype.mp4Audio
					}
					frhan.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
					
					fs.unlinkSync(filename)
				});
			}
const reply = (teks) => {
				frhan.sendMessage(from, teks, MessageType.text, {quoted:mek})
		}
const sendMess = (hehe, teks) => {
				frhan.sendMessage(hehe, teks,MessageType.text)
		}
const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? frhan.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : frhan.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
		}
const costum = (pesan, tipe, target, target2) => {
			frhan.sendMessage(from, pesan, tipe, { contextInfo: { forwardingScore: 508, isForwarded: true }, quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: "628311800241-1610483974@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/AlWkboTlPr0p16IFat9VcqYqHyG1iy_YdWVi7aWsvoT7.enc","fileLength": "40742","mediaKey": "c+ygokxZop+Q126P5OtJ3LgrTqtCBwe69KPDIwQJLuc=","caption": `${target2}`,"gifPlayback": true,"height": 272,"width": 224, "jpegThumbnail": Propil } } } })
		}
/*const cosProduct = (pesan, tipe, target, target2) => {
			frhan.sendMessage(from, pesan, tipe, { contextInfo: { forwadingScore: 508, isForwaded: true }, quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: "628311800241-1610483974@g.us"} : {} ) }, message: { "orderMessage":{ "orderId":"746844699313932", "thumbnail": Propil ,"itemCount":99,"status":"INQUIRY","surface":"CATALOG","message": `${target2}`, "orderTitle": `Manurios`,"sellerJid":"6288279179668@s.whatsapp.net","token":"AR7RdWGN3uUSOHUiQ68H3thOh9yaoUqblGiK/NWLtz26ig==" } } } } )
		}*/
const cosProduct = (pesan, tipe, target, target2, captionnya) => {
			frhan.sendMessage(from, pesan, tipe, { contextInfo: { forwadingScore: 508, isForwaded: true }, quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: "628311800241-1610483974@g.us"} : {} ) }, message: { "orderMessage":{ "orderId":"746844699313932", "thumbnail": Propil,"itemCount":99,"status":"INQUIRY","surface":"CATALOG","message": `${target2}`, "orderTitle": `Manurios`,"sellerJid":"6288279179668@s.whatsapp.net","token":"AR7RdWGN3uUSOHUiQ68H3thOh9yaoUqblGiK/NWLtz26ig==" } } }, caption: captionnya} )
		}
/*const cosProduct = (pesan, tipe, target, target2, captionnya) => {
			frhan.sendMessage(from, pesan, tipe, {contextInfo: { forwardingScore: 508, isForwarded: true }, quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: "628311800241-1610483974@g.us"} : {} ) }, message: { "orderMessage":{ "orderId":"746844699313932", "thumbnail":`${imgbase64}`,"itemCount":99999999,"status":"INQUIRY","surface":"CATALOG", "mimetype": "video/mp4", "seconds": 9999, "message": `► @${pushname2}\n► wa.me/${sender.split("@")[0]}`, "orderTitle": `FarhanXCode7`,"sellerJid":"628311800241@s.whatsapp.net","token":"AR7RdWGN3uUSOHUiQ68H3thOh9yaoUqblGiK/NWLtz26ig==" } } } }, caption: captionnya})
		}*/
const cosLocation = (pesan, tipe, target, target2) => {
			frhan.sendMessage(from, pesan, tipe, {contextInfo: { forwardingScore: 508, isForwarded: true }, quoted: { key: {fromMe: false, participant: `${target}`, ...(from ? { remoteJid: "628311800241-1610483974@g.us" } : {}) }, message: { "locationMessage": { "degreesLatitude": -8.318999608054611, "degreesLongitude": 114.34347780544245, "name": `${target2}`, "address": "Patoman, Belimbing sari, Banyuwangi", "url": "https://foursquare.com/v/4e846b4c5503e18a127c8f6d", "jpegThumbnail": `${locbase64}` } } } } )
		}
const cosContact = (pesan, tipe, target, target2) => {
			frhan.sendMessage(from, pesan, tipe, {contextInfo: { forwardingScore: 508, isForwarded: true }, quoted: { key: {fromMe: false, participant: `${target}`, ...(from ? { remoteJid: "628311800241-1610483974@g.us" } : {}) }, message: { "contactMessage": {"displayName": `${target2}` ,"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:M̴̀̈́̆̈́̽̕a̴̡̲̤͛͂ń̶̍̄urios;Owner;;;\nFN:Owner M̴̀̈́̆̈́̽̕a̴̡̲̤͛͂ń̶̍̄urios\nitem1.TEL;waid=6288279179668:+62 882-7917-9668\nitem1.X-ABLabel:Ponsel\nEND:VCARD", "jpegThumbnail": Propil } } } } )
		}
		const sendFakeThumb = async function(from, url, title, desc, imgnya){
			var Farhan = await frhan.generateLinkPreview(url)
			Farhan.title = title
			Farhan.description = desc
			Farhan.jpegThumbnail = imgnya
			frhan.sendMessage(from, Farhan, MessageType.extendedText, { detectLinks: false })
		}
const repeat = (text, total) => {
			reply(text.repeat(total))
			
}
if (isGroup) {
mentioneddd = mek.message[Object.keys(mek.message)[0]].contextInfo ? mek.message[Object.keys(mek.message)[0]].contextInfo.mentionedJid : []
for (let ment of mentioneddd) {
if (checkAfkUser(ment)) {
const getId = getAfkId(ment)
const getReason = getAfkReason(getId)
const getTime = getAfkTime(getId)
reply(ind.afkMentioned(getReason, getTime))
}
}
if (checkAfkUser(sender) && !isCmd) {
_afk.splice(getAfkPosition(sender), 1)
fs.writeFileSync('./database/json/userafk.json', JSON.stringify(_afk))
reply(ind.afkDone(pushname2))
}
}
const checkLimit = (sender) => {
			let found = false
			for (let lmt of _limit) {
			if (lmt.id === sender) {
			let limitCounts = limitawal - lmt.limit
			if (limitCounts <= 0) return
			frhan.sendMessage(from, `*sisa limit anda : ${limitCounts}*`, MessageType.text, { quoted : mek})
			found = true 
		}
	}
			if (found === false) {
			let obj = { id: sender, limit: 0 }
			_limit.push(obj)
			fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
			frhan.sendMessage(from, `*sisa limit anda : ${limitCounts}*`, MessageType.text, { quoted : mek}) 
		}
	} 
			//funtion limited 
const isLimit = (sender) =>{ 
			if (isPrem && isOwner) {return false;}
			let position = false
			for (let i of _limit) {
			if (i.id === sender) {
			let limits = i.limit
			if (limits >= limitawal ) {
			position = true
			frhan.sendMessage(from, ind.limitend(pushname2), MessageType.text, {quoted: mek})
			return true 
			} else {
			_limit
			position = true
			return false 
		}
	}
}
			if (position === false) {
			const obj = { id: sender, limit: 0 }
			_limit.push(obj)
			fs.writeFileSync('./database/json/limit.json',JSON.stringify(_limit))
			return false 
		}
	}
if (isGroup) {
			try {
		const getmemex = groupMembers.length
		if (getmemex <= memberLimit) {
		setTimeout( () => {
		frhan.groupLeave(from) 
		}, 2000)
		setTimeout ( () => {
		frhan.sendMessage(from, `Maaf Yaa Bye All👋`,MessageType.text)
		}, 1000)
		setTimeout( () => {
		frhan.sendMessage(from, `Maaf ${name} Tidak Bisa Masuk Group Karna Member Group ${groupMetadata.subject} Tidak Memenuhi Limit Member\n\nMinimal Member ${memberLimit}`,MessageType.text)
		}, 0)
	}
		} catch (err) { console.error(err)  }
		
	}
		
		if (FXC7.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply(`${pushname2} Adalah Admin Group Kamu Tidak Akan Di kick`)
		frhan.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply('byee👋')
		}, 1100)
		setTimeout( () => {
		frhan.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 1000)
		setTimeout( () => {
		reply(`Link Group Terdeteksi maaf *${pushname2}* anda akan di kick`)
		}, 0)
	}
		if (FXC7.length > 500){
        if (!isGroup) return
		if (!isAntiVirtex) return
		if (isGroupAdmins) return reply(`${pushname2} Adalah Admin Group Kamu Tidak Akan Di kick`)
		frhan.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		costum(monospace(`Virtex Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group`))
		setTimeout( () => {
			frhan.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
			frhan.blockUser(sender, "add")
		}, 0)
	}
		if (isGroup && isBadWord) {
		if (bad.includes(FXC7)) {
		if (!isGroupAdmins) {
		return reply("JAGA UCAPAN DONG!!")
		.then(() => frhan.groupRemove(from, sender))
		.then(() => {
		frhan.sendMessage(from, `*「 ANTI BADWORD 」*\nKamu dikick karena berkata kasar!`,MessageType.text ,{quoted: mek})
		}).catch(() => frhan.sendMessage(from, `Untung Jenny bukan admin, kalo admin udah Jenny kick!`,MessageType.text , {quoted : mek}))
		} else {
		return reply( "Tolong Jaga Ucapan ya Mimin, Jenny Ga suka_-")
		}
	}
}

			var premi = '*NOT PREMIUM*'
			if (isPrem) {
			premi = '*YES PREMIUM*'
			} 
			if (isOwner) {
			premi = '*UNLIMITED PREMIUM*'
			}
			var limitnya = `${limitawal}/Day`
			if (isPrem) {
			limitnya = 'UNLIMITED LIMIT'
			}
			if (isOwner) {
			 limitnya = 'UNLIMITED LIMIT'
			}
			var Simihh = 'OFF'
			if(isSimi) {
			Simihh = 'ACTIVE'
			}
			var Welcomee = 'OFF'
			if (isWelkom) {
			Welcomee = 'ACTIVE'
			}
			var Nsfww = 'OFF'
			if (isNsfw) {
			Nsfww = 'ACTIVE'
			}
			var BadWordd = 'OFF'
			if (isBadWord) {
			BadWordd = 'ACTIVE'
			}
			var AntiLinkk = 'OFF'
			if (isAntiLink) {
			AntiLinkk = 'ACTIVE'
			}
			var AntiVirtexx = 'OFF'
			if (isAntiVirtex) {
			AntiVirtexx = 'ACTIVE'
			}
			var autostickernya = 'OFF' 
			if (isStiker) {
			autostickernya = 'ACTIVE' 
			}

	if(FXC7.includes('!daftar')){
	reply('tunggu bentar ya kak lagi diproses')
	}
	if(FXC7.includes('prefix')){
	  reply(`*_PREFIX JENNY ADALAH [ ${prefix} ]_*`)
	}
	if(FXC7.includes('kontol')){
	  reply(`*Apa Kontol*`)
	}
	if(FXC7.includes('assal')){
	  reply(`Waalaikumsalam`)
	}
	irenn = fs.readFileSync(`./database/sticker/iren.webp`)
	if(FXC7.includes('jenny')){
	cosProduct(irenn, sticker, FarhanGans, `Apaan Manggil Manggil`)
	}
	salken = fs.readFileSync(`./database/sticker/salken.webp`)
	if(FXC7.includes('salken')){
	cosProduct(salken, sticker, FarhanGans, FarhanGans2)
	}
	irennn = fs.readFileSync(`./database/sticker/iren.webp`)
	if(FXC7.includes('syg')){
	cosProduct(irenn, sticker, FarhanGans, `Ummm`)
	}
	okee = fs.readFileSync(`./database/sticker/oke.webp`)
	if(FXC7.includes('oke')){
	cosProduct(okee, sticker, FarhanGans, FarhanGans2)
	}
	ownerku = fs.readFileSync(`./database/sticker/owner.webp`)
	if(FXC7.includes('@6283141926935')){
	cosProduct(ownerku, sticker, FarhanGans, FarhanGans2)
	}
	acil = fs.readFileSync(`./database/sticker/acil.webp`)
	if(FXC7.includes('acil')){
	await costum(acil, sticker, FarhanGans, FarhanGans2)
	}
	nomerku = fs.readFileSync('./database/sticker/nomerku.webp')
	if(FXC7.includes('@6285740968993')){
	frhan.sendMessage(from, nomerku, sticker, {quoted: mek})
	}
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}

if ('00:00:00' == time) {
_limit.splice('reset') //RESET LIMIT AUTOMATE
fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
}
if ('00:00:00' == time) {
  return process.exit()
}
for (var i = 0; i < commandsDB.length ; i++) {
			if (budy.toLowerCase() === commandsDB[i].pesan) {
		reply(commandsDB[i].balasan)
	}
}

			colors = ['red','white','black','blue','yellow','green', 'aqua']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			
			let authorname = frhan.contacts[from] != undefined ? frhan.contacts[from].vname || frhan.contacts[from].notify : undefined
			if (authorname != undefined) { } else { authorname = groupName }
			switch(command) { 
			case 'addpremium':
			if (!isOwner) return reply(mess.only.ownerB)			
			const pnom = `${args[0].replace("@",'')}@s.whatsapp.net`
			premium.push(pnom) 
			fs.writeFileSync('./database/json/premium.json',JSON.stringify(premium))
			reply(`「 *PREMIUM ADD* 」\n*Name* : ${args[0].split("@")[0]}\n*Expired* : 30 DAY\n*thank for order premium*`)
		break
		case 'dellpremium':
			if (!isOwner) return reply(mess.only.ownerB)
			const hnom = `${args[0].replace('@','')}@s.whatsapp.net`
			premium.splice(hnom, 1)
			fs.writeFileSync('./database/json/premium.json',JSON.stringify(hnom))
			reply(`*「 PREMIUM DELETE 」*\n*Name* : ${args[0].split("@")[0]}\n*Expired* : NOW:v\n*thank for order premium back soon for buying again:D*`)
			break 
		case 'premiumlist':
			if (!isUser) return reply(mess.only.userB)
			teks = `╭────「 *TOTAL USER PREMIUM* 」\n`
			no = 0
			for (let ispremium of premium) {
			no += 1
			teks += `[ ${no.toString()} ] @${ispremium.split('@')[0]}\n`
			}
			teks += `│+ Total User Premium : ${premium.length}\n╰──────⎿ *${name}* ⏋────`
			frhan.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": premium}})
		break
			/*case 'menu':
			case 'help':
			if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
				uptime = process.uptime()
				user.push(sender)
				var chats = await frhan.chats.all()
				chats.map( async ({ jid }) => {
				await frhan.chatRead(jid)
				})
				groups = frhan.chats.array.filter(v => v.jid.endsWith('g.us') && !v.read_only && v.message).map(v => v.jid)
				cosProduct(help(prefix, h2k, instagram, linkCuriga, name, pushname2, user, limitnya, uptime, JAM, tanggal(), groupName, chats, premi, groups, Simihh, Welcomee, Nsfww, BadWordd, AntiLinkk, AntiVirtexx, autostickernya, frhan, process, RAM, Ramadhan, Ucapan, premium, thnBaru), MessageType.text, FarhanGans, FarhanGans2)
			break */
			case 'menu':
			case 'help':
			if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
				uptime = process.uptime()
				user.push(sender)
				var chats = await frhan.chats.all()
				chats.map( async ({ jid }) => {
				await frhan.chatRead(jid)
				})
				groups = frhan.chats.array.filter(v => v.jid.endsWith('g.us') && !v.read_only && v.message).map(v => v.jid)
				buffnya = await getBuffer('https://storage.naufalhoster.xyz/uploads/1616345116971_3454197943083545522700787.jpg')
				cosProduct(buffnya, MessageType.image, FarhanGans, FarhanGans2, help(prefix, h2k, instagram, linkCuriga, name, pushname2, user, limitnya, uptime, JAM, tanggal(), groupName, chats, premi, groups, Simihh, Welcomee, Nsfww, BadWordd, AntiLinkk, AntiVirtexx, autostickernya, frhan, process, RAM, Ramadhan, Ucapan, premium, thnBaru))
			break
			case 'menuowner':
			if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
				cosProduct(menuowner(prefix), MessageType.text, FarhanGans, FarhanGans2)
			break 
			case 'menugroup':
			if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
				cosProduct(menugrup(prefix), MessageType.text, FarhanGans, FarhanGans2)
			break 
			case 'menuothers':
			if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
				cosProduct(menuothers(prefix), MessageType.text, FarhanGans, FarhanGans2)
			break 
			case 'menumaker':
			if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
				cosProduct(menumaker(prefix), MessageType.text, FarhanGans, FarhanGans2)
			break 
			case 'menuinfo':
			if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
				cosProduct(menuinfo(prefix), MessageType.text, FarhanGans, FarhanGans2)
			break 
			case 'menupremium':
			if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
				cosProduct(menupremium(prefix), MessageType.text, FarhanGans, FarhanGans2)
			break 
			case 'afk':
	if (!isUser) return reply(mess.only.userB)
	if (!isGroup) return reply(mess.only.group)
	if (isAfkOn) return reply(ind.afkOnAlready())
	if (isLimit(sender)) return reply(ind.limitend(pusname))
	limitAdd(sender)
	reason = body.slice(5)
	if (reason === undefined || reason === ' ' || reason === '') { reason = 'Keknya Ngeue:v'}
	addAfkUser(sender, time, reason)
	reply(ind.afkOn(pushname2, reason))
	await limitAdd(sender)
	break
			case 'addrespon':
				if(!isOwner) return reply(mess.only.owner)
				if (args.length < 1) return reply(`Penggunaan ${prefix}addrespon hai|hai juga`)
				argz = arg.split('|')
				if (checkCommands(argz[0], commandsDB) === true) return reply(`Udah ada`)
				addCommands(argz[0], argz[1], sender, commandsDB)
				costum(`Ok berhasil gan`, MessageType.text, FarhanGans, FarhanGans2)
				break
			case 'delrespon':
				if(!isOwner) return reply(mess.only.owner)
				if (args.length < 1) return reply(`Penggunaan ${prefix}delrespon hai`)
				if (!checkCommands(body.slice(6), commandsDB)) return reply(`Ga ada di database`)
				deleteCommands(body.slice(6), commandsDB)
				costum(`Ok berhasil gan`, MessageType.text, FarhanGans, FarhanGans2)
				break
			case 'stickerwm':
						if(!isOwner) return reply(mess.only.owner)
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							wmsti = body.slice(11)
							if (!wmsti.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
							const EncMedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const MediA = await frhan.downloadAndSaveMediaMessage(EncMedia, `./sticker/${sender}`)
							const packname1 = wmsti.split('|')[0]
							const author1 = wmsti.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							await ffmpeg(`${MediA}`)
									.input(MediA)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(MeDiA)
										reply('Yahh Error Coba Ulangi')
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											//if (error) return reply(mess.error.bug)
											frhan.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							wmsti = body.slice(11)
							if (!wmsti.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
							const MediaEnc = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const MeDiA = await frhan.downloadAndSaveMediaMessage(MediAEnc, `./sticker/${sender}`)
							const packname1 = wmsti.split('|')[0]
							const author1 = wmsti.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							reply(mess.wait)
								await ffmpeg(`${MediA}`)
									.inputFormat(MeDiA.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.bug)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
										//	if (error) return reply(mess.error.bug)
											frhan.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(MeDiA)
											fs.unlinkSync(`./sticker/${sender}.webp`)
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
		case 'takestick':
						if(!isOwner) return reply(mess.only.owner)
						if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}takestick nama|author*`)
						const pembawm = body.slice(11)
						if (!pembawm.includes('|')) return await reply(`Reply sticker dengan caption *${prefix}takestick nama|author*`)
						const Encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const Media = await frhan.downloadAndSaveMediaMessage(Encmedia, `./sticker/${sender}`)
						const packname = pembawm.split('|')[0]
						const author = pembawm.split('|')[1]
						exif.create(packname, author, `takestick_${sender}`)
						exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
							if (error) return reply(mess.error.bug)
							frhan.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
							fs.unlinkSync(Media)
							fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
						})
				break
	case 'daftar':
		case 'verify':
					frhan.updatePresence(from, Presence.composing)
					if (isUser) return reply('Btw Kita Udah Temenan Kak❤')
					if (isBanned) return reply(mess.only.benned)
					user.push(sender)
					fs.writeFileSync('./database/json/user.json', JSON.stringify(user))
					try {
					ppimg = await frhan.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					ppimg = 'https://i.ibb.co/Gp4H47k/7dba54f7e250.jpg'
					}
					const noSeri = createSerial(15)
					captionnya = `╭─「 *PENDAFTARAN USER* 」\n│ \`\`\`Pendaftaran berhasil dengan\`\`\` \n│ \`\`\`SN: ${noSeri}\`\`\`\n│\n│\`\`\`Pada ${date} ${time}\`\`\`\n│\`\`\`[Nama]: ${pushname2}\`\`\`\n│\`\`\`[Nomor]: wa.me/${sender.split("@")[0]}\`\`\`\n│\`\`\`Untuk menggunakan bot\`\`\`\n│\`\`\`silahkan\`\`\`\n│\`\`\`kirim ${prefix}help/menu\`\`\`\n│\`\`\`\n│Total Pengguna: ${user.length} Orang\`\`\`\n╰─────────────────────────`
					daftarimg = await getBuffer(ppimg)
					frhan.sendMessage(from, daftarimg, image, {quoted: mek, caption: captionnya})
				break
		case 'mutualan':
			if (!isUser) return reply(mess.only.userB)
			if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup,silahkan gunakan di private chat bot')
			const anug = fs.readFileSync('./database/json/user.json')
			const anugJson = JSON.parse(anug)
			const rondIndox = Math.floor(Math.random() * anugJson.length)
			const rondKoy = anugJson[rondIndox]
			await reply('Looking for a partner...')
			await sleep(3000)
			await reply(`wa.me/${rondKoy.split("@")[0]}`)
			await sleep(1000)
			await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
		break
		case 'next':
			if (!isUser) return reply(mess.only.userB)
			if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup,silahkan gunakan di private chat bot')
			const aanug = fs.readFileSync('./database/json/user.json')
			const aanugJson = JSON.parse(aanug)
			const rondIndoxx = Math.floor(Math.random() * aanugJson.length)
			const rondKoyy = aanugJson[rondIndoxx]
			await reply('Looking for a partner...')
			await sleep(3000)
			await reply(`wa.me/${rondKoyy.split("@")[0]}`)
			await sleep(1000)
			await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
		break
			case 'vapor':
					if (!isOwner) return reply(mess.only.owner)
					if (args.length < 1) return reply("text nya mana ?")
					reply(vapor(`${args[0]}`))
					break
				case 'zalgo':
					if (!isOwner) return reply(mess.only.owner)
					if (args.length < 1) return reply("text nya mana ?")
					reply(zalgo(`${args[0]}`))
				break 
				case 'pitch':
					if (!isOwner) return reply(mess.only.owner)
					if (!isQuotedAudio) return reply('reply sound nya!!!')
					pitch = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					if (!Number(args[0])) return reply(`Contoh Penggunaan : ${prefix}pitch 4`)
					if (args[0] > 12) return reply("Max 12")
					const pitchsave = await frhan.downloadAndSaveMediaMessage(pitch, `./database/audio/${args[1]}.mp3`)
					exec(`ffmpeg -i ${pitchsave} -filter_complex asetrate=48000*2^(${args[0]}/12),atempo=1/2^(${args[0]}/12) database/audio/${args[1]}.mp3 -y`, (err, stderr, stdout) => {
					if (err) return reply('ERROR')
					frhan.sendMessage(from, `./database/audio/${args[1]}.mp3`, MessageType.audio, {quoted: mek})
					})
				break
				case 'myprofile':
				case 'my':
					frhan.updatePresence(from, Presence.composing)
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isBanned) return reply(mess.only.benned)
					profilecard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + `FN:${pushname2}\n` + `TEL;type=CELL;type=VOICE;waid=${(sender.split('@')[0])}:${(sender.split('@')[0])}\n` + 'END:VCARD' 
					str = `\n *USERNAME*: ${pushname2} [ @${sender.split`@`[0]} ]\n*ID*:${sender.split`@`[0]}@c.us\n*STATUS BIO:* ${statusme}\n*LINK CHAT*: https://wa.me/${sender.split`@`[0]}`.trim()
					try {
					ppUrl = await frhan.getProfilePicture(sender)
					pp = await getBuffer(ppUrl)
					} catch {
					pp = 'https://i.ibb.co/Wg3qpfT/1200397ddb31.jpg' 
					}
					await frhan.sendMessage(from, pp, image, {caption: str, quoted:mek, contextInfo: {"mentionedJid": [sender]}})
					await cosContact({displayname: "Jenny", vcard: profilecard}, contact, FarhanGans, `${pushname2}`)
				break
				case 'listephoto':
					frhan.sendMessage(from, monospace(listephoto()), MessageType.text, {quoted: mek})
				break 
				case 'listtextpro':
					frhan.sendMessage(from, monospace(listtextpro()), MessageType.text, {quoted: mek})
				break
			case 'sharelock':
			await cosLocation({degreesLatitude:-8.3205645, degreesLongitude:114.3420187}, MessageType.location, FarhanGans, `[+] ~ 𝐋𝐨𝐜𝐚𝐭𝐢𝐨𝐧: 𝐁𝐚𝐧𝐲𝐮𝐰𝐚𝐧𝐠𝐢`)
			break 
			case 'wame':
					reply(`wa.me/${sender.split('@')[0]}\nAtau\napi.whatsapp.com/send?phone=${sender.split('@')[0]}`)
			break 
			case 'slow':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await frhan.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						frhan.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'gemuk':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await frhan.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						frhan.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
              case 'tupai':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await frhan.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						frhan.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break 
				case 'toptt':
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await frhan.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Gagal mengkonversi audio ke ptt')
						topt = fs.readFileSync(ran)
						frhan.sendMessage(from, topt, audio, {mimetype: 'audio/mp4', quoted: mek, ptt:true})
						})
					break
				case 'bass':                 
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await frhan.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						frhan.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
			case 'brainly':
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                    brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					teks = '❉───────────────────────❉\n'
					for (let Y of res.data) {
						teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉───────────────────────❉\n`
					}
					costum(teks, MessageType.text, FarhanGans, `Ciee Cari Kunci Jawaban Yaa😂`)
					console.log(res)
					})
					await limitAdd(sender)
				break 
				case 'pokemon':
					if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Harta Tahta Apa??')
					anu = body.slice(9)
					anu1 = await fetchFxc7(`https://leyscoders-api.herokuapp.com/api/textmaker/pokemon?q=${anu}&apikey=${LeysApi}`, {method: 'get'})
					reply(mess.wait)
					buffer = await getBuffer(anu1.result.url)
					costum(buffer, image, FarhanGans, 'Pokemon Text Maker')
					await limitAdd(sender)
					break
					case 'closetime':
				  if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					var gh = body.slice(11)
					jm = `${gh}000`
					frhan.sendMessage(from, `*「 CLOSE GROUP TIMER 」*\n\n> *Durasi*: ${gh} detik\n> *From Admin*: @${sender.split("@s.whatsapp.net")[0]}`, MessageType.text, {quoted: mek, contextInfo: {mentionedJid: [sender]}})
					setTimeout( () => {
					frhan.groupSettingChange(from, GroupSettingChange.messageSend, true)
					cosProduct(`*「 CLOSE GROUP TIME SUCCESS 」*`, MessageType.text, FarhanGans, FarhanGans2) // ur cods
					}, jm) // 1000 = 1s,
				break
				case 'opentime':
				  if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					var gh = body.slice(10)
					jm = `${gh}000`
					frhan.sendMessage(from, `*「 OPEN GROUP TIMER 」*\n\n> *Durasi*: ${gh} detik\n> *From Admin*: @${sender.split("@s.whatsapp.net")[0]}`, MessageType.text, {quoted: mek, contextInfo: {mentionedJid: [sender]}})
					setTimeout( () => {
					frhan.groupSettingChange(from, GroupSettingChange.messageSend, false)
					cosProduct(`*「 OPEN GROUP TIME SUCCESS 」*`, MessageType.text, FarhanGans, FarhanGans2) // ur cods
					}, jm) // 1000 = 1s,
				break
case 'neon':
case 'greenneon':
case 'advanceglow':
case 'futureneon':
case 'sandwriting':
case 'sandsummer':
case 'sandengraved':
case 'metaldark':
case 'neonlight':
case 'holographic':
case 'text1917':
case 'minion':
case 'deluxesilver':
case 'newyearcard':
case 'bloodfrosted':
case 'halloween':
case 'jokerlogo':
case 'fireworksparkle':
case 'natureleaves':
case 'bokeh':
case 'toxic':
case 'strawberry':
case 'box3d':
case 'roadwarning':
case 'breakwall':
case 'icecold':
case 'luxury':
case 'cloud':
case 'summersand':
case 'horrorblood':
case 'thunder':
case 'christmas':
  try {
	if (isBanned) return reply(mess.only.benned)    
	if (!isUser) return reply(mess.only.userB)
const txt = `${args[0]}`
reply(mess.wait)
buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/${command}?apikey=${LolApi}&text=${txt}`, {method: 'get'})
await costum(buffer, image, FarhanGans, FarhanGans2)
} catch {
  costum('*_YAHH GAGAL*_* ULANGI BEBERAPA SAAT LAGI_*', MessageType.text, FarhanGans, FarhanGans2)
}
break
case 'reminder':
if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					var gh = body.slice(10)
					var anu = gh.split("/")[0];
					var ani = gh.split("/")[1];
					jm = `${ani}000`
					frhan.sendMessage(from, `*「 REMINDER 」*\n\nReminder diaktifkan!\n\n��  *Pesan*: ${anu}\n��  *Durasi*: ${ani} detik\n��  *Untuk*: @${sender.split("@s.whatsapp.net")[0]}`, text, {contextInfo: {mentionedJid: [sender]}})
					setTimeout( () => {
					frhan.sendMessage(from, `*「 REMINDER 」*\n\nAkhirnya tepat waktu~@${sender.split("@s.whatsapp.net")[0]}\n\n��  *Pesan*: ${anu}`, text, {contextInfo: {mentionedJid: [sender]}}) // ur cods
					}, jm) // 1000 = 1s,
					
break
case 'runtime':
                runtime6 = process.uptime()
                run6 = `*[ BOT AKTIF ]*\n${kyun(runtime6)}`
                frhan.sendMessage(from, run6, text, {
                quoted: {
                key: {
                fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? {
                remoteJid: "status@broadcast"
                }: {})
                }, message: {
                              "locationMessage": {
						"degreesLatitude": -7.446023856943229,
						"degreesLongitude": 112.62923955917358,
						"jpegThumbnail": Propil
                   }
                  }                   
                   }
                      })
                    break

case 'bts':
                case 'exo':
                case 'elf':
                case 'meki':
                case 'neko':
                case 'waifu':
                case 'shota':
                case 'husbu':
                case 'sagiri':
                case 'shinobu':
                case 'megumin':
                case 'art':
                case 'wallnime':
                    if (!isUser) return reply(mess.only.userB)
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/${command}?apikey=${LolApi}`)
                    frhan.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
                    
                case 'neko':
                case 'waifu':
                case 'meki':
                case 'chiisaihentai':
                case 'trap':
                case 'blowjob':
                case 'yaoi':
                case 'ecchi':
                case 'hentai':
                case 'ahegao':
                case 'homekewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
                    if (!isUser) return reply(mess.only.userB)
                    	if (!isNsfw) return reply(' *FALSE* ')
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${LolApi}`)
                    frhan.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
                    
                case 'bj':
                case 'ero':
                case 'cum':
                case 'feet':
                case 'yuri':
                case 'trap':
                case 'ngif':
                case 'lewd':
                case 'feed':
                case 'eron':
                case 'solo':
                case 'gasm':
                case 'poke':
                case 'anal':
                case 'holo':
                case 'tits':
                case 'kuni':
                case 'kiss':
                case 'erok':
                case 'smug':
                case 'baka':
                case 'solog':
                case 'feetg':
                case 'lewdk':
                case 'waifu':
                case 'pussy':
                case 'femdom':
                case 'cuddle':
                case 'hentai':
                case 'eroyuri':
                case 'cum_jpg':
                case 'blowjob':
                case 'erofeet':
                case 'holoero':
                case 'classic':
                case 'erokemo':
                case 'fox_girl':
                case 'futanari':
                case 'lewdkemo':
                case 'wallpaper':
                case 'pussy_jpg':
                case 'kemonomimi':
                case 'nsfw_avatar':
                case 'nsfw_neko_gif':
                case 'random_hentai_gif':
                    if (!isUser) return reply(mess.only.userB)
                    	if (!isNsfw) return reply(' *FALSE* ')
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/${command}?apikey=${LolApi}`)
                    frhan.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break

                case 'shadow':
                case 'cup':
                case 'cup1':
                case 'romance':
                case 'smoke':
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'love':
                case 'coffe':
                case 'woodheart':
                case 'flowerheart':
                case 'woodenboard':
                case 'summer3d':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'fallleaves':
                case 'flamming':
                case 'harrypotter':
                case 'carvedwood':
                    if (!isUser) return reply(mess.only.userB)
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} Manurios`)
                    itu_txt = args.join(" ")
                    itu_buffer = await getBuffer(`http://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${LolApi}&text=${itu_txt}`)
                    frhan.sendMessage(from, itu_buffer, image, { quoted: mek })
                    break
				case 'ktpmaker':
if (!isPrem) return reply(mess.only.premium)
                    if (args.length == 0) return reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|LoL Human|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/ktpmaker?apikey=${LolApi}&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
                    frhan.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break
                case 'fakedonald':
                if (!isPrem) return reply(mess.only.premium)
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} LoL Human`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/tweettrump?apikey=${LolApi}&text=${ini_txt}`)
                    frhan.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break
                    
                case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
                  if (!isUser) return reply(mess.only.userB)
                    if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} Manurios`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${LolApi}&text=${ini_txt}`)
                   
frhan.sendMessage(from, ini_buffer, image, { quoted: mek })
await limitAdd(sender)
                    break
					case 'aesthetic':
				gatauda = body.slice(9)
				 // Fix Bug By frhanXSec404		
				reply('[WAIT]')
				anu = await fetchFxc7(`https://api.zeks.xyz/api/estetikpic?apikey=apivinz`, {method: 'get'})
				buffer = await getBuffer(anu.result.result)
				cosProduct(from, buffer, image, {quoted: mek, caption: 'Nih aestheticnya kak...'})
				await limitAdd(sender)
				break
case 'getjodoh':
if (isBanned) return reply(mess.only.benned)
                                        if (!isUser) return reply(mess.only.userB)

                    up = user

                    aku = up[Math.floor(Math.random() * up.length)];

                    pcard = 'BEGIN:VCARD\n' // metadata of the contact card
                                        + 'VERSION:3.0\n'
                                        + `FN:Random Kontak\n` // full name
                                        + `TEL;type=CELL;type=VOICE;waid=${(aku.split('@')[0])}:${(aku.split('@')[0])}\n` // WhatsApp ID + phone number
                                        + 'END:VCARD'

                 frhan.sendMessage(from, {displayname: "Caliph", vcard: pcard}, contact, {quoted:mek})
limitAdd(sender)
                    break
					case 'boruto':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
				
				if (isLimit(sender)) return reply(limitend(pushname2))
					
					reply(mess.wait)
					try {
					anu = await fetchFxc7 (`https://api.fdci.se/rep.php?gambar=Boruto`, {method: 'get'})
					bor = JSON.parse(JSON.stringify(anu));
					uto =  bor[Math.floor(Math.random() * bor.length)];
					nye = await getBuffer(uto)
					frhan.sendMessage(from, nye, image, { caption: 'boruto!!', quoted: mek })
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender)
					break
					case 'ganteng':
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					membr = []
					const test = groupMembers
					const msi = groupMembers
					const siapss = test[Math.floor(Math.random() * test.length)]
					const sipss = pushname2[Math.floor(Math.random() * msi.length)]
					teks = `*Yang Paling Ganteng Disini Adalah :* @${siapss.jid.split('@')[0]}`
					membr.push(siapss.jid)
					mentions(teks, membr, true)
					await limitAdd(sender) 
					break
case 'cantik':
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					membr = []
					const tust = groupMembers
					const msa = groupMembers
					const siappss = tust[Math.floor(Math.random() * tust.length)]
					const sippss = pushname2[Math.floor(Math.random() * msa.length)]
					teks = `*Yang Paling Cantik Disini Adalah :* @${siappss.jid.split('@')[0]}`
					membr.push(siappss.jid)
					mentions(teks, membr, true)
					await limitAdd(sender) 
					break
case 'gay':
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					membr = []
					const tist = groupMembers
					const msl = groupMembers
					const siapgss = tist[Math.floor(Math.random() * tist.length)]
					const sipgss = pushname2[Math.floor(Math.random() * msl.length)]
					teks = `*Yang Paling Gay Disini Adalah :* @${siapgss.jid.split('@')[0]}`
					membr.push(siapgss.jid)
					mentions(teks, membr, true)
					await limitAdd(sender) 
					break
case 'lesbi':
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					membr = []
					const tast = groupMembers
					const msu = groupMembers
					const siaplss = tast[Math.floor(Math.random() * tast.length)]
					const siplss = pushname2[Math.floor(Math.random() * msu.length)]
					teks = `*Yang Paling Lesbi Disini Adalah :* @${siaplss.jid.split('@')[0]}`
					membr.push(siaplss.jid)
					mentions(teks, membr, true)
					await limitAdd(sender) 
					break
case 'cecan':
      case 'cewek':
					var items = ["ullzang girl", "cewe cantik", "hijab cantik", "korean girl"];
                    var cewe = items[Math.floor(Math.random() * items.length)];
					anu = await fetchFxc7(`https://api.vhtear.com/pinterest?query=${cewe}&apikey=${VthearApi}`, {method: 'get'})
					cosProduct(mess.wait, text, FarhanGans, FarhanGans2)
					var pin = JSON.parse(JSON.stringify(anu.result));
					var trest =  pin[Math.floor(Math.random() * pin.length)];
					pine = await getBuffer(trest)
					frhan.sendMessage(from, pine, image, { caption: 'Ingat,jangan nyakitin hati ceue', quoted: mek })
					limitAdd(sender)
break
                       case 'cogan':
      case 'cowok':
       if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
					items = ["cowo ganteng", "cogan", "korean boy", "chinese boy", "japan boy"];
                    var cewe = items[Math.floor(Math.random() * items.length)];
					anu = await fetchFxc7(`https://api.vhtear.com/pinterest?query=${cewe}&apikey=${VthearApi}`, {method: 'get'})
					cosProduct(mess.wait, text, FarhanGans, FarhanGans2)
					var pin = JSON.parse(JSON.stringify(anu.result));
					var trest =  pin[Math.floor(Math.random() * pin.length)];
					pine = await getBuffer(trest)
					frhan.sendMessage(from, pine, image, { caption: 'Cogan kah?', quoted: mek })
					limitAdd(sender)
break
case 'qrcode':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                ini_buff = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?data=${body.slice(8)}&size=1080%C3%971080`)
				frhan.sendMessage(from, ini_buff, image, {quoted: mek})
                                await limitAdd(sender)
				break

case 'bannerlol':
  const kata1 = `${args[0]}`
  const kata2 = kata1.split("/")[0];
  const kata3 = kata1.split("/")[1];
  try { 
buff = await getBuffer(`http://api.lolhuman.xyz/api/photooxy3/${command}?apikey=${LolApi}&text=${kata1}&${kata2}`, {method: 'get'})
await costum(buff, image, FarhanGans, FarhanGans2)
} catch {
  reply(mess.error.bug)
}
break
// fitur simple
		case 'listsurah':
				await costum(listsurah(), MessageType.text, FarhanGans, FarhanGans2)
			break 

			case 'infobot':
				await costum(bottt(prefix), MessageType.text, FarhanGans, botinfo)
					break

				case 'bahasa':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				frhan.sendMessage(from, bahasa(prefix), MessageType.text, {quoted: mek})
				break 
				case 'donasi':
					frhan.sendMessage(from, donasi(name), MessageType.text, {quoted: mek})
					break
				case 'info':
					var me = await frhan.user
					user.push(sender)
					uptime = process.uptime()
					teks = `➽ *Nama Bot* : ${me.name}\n➽ *Owner Bot* : https://api.whatsapp.com/${ownerInfo}\n➽ *prefix* : | ${prefix} |\n➽ *Total Block* : ${blocked.length}\n➽ *Aktif Sejak* : ${kyun(uptime)}\n➽ *Total Pengguna* : ${user.length} User\n➽ *Instagram* : https://www.instagram.com/manuuuriosss_\n\n➽ *Special Thanks To* :\n\n➽ Allah SWT \n➽ MhankBarBar\n➽ Nurutomo\n➽ Manurios`
					try {
					pp = await frhan.getProfilePicture(botNumber)
					} catch {
					pp = 'https://i.ibb.co/Wg3qpfT/1200397ddb31.jpg'}
					buffer = await getBuffer(pp)
					//buffer = await getBuffer(me.imgUrl)
					frhan.sendMessage(from, buffer, image, {quoted: mek, caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break 
				case 'totaluser':
					frhan.updatePresence(from, Presence.composing) 
					
					if (!isUser) return reply(mess.only.userB)
					if (!isOwner) return reply(mess.only.ownerB)    
					teks = `╭────「 *TOTAL USER ${name}* 」\n`
					no = 0
					for (let hehehe of user) {
						no += 1
						teks += `[${no.toString()}] @${hehehe.split('@')[0]}\n`
					}
					teks += `│+ Total Pengguna : ${user.length}\n╰──────⎿ *${name}* ⏋────`
					frhan.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": user}})
					break
				case 'blocklist':
					teks = 'List Block :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					frhan.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break 
				case 'banlist':
				ben = '```List Banned``` :\n'
					for (let banned of ban) {
						ben += `~> @${banned.split('@')[0]}\n`
					}
					ben += `Total : ${ban.length}`
					frhan.sendMessage(from, ben.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})
					break
				case 'ban':
					frhan.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
			        ban = mentioned
					reply(`berhasil banned : ${ban}`)
					break
				case 'unban':
					if (!isOwner)return reply(mess.only.ownerB)
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					reply(`Nomor wa.me/${bnnd} telah di unban!`)
					break
				case 'block':
				 frhan.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					frhan.blockUser (`${body.slice(7)}@c.us`, "add")
					frhan.sendMessage(from, `perintah Diterima, memblokir ${body.slice(7)}@c.us`,MessageType.text)
					break
				case 'unblock':
                    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
				    frhan.blockUser (`${body.slice(9)}@c.us`, "remove")
					frhan.sendMessage(from, `perintah Diterima, membuka blokir ${body.slice(9)}@c.us`,MessageType.text)
				    break 
				case 'readmore':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('teks nya mana om?')
					var kls = body.slice(9)
					var has = kls.split("/")[0];
					var kas = kls.split("/")[1];
					if (args.length < 1) return reply(mess.blank)
					frhan.sendMessage(from, `${has}${readMore}${kas}`, MessageType.text, {quoted: mek})
					break
				case 'resetlimit':
				if (!isOwner) return reply(mess.only.ownerB)
				var obj = []
				fs.writeFileSync('./database/json/limit.json', JSON.stringify(obj, null, '\t'))
				costum('_*LIMIT BERHASIL DIRESET TUNGGU SEBENTAR...*_', text, FarhanGans, FarhanGans2)
				costum('*BOT SEDANG RESTART ULANG*', text, FarhanGans, FarhanGans2)
				return process.send('reset')
				break
				case 'limit':
					if (!isUser) return reply(mess.only.userB)
					checkLimit(sender)
				break
				case 'ocr':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await frhan.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Foto aja gan Jangan Video')
					}
					await limitAdd(sender) 
					break 
				case 'stiker':
				case 's':
				case 'sticker':
						if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await frhan.downloadAndSaveMediaMessage(encmedia)
						if (isLimit(sender)) return reply(limitend(pushname2))
						reply(mess.wait)
						const ran= getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								frhan.sendMessage(from, buff, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await frhan.downloadAndSaveMediaMessage(encmedia)
						const ran= getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`\`\`\`Gagal, pada saat mengkonversi ${tipe} ke stiker\`\`\``)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								frhan.sendMessage(from, buff, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await frhan.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								buff = fs.readFileSync(ranw)
								frhan.sendMessage(from, buff, sticker, {quoted: mek})
							})
						})
					} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
					}
					await limitAdd(sender) 
					break
				case 'sfire':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					reply(mess.wait)
					donlot = await frhan.downloadAndSaveMediaMessage(ger)
					anu = await uploadimg(donlot, `${args[0] ? args[0] : Date.now()}.jpg`)
					sfire = `${anu.result.image}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://api-rull.herokuapp.com/api/photofunia/burning-fire?url=${sfire}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					exec(`webpmux -set exif ${addMetadata(':M̴̀̈́̆̈́̽̕a̴̡̲̤͛͂ń̶̍̄urios','Punya Manurios')} ${rano} -o ${rano}`, async (error) => {
					if (error) return reply(mess.error.stick)
					costum(fs.readFileSync(rano), sticker, FarhanGans, FarhanGans2)
					fs.unlinkSync(rano)
					})
					})
					} else {
					reply('Gunakan foto!')
					}
					break 
					case 'slide':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('*Textnya mana gan?*')
					reply(mess.wait)
					teks = body.slice(7)
						ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://api.vhtear.com/slidingtext?text=${teks}&apikey=${VthearApi}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					exec(`webpmux -set exif ${addMetadata(':M̴̀̈́̆̈́̽̕a̴̡̲̤͛͂ń̶̍̄urios','Punya Manurios')} ${rano} -o ${rano}`, async (error) => {
					if (error) return reply(mess.error.stick)
					frhan.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					})
					await limitAdd(sender) 
					break 
					case 'snobg':
 if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
 ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
 reply(mess.wait)
owgi = await  frhan.downloadAndSaveMediaMessage(ger)
anu = await uploadimg(owgi, `${args[0] ? args[0] : Date.now()}.jpg`)
 teks = `${anu.result.image}`
 ranp = getRandom('.png')
 rano = getRandom('.webp')
 anu1 = await fetchFxc7(`https://api.vhtear.com/removebgwithurl?link=${teks}&apikey=${VthearApi}`, {method: 'get'})
exec(`wget ${anu1.result.image} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
 if (err) return reply(mess.error.stick)
 nobg = fs.readFileSync(rano)
 frhan.sendMessage(from, nobg, sticker, {quoted: mek})
fs.unlinkSync(rano)
 })
 } else {
reply('Gunakan foto!')
 }
 break
					case 'strigger':
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply (mess.only.benned)
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(mess.wait)
					owgi = await  frhan.downloadAndSaveMediaMessage(ger)
					anu = await uploadimg(owgi, `${args[0] ? args[0] : Date.now()}.jpg`)
					teks = `${anu.result.image}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					exec(`webpmux -set exif ${addMetadata(':M̴̀̈́̆̈́̽̕a̴̡̲̤͛͂ń̶̍̄urios','Punya Manurios')} ${rano} -o ${rano}`, async (error) => {
					if (error) return reply(mess.error.stick)
					frhan.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					})
					} else {
					reply('Gunakan foto!')
					}
					await limitAdd(sender) 
					break 

				case '':
					if (!isStiker) return 
					if ((isMedia && !mek.message.videoMessage)) {
					hhhh = await frhan.downloadAndSaveMediaMessage(mek)
					ran = getRandom('.webp')
					await ffmpeg(`./${hhhh}`)
					.input(hhhh)
					.on('start', function (cmd) {
					})
					.on('error', function (err) {
					reply(mess.error.stick)
					})
					.on('end', function () {
					buff = fs.readFileSync(ran)
					costum(buff, sticker, FarhanGans, `*_AUTO STICKER BOT_*`)
					})
					.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
					.toFormat('webp')
					.save(ran)
					}
				break
				case 'swanted':
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply (mess.only.benned)
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(mess.wait)
					owgi = await frhan.downloadAndSaveMediaMessage(ger)
					anu = await uploadimg(owgi, `${args[0] ? args[0] : Date.now()}.jpg`)
					teks = `${anu.result.image}`
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					anu1 = `https://leyscoders-api.herokuapp.com/api/img/wanted?url=${teks}&apikey=freeKeY`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					exec(`webpmux -set exif ${addMetadata(':M̴̀̈́̆̈́̽̕a̴̡̲̤͛͂ń̶̍̄urios','Punya Manurios')} ${rano} -o ${rano}`, async (error) => {
					if (error) return reply(mess.error.stick)
					frhan.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					})
					} else {
					reply('Gunakan foto!')
					}
					await limitAdd(sender) 
					break 
				case 'swasted':
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply (mess.only.benned)
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(mess.wait)
					owgi = await  frhan.downloadAndSaveMediaMessage(ger)
					anu = await uploadimg(owgi, `${args[0] ? args[0] : Date.now()}.jpg`)
					teks = `${anu.result.image}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu2 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
					exec(`wget ${anu2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					exec(`webpmux -set exif ${addMetadata(':M̴̀̈́̆̈́̽̕a̴̡̲̤͛͂ń̶̍̄urios','Punya Manurios')} ${rano} -o ${rano}`, async (error) => {
					if (error) return reply(mess.error.stick)
					frhan.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					})
					} else {
					reply('Gunakan foto!')
					}
					await limitAdd(sender) 
				break 
				case 'gtav':
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply (mess.only.benned)
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
					reply(mess.wait)
					owgi = await frhan.downloadAndSaveMediaMessage(ted)
					tels = body.slice(6)
					anu = await uploadimg(owgi, `${args[0] ? args[0] : Date.now()}.jpg`)
					hehe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.result.image}`)
					frhan.sendMessage(from, hehe, image, {quoted:mek})
					} else {
					reply('Jangan tambah kan apapun pada command')
					}
					await limitAdd(sender) 
				break 
				case 'spelangi':
				case 'rainbow':
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply (mess.only.benned)
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(mess.wait)
					owgi = await  frhan.downloadAndSaveMediaMessage(ger)
					anu = await uploadimg(owgi, `${args[0] ? args[0] : Date.now()}.jpg`)
					teks = `${anu.result.image}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu3 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
					exec(`wget ${anu3} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					exec(`webpmux -set exif ${addMetadata(':M̴̀̈́̆̈́̽̕a̴̡̲̤͛͂ń̶̍̄urios','Punya Manurios')} ${rano} -o ${rano}`, async (error) => {
					if (error) return reply(mess.error.stick)
					frhan.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					})
					} else {
					reply('Gunakan foto!')
					}
					await limitAdd(sender) 
				break 
				case 'sepia':
					if (!isUser) return reply(mess.only.userB)
					
					if (isBanned) return reply (mess.only.benned)
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(mess.wait)
					owgi = await  frhan.downloadAndSaveMediaMessage(ger)
					anu = await uploadimg(owgi, `${args[0] ? args[0] : Date.now()}.jpg`)
					teks = `${anu.result.image}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu4 = `https://some-random-api.ml/canvas/sepia?avatar=${teks}`
					exec(`wget ${anu4} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					exec(`webpmux -set exif ${addMetadata(':M̴̀̈́̆̈́̽̕a̴̡̲̤͛͂ń̶̍̄urios','Punya Manurios')} ${rano} -o ${rano}`, async (error) => {
					if (error) return reply(mess.error.stick)
					frhan.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					})
					} else {
					reply('Gunakan foto!')
					}
					await limitAdd(sender) 
				break 
				case 'swasted':
					if (!isUser) return reply(mess.only.userB)
					
					if (isBanned) return reply (mess.only.benned)
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(mess.wait)
					owgi = await  frhan.downloadAndSaveMediaMessage(ger)
					anu = await uploadimg(owgi, `${args[0] ? args[0] : Date.now()}.jpg`)
					teks = `${anu.result.image}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu5 = `https://some-random-api.ml/canvas/red?avatar=${teks}`
					exec(`wget ${anu5} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					exec(`webpmux -set exif ${addMetadata(':M̴̀̈́̆̈́̽̕a̴̡̲̤͛͂ń̶̍̄urios','Punya Manurios')} ${rano} -o ${rano}`, async (error) => {
					if (error) return reply(mess.error.stick)
					frhan.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					})
					} else {
					reply('Gunakan foto!')
					}
					await limitAdd(sender) 
				break 
				case 'img2url':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				const encmediai = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
				const mediai = await frhan.downloadAndSaveMediaMessage(encmediai)
				const upload = await uploadimg(mediai, `${args[0] ? args[0] : Date.now()}.jpg`)
				console.log(upload)
				reply(`${upload.result.image}`)
				await limitAdd(sender)
				break
			case 'kalkulator':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n- Untuk Perkalian Menggunakan *\n- Untuk Pertambahan Menggunakan +\n- Untuk Pengurangan Mennggunakan -\n- Untuk Pembagian Menggunakan /`)
				mtk = `${body.slice(12)}`
				try {
				anu = await fetchFxc7(`https://api.vhtear.com/calculator?value=${mtk}&apikey=${VthearApi}`, {method: 'get'})
				frhan.sendMessage(from, `*${anu.result.data}*`, MessageType.text, {quoted: mek})
				} catch {
				reply(mess.error.bug)
				}
				await limitAdd(sender) 	
			break 
				case 'owner':
				cosProduct({displayname: "jeff", vcard: vcard}, MessageType.contact, FarhanGans, FarhanGans2)
				reply('wa.me/6283141926935')
				break
				
			case 'fitnah':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag/pesan/balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember/hai/hai juga`)
				var gh = body.slice(8)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
				var replace = gh.split("/")[0];
				var target = gh.split("/")[1];
				var bot = gh.split("/")[2];
				frhan.sendMessage(from, `${bot}`, MessageType.text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
			break

				case 'infogrup':
				if (isBanned) return reply(mess.only.benned)  
				 
				if (!isUser) return reply(mess.only.userB)
				frhan.updatePresence(from, Presence.composing)
				if (!isGroup) return reply(mess.only.group)
				try {
					ppUrl = await frhan.getProfilePicture(from)
					} catch {
					ppUrl = 'https://i.ibb.co/Gp4H47k/7dba54f7e250.jpg'
					}
					reply(mess.wait)
					buffer = await getBuffer(ppUrl)
					frhan.sendMessage(from, buffer, image, {quoted: mek, caption: `NAME : *${groupName}*\nMODE SIMI: ${Simihh}\nMODE WELCOME: ${Welcomee}\nMODE NSFW: ${Nsfww}\nMODE AUTO STICKER: ${autostickernya}\nMEMBER : *${groupMembers.length}*\nADMIN : *${groupAdmins.length}*\nDESK : ${groupDesc}`})
					break
				case 'testime':
					setTimeout( () => {
					frhan.sendMessage(from, 'Waktu habis:v', MessageType.text, {quoted: mek}) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					frhan.sendMessage(from, '5 Detik lagi', MessageType.text, {quoted: mek}) // ur cods
					}, 5000) // 1000 = 1s,
					setTimeout( () => {
					frhan.sendMessage(from, '10 Detik lagi', MessageType.text, {quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					break 
				case 'animecry':
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchFxc7(`https://tobz-api.herokuapp.com/api/cry?apikey=${TobzApi}`, {method: 'get'})
					if (!isUser) return reply(mess.only.userB)
					
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isBanned) return reply(mess.only.benned)
					if (!isGroup) return reply(mess.only.group)
					reply (mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						buffer = fs.readFileSync(rano)
						frhan.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
				case 'neonime':
					frhan.updatePresence(from, Presence.composing) 
					data = await fetchFxc7(`https://api.vhtear.com/neonime_search?query=${body.slice(9)}&apikey=${VthearApi}`, {method: 'get'})
					if (!isUser) return reply(mess.only.userB)
					
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isBanned) return reply(mess.only.benned)
					if (!isGroup) return reply(mess.only.group)
					reply(mess.wait)
					teks = '#############################\n'
					for (let i of data.result) {
						teks += `*Title* : ${i.title}\n*link* : ${i.link}\n\n : ${i.desk}\n###########################\n`
					}
					reply(teks.trim())
					await limitAdd(sender) 
					break   
				case 'animehug':
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchFxc7(`https://tobz-api.herokuapp.com/api/hug?apikey=${TobzApi}`, {method: 'get'})
					if (!isUser) return reply(mess.only.userB)
					
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isBanned) return reply(mess.only.benned)
					if (!isGroup) return reply(mess.only.group)
					reply(mess.wait)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						buffer = fs.readFileSync(rano)
						frhan.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
				case 'linkgrup':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (!isGroup) return reply(mess.only.group)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				linkgc = await frhan.groupInviteCode (from)
				yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				frhan.sendMessage(from, yeh, MessageType.text, {quoted: mek})
				break
				case 'hidetag':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					var value = body.slice(9)
					var group = await frhan.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					frhan.sendMessage(from, options, MessageType.text)
					break 
					case 'sticktag':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isGroup) return reply(mess.only.group)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				anu  = body.slice(10)
				var group = await frhan.groupMetadata(from)
				var member = group['participants']
				var mem = []
				member.map( async adm => {
				mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				result = fs.readFileSync(`./database/sticker/${anu}.webp`)
				frhan.sendMessage(`${anu}`, result, sticker, { contextInfo: { "mentionedJid": mem }})
				break
				case 'gantengcek':
				case 'cekganteng':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					ganteng = body.slice(12)
					const gan =['10%','30%','20%','40%','50%','60%','70%','62%','74%','83%','97%','100%','29%','94%','75%','82%','41%','39%']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					frhan.sendMessage(from, 'Pertanyaan : Cek Ganteng Bang *'+ganteng+'*\n\nJawaban : '+ teng +'', MessageType.text, { quoted: mek })
					break
				case 'cantikcek':
				case 'cekcantik':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					cantik = body.slice(11)
					if (args.length < 1) return reply('Yg Mau dicek Siapa Kak??')
					const can =['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya Kaka👍','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai Cantik🐊','70% Hai Ukhty🐊','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty🐊','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
					const tik = can[Math.floor(Math.random() * can.length)]
					frhan.sendMessage(from, 'Pertanyaan : Cantik Cek Kakak *'+cantik+'*\n\nPersen Kecantikan : '+ tik +'', MessageType.text, { quoted: mek })
					break
				  case 'ownergrup':
				  frhan.updatePresence(from, Presence.composing) 
				  options = {
				  text: `Owner Group ini adalah : wa.me/${from.split("-")[0]}`,
				  contextInfo: { mentionedJid: [from] }
				  }
				  frhan.sendMessage(from, options, MessageType.text, { quoted: mek } )
				  break
				case 'leave': 
				if (!isGroup) return reply(mess.only.group)
				if (!isOwner) return reply(mess.only.ownerB)
				anu = await frhan.groupLeave(from, `Bye All Member *${groupMetadata.subject}*`, groupId)
				break
				case 'setname':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				frhan.groupUpdateSubject(from, `${body.slice(9)}`)
				frhan.sendMessage(from, `\`\`\`✓Sukses Mengganti Nama Group Menjadi\`\`\` *${body.slice(9)}*`, MessageType.text, {quoted: mek})
			break
			case 'setdesc':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				frhan.groupUpdateDescription(from, `${body.slice(9)}`)
				frhan.sendMessage(from, `\`\`\`✓Sukses Mengganti Deskripsi Group\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, MessageType.text, {quoted: mek})
			break
			case 'tts':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return frhan.sendMessage(from, 'Kode bahasanya mana gan?\n Kalo Gatau Kode Bahasanya Apa Aja Ketik Saja *${prefix}bahasa*', MessageType.text, {quoted: mek})
				const gtts = require('./lib/gtts')(args[0])
				if (args.length < 2) return frhan.sendMessage(from, 'Textnya mana gan?', MessageType.text, {quoted: mek})
				dtt = body.slice(8)
				ranm = getRandom('.mp3')
				rano = getRandom('.ogg')
				dtt.length > 600
				? reply('Textnya kebanyakan gan')
				: gtts.save(ranm, dtt, function() {
				exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
				fs.unlinkSync(ranm)
				buff = fs.readFileSync(rano)
				if (err) return reply('Gagal gan:(')
				reply(mess.wait)
				frhan.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
				fs.unlinkSync(rano)
				})
				})
				await limitAdd(sender) 
			break 
				case 'translate':
				if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return frhan.sendMessage(from, 'Kode Bahasanya???', MessageType.text, {quoted: mek})
				if (args.length < 2) return frhan.sendMessage(from, 'Text Yg Mau Di translate??', MessageType.text, {quoted: mek})
				ts = body.slice(11)
				try {
				kode = ts.split("/")[0]
				teks = ts.split("/")[1]
				const tsnya = await translate(`${teks}`, {to: `${kode}`});
				frhan.sendMessage(from, tsnya, MessageType.text, {quoted: mek})
				} catch {
				reply(mess.error.bug)
				}
				await limitAdd(sender)
			break 
			case 'setpp':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				media = await frhan.downloadAndSaveMediaMessage(mek)
				await frhan.updateProfilePicture (from, media)
				reply(mess.wait)
				reply(`\`\`\`✓Sukses Mengganti Profil Group\`\`\` *${groupMetadata.subject}*`)
			break
			case 'apakah':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				apakah = body.slice(1)
				const apakahh = ["Ya","Tidak","Ga tau","ga mungkin","bisa jadi","mungkin"]
				const kah = apakahh[Math.floor(Math.random() * apakahh.length)]
				frhan.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, MessageType.text, { quoted: mek })
			break 
			case 'rate':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				rate = body.slice(1)
				ratee = ["100%","95%","90%","85%","80%","75%","70%","65%","60%","55%","50%","45%","40%","35%","30%","25%","20%","15%","10%","5%"]
				const te = ratee[Math.floor(Math.random() * ratee.length)]
				frhan.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'', MessageType.text, { quoted: mek })
			break 
			case 'watak':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				watak = body.slice(1)
				wa =["penyayang","pemurah","Pemarah","Pemaaf","Penurut","Baik","baperan","Baik Hati","penyabar","Uwu","top deh, pokoknya","Suka Membantu"]
				const tak = wa[Math.floor(Math.random() * wa.length)]
				frhan.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, MessageType.text, { quoted: mek })
			break 
			case 'hobby':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				hobby = body.slice(1)
				hob =["ngeue sapi","ngeue kambing","Memasak","Membantu Atok","Mabar","Nobar","Sosmed an","Membantu Orang lain","Nonton Anime","Nonton Drakor","Naik Motor","Nyanyi","Menari","Bertumbuk","Menggambar","Foto fotoan Ga jelas","Maen Game","Berbicara Sendiri"]
				const by = hob[Math.floor(Math.random() * hob.length)]
				frhan.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, MessageType.text, { quoted: mek })
			break 
			case 'bisakah':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				bisakah = body.slice(1)
				const bisakahh = ["Bisa","Tidak Bisa","Ga tau","mungkin"]
				const keh = bisakahh[Math.floor(Math.random() * bisakahh.length)]
				frhan.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, MessageType.text, { quoted: mek })
			break 
			case 'kapankah':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				kapankah = body.slice(1)
				const kapankahh = ["1 Minggu lagi","1 Bulan lagi","1 Tahun lagi","100 tahun lagi","gatau","2030","1 Jam lagi","1 Menit lagi"]
				const koh = kapankahh[Math.floor(Math.random() * kapankahh.length)]
				frhan.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, MessageType.text, { quoted: mek })
			break 
			case 'truth':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				anu = await fetchFxc7(`https://xptnbotapinew.herokuapp.com/?truth&apikey=xptn`, {method: 'get'})
				ttrth = `${anu.Dare}`
				truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
				frhan.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
				await limitAdd(sender) 
			break 
				case 'dare':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				anu = await fetchFxc7(`https://xptnbotapinew.herokuapp.com/?dare&apikey=xptn`, {method: 'get'})
				der = `${anu.Dare}`
				tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
				frhan.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
				await limitAdd(sender) 
			break 
			case 'speed':
			case 'ping':
			case 'stat':
			personal = frhan.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net') && !v.read_only && v.message).map(v => v.jid)
			groups = frhan.chats.array.filter(v => v.jid.endsWith('g.us') && !v.read_only && v.message).map(v => v.jid)
			if (!isUser) return reply(mess.only.userB)
			if (isBanned) return reply(mess.only.benned)
			const timestamp = speed()
			const totalchat = await frhan.chats.all()
			const latensi = speed() - timestamp
			
			cosProduct(monospace(`LOADED ALL MESSAGE\n\n- [ ${groups.length} ] Group Chats\n- [ ${personal.length} ] Personal Chats\n- [ ${totalchat.length} ] Total Chats\n- [ ${frhan.user.phone.device_manufacturer} ] HANDPHONE\n- [ ${frhan.user.phone.device_model} ] MODEL PHONE\n- [ ${RAM} ] RAM\n- [ ${frhan.user.phone.wa_version} ] WA VERSION\n- [ ${frhan.browserDescription[0]} ] SERVER\n- [ ${frhan.browserDescription[2]} ] VERSION SERVER\n\nSpeed: [ ${latensi.toFixed(4)} ] _Seconds`), MessageType.text, FarhanGans, FarhanGans2)
			break
			case 'tagme':
				if (isBanned) return reply(mess.only.benned)
				
				if (!isUser) return reply(mess.only.userB)
				await costum(`@${sender.split('@')[0]}`, MessageType.text, FarhanGans, `@${sender.split('@')[0]}`)
				break
			case 'lirik':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(mess.wait)
				teks = body.slice(7)
				try {
				anu = await fetchFxc7(`http://scrap.terhambar.com/lirik?word=${teks}`, {method: 'get'})
				await costum(monospace('Lirik dari lagu '+teks+' adalah :\n\n'+anu.result.lirik), MessageType.text, FarhanGans, FarhanGans2)
				} catch { 
				reply(mess.error.bug)
				}
				await limitAdd(sender) 
			break 
				case 'report':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					
					const pesan = body.slice(8)
					if (pesan.length > 300) return frhan.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', MessageType.text, {quoted: mek})
					var nomor = mek.participant
					const teks1 = `*[REPORT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`
					var options = {
					text: teks1,
					contextInfo: {mentionedJid: [nomor]},
					}
					frhan.sendMessage(OwnerNumber +`@s.whatsapp.net`, options, MessageType.text, {quoted: mek})
					reply('Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi.')
				break
			case 'memeindo':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(mess.wait)
				try {
				memein = await fetchFxc7(`https://api.zeks.xyz/api/memeindo?apikey=${ZeksApi}`, {method: 'get'})
				buffer = await getBuffer(memein.result)
				frhan.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
				} catch {
				reply(mess.error.bug)
				}
				await limitAdd(sender)
			break 
			case 'meme':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(mess.wait)
				try {
				meme = await fetchFxc7(`https://some-random-api.ml/meme`)
				buffer = await getBuffer(meme.result)
				frhan.sendMessage(from, buffer, image, {quoted: mek, caption: `${meme.caption}`})
				} catch {
				reply(mess.error.bug)
				}
				await limitAdd(sender)
			break 
				case 'ssweb':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Urlnya mana gan?')
				try {
				teks = `${body.slice(7)}`
				reply(mess.wait)
				buff = await getBuffer(`https://api.vhtear.com/ssweb?link=${teks}&type=pc&apikey=${VthearApi}`, {method: 'get'})
				frhan.sendMessage(from, buff, image, {quoted: mek})
				} catch {
				reply (mess.error.bug)
				}
				await limitAdd(sender)
			break 
			case 'nsfwloli':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isNsfw) return reply(' *FALSE* ')
				res = await fetchFxc7(`https://api.vhtear.com/randomloli&apikey=${VthearApi}`, {method: 'get'})
				buffer = await getBuffer(res.result.result)
				frhan.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
				} catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(' *ERROR* ')
				}
				await limitAdd(sender)
			break 
			case 'nsfwsolo':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isNsfw) return reply(' *FALSE* ')
				res = await fetchFxc7(`http://api.lolhuman.xyz/api/random2/solo?apikey=${LolApi}`, {method: 'get'})
				buffer = await getBuffer(res.result)
				frhan.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
				} catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(' *ERROR* ')
				}
				await limitAdd(sender)
			break 
			case 'nsfweron':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isNsfw) return reply(' *FALSE* ')
				res = await fetchFxc7(`http://api.lolhuman.xyz/api/random2/eron?apikey=${LolApi}`, {method: 'get'})
				buffer = await getBuffer(res.result)
				frhan.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
				} catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(' *ERROR* ')
				}
				await limitAdd(sender)
			break 
				case 'nsfwlewd':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isNsfw) return reply(' *FALSE* ')
				res = await fetchFxc7(`http://api.lolhuman.xyz/api/random2/lewd?apikey=${LolApi}`, {method: 'get'})
				buffer = await getBuffer(res.result)
				frhan.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
				} catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(' *ERROR* ')
				}
				await limitAdd(sender)
			break 
			case 'nsfwyuri':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isNsfw) return reply(' *FALSE* ')
				res = await fetchFxc7(`http://api.lolhuman.xyz/api/random2/yuri?apikey=${LolApi}`, {method: 'get'})
				buffer = await getBuffer(res.result)
				frhan.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
				} catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(' *ERROR* ')
				}
				await limitAdd(sender)
			break 
				case 'nsfwecchi':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isNsfw) return reply(' *FALSE* ')
				res = await fetchFxc7(`http://api.lolhuman.xyz/api/random/nsfw/ecchi?apikey=${LolApi}`, {method: 'get'})
				buffer = await getBuffer(res.result)
				frhan.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
				} catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply(' *ERROR* ')
				}
				await limitAdd(sender)
			break 
				case 'nsfwparadise':
				    try {
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchFxc7(`http://api.lolhuman.xyz/api/random/nsfw/hentaiparadise?apikey=${LolApi}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						frhan.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender)
					break 
				case 'nsfwbigtt':
				    try {
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchFxc7(`http://api.lolhuman.xyz/api/random/nsfw/biganimetiddies?apikey=${LolApi}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						frhan.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender)
					break 
				case 'nsfwclasic':
				    try {
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchFxc7(`http://api.lolhuman.xyz/api/random2/classic?apikey=${LolApi}`, {method: 'get'})
						buffer = await getBuffer(res.result.result)
						frhan.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender)
					break 
				case 'nsfwcum':
				    try {
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchFxc7(`http://api.lolhuman.xyz/api/random2/cum_jpg?apikey=${LolApi}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						frhan.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender)
					break 
				case 'nsfwpussy':
				    try {
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchFxc7(`http://api.lolhuman.xyz/api/random2/pussy?apikey=${LolApi}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						frhan.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender)
					break 
			    case 'nsfwblowjob':
				    try {
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchFxc7(`https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=${TobzApi}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						frhan.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender)
					break 
			    case 'nsfwneko':
				    try {
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchFxc7(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=${TobzApi}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						frhan.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender) 
					break 
				case 'nsfwtrap':
				    try {
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchFxc7(`https://tobz-api.herokuapp.com/api/nsfwtrap?apikey=${TobzApi}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						frhan.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender) 
					break 
				case 'hentai':
				    try {
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (!isNsfw) return reply(' *FALSE* ')
						res = await fetchFxc7(`https://tobz-api.herokuapp.com/api/hentai?apikey=${TobzApi}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						frhan.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender) 
					break 
				case 'chord':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(mess.wait)
				try {
					if (args.length < 1) return reply('Mau Nyari Chord Lagu Apa??')
					tels = body.slice(7)
					anu = await fetchFxc7(`https://alfians-api.herokuapp.com/api/chord?q=${tels}`, {method: 'get'})
					frhan.sendMessage(from, `${anu.result}`, MessageType.text, {quoted: mek})
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break 
				case 'infogempa':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					try {
					anu = await fetchFxc7(`https://tobz-api.herokuapp.com/api/infogempa?apikey=${TobzApi}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buff = await getBuffer(anu.map)
					reply(mess.wait)
					gempa = `•Lokasi *${anu.lokasi}*\n• Waktu: *${anu.waktu}* \n• Potensi: *${anu.potensi}*\n• Magnitude: *${anu.magnitude}*\n• Kedalaman: *${anu.kedalaman}*\n• Koordinat: *${anu.koordinat}*`
					frhan.sendMessage(from, buff, image, {quoted: mek, caption: gempa})
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
				break 

			case 'animekiss':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchFxc7(`https://tobz-api.herokuapp.com/api/kiss?apikey=${TobzApi}`, {method: 'get'})
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						buffer = fs.readFileSync(rano)
						frhan.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 

				case 'anjing':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchFxc7(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(mess.wait)
					try {
					n = JSON.parse(JSON.stringify(anu));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					frhan.sendMessage(from, pok, image, { quoted: mek })
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
				break 
				case 'resepmasakan':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					try {
					anu = await fetchFxc7(`https://api.vhtear.com/resepmasakan?query=${body.slice(14)}&apikey=${VthearApi}`, {method: 'get'})
					hasilresep = `*${anu.result.title}*\n${anu.result.desc}\n\n*Untuk Bahan²nya*\n${anu.result.bahan}\n\n*Dan Untuk Tutorialnya*\n${anu.result.cara}`
					reply(mess.wait)
					buff = await getBuffer(anu.result.image)
					frhan.sendMessage(from, buff, image, {quoted: mek, caption: hasilresep})
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
				break 
				case 'shopee':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					try {
					anu = await fetchFxc7(`https://api.vhtear.com/shopee?query=${body.slice(8)}&count=1&apikey=${VthearApi}`, {method: 'get'})
					shop = anu.result.item[0]
					buff = await getBuffer(shop.image_cover)
					hasil = `*• Nama Produk:* ${shop[0].nama}\n*• Harga:* ${shop.harga}\n*• Terjual:* ${shop.terjual}\n\n${shop.description}`
					frhan.sendMessage(from, buff, image, {quoted: mek, caption: hasil.trim()})
					} catch (e) {
					  console.log(e)
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
				break 
				case 'drakor':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					try {
					anu = await fetchFxc7(`https://tobz-api.herokuapp.com/api/youwatch?q=${body.slice(8)}&apikey=${TobzApi}`, {method: 'get'})
					hasil = ''
					for (let drak of anu.result){
	hasil += `• *Judul:* ${drak.title}\n• *Tayang:* ${drak.type}\n• *Penonton:* ${drak.views}\n• *Rilis:* ${drak.year}\n• *Country:* ${drak.country}\n• *Url:* ${drak.link}\n\n\n`
					}
					reply(hasil.trim())
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
				break 
				case 'cersex':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					try {
					anu = await fetchFxc7(`https://api.vhtear.com/cerita_sex&apikey=${VthearApi}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					sex = await getBuffer(anu.result.image)
					reply (mess.wait)
					cerita = `• *Judul:* ${anu.result.judul}\n\n${anu.result.cerita}`
					frhan.sendMessage(from, sex, image, {quoted: mek, caption: cerita})
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
				break 
				case 'cerpen':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					try {
					anu = await fetchFxc7(`http://api.lolhuman.xyz/api/cerpen?apikey=${LolApi}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					sex = await getBuffer(anu.result.image)
					reply (mess.wait)
					cerita = `• *Judul:* ${anu.result.title}\n• *Penulis:* ${anu.result.creator}\n\n${anu.result.cerpen}`
					frhan.sendMessage(from, cerita, MessageType.text, {quoted: mek})
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
				break 
				case 'randomkpop':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					try {
					anu = await fetchFxc7(`http://api.lolhuman.xyz/api/random/exo?apikey=${LolApi}`, {method: 'get'})
					buff = await getBuffer(anu.result)
					frhan.sendMessage(from, buff, image, {quoted: mek})
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
				break 
				case 'puisiimg':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					try {
					pus = await getBuffer(`https://api.vhtear.com/puisi_image&apikey=${VthearApi}`, {method: 'get'})
					frhan.sendMessage(from, pus, image, {quoted: mek})
					} catch {
					reply(mess.error.bug)
					} 
					await limitAdd(sender) 
				break 
				case 'playstore':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (isLimit(sender)) return reply(ind.limitend(pusname)) 
					try {
					ps = `${body.slice(11)}`
					anu = await fetchFxc7(`https://api.vhtear.com/playstore?query=${ps}&apikey=${VthearApi}`, {method: 'get'})
					store = '======================\n'
					for (let ply of anu.result){
					store += `• *Nama Apk:* ${ply.title}\n• *ID:* ${ply.app_id}\n• *Developer:* ${ply.developer}\n• *Deskripsi:* ${ply.description}\n• *Link Apk:* https://play.google.com/${ply.url}\n=====================\n`
					}
					reply(store.trim())
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
				break 
				case 'google':
				if (!isUser) return reply(mess.only.userB)
				if (isBanned) return reply(mess.only.benned)
				reply(mess.wait)
				googleQuery = args.join(' ')
				if (args.length < 1) return reply('YANG MAU DICARI APAAN?')
				if(googleQuery == undefined || googleQuery == ' ') return reply(`*Hasil Pencarian : ${googleQuery}* tidak ditemukan`)
				googleIt({ 'query': googleQuery }).then(results => {
				let vars = `_*Hasil Pencarian : ${googleQuery}*_\n`
				for (let i = 0; i < results.length; i++) {
				vars +=  `\n═════════════════\n\n*Judul* : ${results[i].title}\n\n*Deskripsi* : ${results[i].snippet}\n\n*Link* : ${results[i].link}\n\n`
				}
				reply(vars)
				limitAdd(sender)
				}).catch(e => {
				console.log(e)
				reply('*_ERROR_*')
				})
				break
				case 'pornhub':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					try {
					reply(mess.wait)
					if (args.length < 1) return reply('teksnya mana gan?')
					teks = body.slice(9)
					anu = await fetchFxc7(`https://api.arugaz.my.id/api/media/pornhub/search?query=${teks}`, {method: 'get'})
					teks = `===============\n`
					for (let bokep of anu.result) {
					teks += `Title: ${bokep.title}\nAktor: ${bokep.author}\nViewers: *${bokep.views}*\nDurasi: ${bokep.duration}\nLink: ${bokep.link}\n===============\n`
					}
					reply(teks.trim())
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
				break  
				case 'nekopoi':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					try {
					reply(mess.wait)
					if (args.length < 1) return reply('teksnya mana gan?')
					teks = body.slice(9)
					anu = await fetchFxc7(`https://api.vhtear.com/nekosearch?query=${teks}&apikey=${VthearApi}`, {method: 'get'})
					teks = `===============\n`
					for (let neko of anu.result) {
					teks += `Title: ${neko.title}\nDeskripsi: ${neko.detail}\n===============\n`
					}
					reply(teks.trim())
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
				break  
				case 'xvideos':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					try {
					reply(mess.wait)
					if (args.length < 1) return reply('teksnya mana gan?')
					anu = await fetchFxc7(`https://api.arugaz.my.id/api/media/xvideo/search?query=${body.slice(9)}`, {method: 'get'})
					teks = `===============\n`
					for (let b of anu.result) {
					teks += `• Title: ${b.title}\n• Info: ${b.info}\n• Link: ${b.link}\n===============\n`
					}
					reply(teks.trim())
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
				break 
				case 'xnxx':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					try { 
					reply(mess.wait)
					if (args.length < 1) return reply('mau nyari apa?')
					anu = await fetchFxc7(`https://api.arugaz.my.id/api/media/xnxx/search?query=${body.slice(6)}`, {method: 'get'})
					teks = `===============\n`
					for (let xnxx of anu.result) {
					teks += `• Title: ${xnxx.title}\n• Info: ${xnxx.info}\n• Link: ${xnxx.link}\n===============\n`
					}
					reply(teks.trim())
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
				break 

				case 'fb':
				  frhan.updatePresence(from, Presence.composing)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				try {
				reply(mess.wait)
					if (args.length < 1) return reply('Urlnya mana gan?')
					if (!isUrl(args[0]) && !args[0].includes('www.facebook.com')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchFxc7(`https://mhankbarbar.moe/api/epbe?url=${args[0]}&apiKey=${BarBarApi}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					frhan.sendMessage(from, '[ WAIT ] Sedang Diproses\n\nLinknya Only Google Gan Biar Bisa Didownload', MessageType.text, {quoted: mek})
					efbe = `Title: *${anu.title}*\nSize: *${anu.filesize}\nDipublikasikan Pada: *${anu.published}*`
					tefbe = await getBuffer(anu.thumb)
					frhan.sendMessage(from, tefbe, image, {quoted: mek, caption: efbe})
					buffer = await getBuffer(anu.result)
					frhan.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek, caption: 'Nih Gan'})
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break 

				case 'instastory':
				if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
				if (args.length < 1) return reply('username??')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				try {
				instor = `${body.slice(12)}`
				anu = await fetchFxc7(`https://api.vhtear.com/igstory?query=${instor}&apikey=${VthearApi}`, {method: 'get'})
				insta = '=========================\n'
				for (let i of anu.result.story.itemlist) {
				insta += `• *User:* ${anu.result.owner_username}\n• *Type:* ${i.type}\n• *Link:* ${i.urlDownload}\n=========================\n`
				}
				reply(insta.trim())
				} catch {
					reply(mess.error.bug)
					}
				await limitAdd(sender)
				break
			case 'hekerbucin':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				hasil = hekerbucin[Math.floor(Math.random() * (hekerbucin.length))]
				frhan.sendMessage(from, '*'+hasil+'*', MessageType.text, {quoted: mek})
				await limitAdd(sender)
				break 

				case 'ytsearch':
				  try {
					if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Yang mau di cari apa??')
					anu = await fetchFxc7(`http://api.lolhuman.xyz/api/ytsearch?apikey=${LolApi}&query=${body.slice(10)}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = '=======================\n'
					for (let i of anu.result) {
						teks += `*Title* : ${i.title}\n*Id* : https://youtu.be/${i.videoId}\n*Published* : ${i.published}\n*Views* : ${i.views}\n======================\n`
					}
					reply(teks.trim())
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender)
					break
				case 'tiktok':
				if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Urlnya mana gan?')
					if (!isUrl(args[0]) && !args[0].includes('vt')) return reply(mess.error.Iv)
					try {
					reply(mess.wait)
					buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/tiktokwm?apikey=${LolApi}&url=${args[0]}`)
					costum(buffer, video, FarhanGans, mess.success)
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender)
					break 
					case 'tiktoknowm': 
					  try {
					if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Urlnya mana sayang?')
				if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.lv)
					 anu = await fetchFxc7(`http://lolhuman.herokuapp.com/api/tiktok?apikey=${LolApi}&url=${args[0]}`, {method: 'get'})
					 reply(mess.wait)
					captionNoWm = `${anu.result.title}\n\n${anu.result.description}\n\n\n${anu.result.keywords}`
					buffer = await getBuffer(anu.result.link)
					frhan.sendMessage(from, buffer, video, {quoted: mek, caption: captionNoWm})
					  } catch {
					reply(mess.error.bug)
					  }
				break
				case 'film':
				if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Mau Cari Film Apa?')
				try {
				reply(mess.wait)
				anu = await fetchFxc7(`http://www.omdbapi.com/?s=${body.slice(6)}&plot=full&apikey=56b1b6f0&r=json`, {method: 'get'})
				hasil = '=========================\n'
				for(let film of anu.Search) {
				hasil += `• *Title:* ${film.Title}\n• *Rilis Tahun:* ${film.Year}\n• *Type:* ${film.Type}\n• *Link:* https://m.imdb.com/title/${film.imdbID}\n=========================\n`
				}
				reply(hasil.trim())
				} catch {
					reply(mess.error.bug)
					}
				await limitAdd(sender) 
					break 
				case 'tiktokstalk':
					try {
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return frhan.sendMessage(from, 'Usernamenya mana gan?', MessageType.text, {quoted: mek})
					let { user, stats } = await tiktod.getUserProfileInfo(args[0])
					reply(mess.wait)
					teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Menyukai* : ${stats.heart}\n`
					buffer = await getBuffer(user.avatarLarger)
					frhan.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
					console.log(`Error :`, color(e,'red'))
					reply('Kemungkinan username tidak valid')
					}
					await limitAdd(sender) 
					break  
					case 'kodepos':
						if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Example: !kodepos Banyuwangi')
					anu = await fetchFxc7(`https://videfikri.com/api/kodepos/?query=${body.slice(9)}`)
					reply(mess.wait)
					hasil = `Sukses ✓\n Provinsi: ${anu.result.provinsi}\nKecamatan: ${anu.result.kota}\nKecamatan: ${anu.result.kecamatan}\nKode Pos: ${anu.result.kodepos}`
					frhan.sendMessage(from, monospace(hasil), MessageType.text, {quoted: mek})
					await limitAdd(sender)
					break
//creator
				case 'tahta':
				case 'harta':
					if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Harta Tahta Apa??')
					anu = body.slice(7)
					buffer = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${body.slice(7)}&apikey=${ZeksApi}`, {method: 'get'})
					reply(mess.wait)
					frhan.sendMessage(from, buffer, image, {quoted: mek, caption: `*_HARTA TAHTA ${anu.toUpperCase()}_*`})
					await limitAdd(sender)
					break
				case 'nulis':
				frhan.updatePresence(from, Presence.composing)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`${name} Harus Nulis Apa Kak??`)
				reply(mess.wait)
				teks = `${body.slice(7)}`
			const	nama = teks.split("/")[0];
			const	kelas = teks.split("/")[1];
			const	textnya = teks.split("/")[2];
					buff = `https://api.zeks.xyz/api/magernulis?nama=${nama}&kelas=${kelas}&text=${textnya}&tinta=4`
					voss = await fetch(buff)	
					ftype = require('file-type')	
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
					costum(await getBuffer(buff), image, FarhanGans, mess.success)
					} else {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break 
				case 'textpro':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) {
						return reply('Pilih themenya gan, 1 - 162')
					} else if (args[0].toLowerCase() === 'list') {
						teks = await fetchText('https://mhankbarbar.moe/api/textpro/listtheme')
						teks = teks.replace(/<br>/g, '\n')
						return reply(teks)
					} else if (args.length < 2) {
						return reply('Teksnya juga dong gan')
					}
					reply(mess.wait)
					anu = `https://mhankbarbar.moe/api/textpro?pack=${args[0]}&text=${body.slice(8+args[0].length+1)}&apiKey=${BarBarApi}`
					voss = await fetch(anu)	
					ftype = require('file-type')	
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
					costum(await getBuffer(anu), image, FarhanGans, FarhanGans2)
					} else {
						reply('Terjadi kesalahan, silahkan pilih theme lain')
					}
					break
				case 'ephoto':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) {
						return reply('Pilih themenya gan, 1 - 216')
					} else if (args[0].toLowerCase() === 'list') {
						teks = await fetchText('https://mhankbarbar.moe/api/ephoto/listtheme')
						teks = teks.replace(/<br>/g, '\n')
						return reply(teks)
					} else if (args.length < 2) {
						return reply('Teksnya juga dong gan')
					}
					reply(mess.wait)
					anu = `https://mhankbarbar.moe/api/ephoto?pack=${args[0]}&text=${body.slice(8+args[0].length+1)}&apiKey=${BarBarApi}`
					voss = await fetch(anu)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					//console.log(vuss)
					if (vuss !== undefined) {
					costum(await getBuffer(anu), image, FarhanGans, FarhanGans2)
					} else {
						reply('Terjadi kesalahan, silahkan pilih theme lain')
					}
					break
			case 'ttp':
			 if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply('*Textnya mana om?*')
ranp = getRandom('.png')
rano = getRandom('.webp')
teks = body.slice(5).trim()
anu = await fetchFxc7(`https://mhankbarbar.moe/api/text2image?text=${teks}&apiKey=${BarBarApi}`, {method: 'get'})
anu1 = anu.result
if (anu.error) return reply(anu.error)
exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
	fs.unlinkSync(ranp)
	if (err) return reply(mess.error.stick)
exec(`webpmux -set exif ${addMetadata(':M̴̀̈́̆̈́̽̕a̴̡̲̤͛͂ń̶̍̄urios','Punya Manurios')} ${rano} -o ${rano}`, async (error) => {
	if (error) return reply(mess.error.stick)
  bufferhgf = fs.readFileSync(rano)
  frhan.sendMessage(from, bufferhgf, sticker, {quoted: mek})
  fs.unlinkSync(rano)
})
})
break
				case 'semoji':
				  try {
				if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('emoji??')
					reply(mess.wait)
					emo = args[0]
					teks = encodeURIComponent(emo)
					anu = await getBuffer(`https://mhankbarbar.moe/api/emoji2png?emo=${teks}&apiKey=${BarBarApi}`, {method: 'get'})
					frhan.sendMessage(from, anu, image, {quoted: mek})
					} catch (err) {
					reply(mess.error.bug)
					console.log(err)
					}
					await limitAdd(sender)
					break 
case 'attp':
  if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
    teks = body.slice(6)
    anu = await getBuffer (`https://api.xteam.xyz/attp?file&text=${teks}`, {method: 'get'})
    frhan.sendMessage(from, anu, sticker, {quoted: mek})
    await limitAdd(sender)
    break
				case 'cgame':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(mess.wait)
					buff = `https://api.vhtear.com/gamelogo?text=${body.slice(7)}&apikey=${VthearApi}`
					voss = await fetch(buff)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
					costum(await getBuffer(buff), image, FarhanGans, ` ~ Game Logo Text Maker`)
					} else {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break 
				case 'tolol':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(mess.wait)
					buff = `http://api.lolhuman.xyz/api/toloserti?apikey=${LolApi}&name=${body.slice(7)}`
					voss = await fetch(buff)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
					costum(await getBuffer(buff), image, FarhanGans, ` ~ Si ${args[0]} Emang Tolol:v`)
					} else {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break 
				case 'fbgoldbutton':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(mess.wait)
					buff = `https://naufalhoster.xyz/textmaker/fb_golden_play_button?apikey=Acilbotwa&text=${body.slice(14)}`
					voss = await fetch(buff)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
					costum(await getBuffer(buff), image, FarhanGans, ` ~ Facebook Gold Button Maker`)
					} else {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break 
					case 'ytgoldbutton':
					if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(mess.wait)
					buff = `https://api.zeks.xyz/api/gplaybutton?text=${body.slice(14)}&apikey=${ZeksApi}`
					voss = await fetch(buff)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
					costum(await getBuffer(buff), image, FarhanGans, ` ~ Youtube Gold Button Maker`)
					} else {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break 
				case 'cbpink':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(mess.wait)
					buff = `https://api.vhtear.com/blackpinkicon?text=${args[0]}&apikey=${VthearApi}`
					voss = await fetch(buff)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
					costum(await getBuffer(buff), image, FarhanGans, ` ~ Black Pink Text Maker`)
					} else {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break 
				case 'cparty':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(mess.wait)
					buff = `https://api.vhtear.com/partytext?text=${args[0]}&apikey=${VthearApi}`
					voss = await fetch(buff)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
					costum(await getBuffer(buff), image, FarhanGans, ` ~ Party Text Maker`)
					} else {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break 
				case 'cstyle':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(mess.wait)
					buff = `https://api.vhtear.com/stylelogo?text=${args[0]}&apikey=${VthearApi}`
					voss = await fetch(buff)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
					costum(await getBuffer(buff), image, FarhanGans, ` ~ Style Logo Text Maker`)
					} else {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break 
				case 'cglass':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(mess.wait)
					buff = `https://api.vhtear.com/wetglass?text=${args[0]}&apikey=${VthearApi}`
					voss = await fetch(buff)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
					costum(await getBuffer(buff), image, FarhanGans, ` ~ Wet Glass Text Maker`)
					} else {
						reply(mess.error.bug)
					}
					await limitAdd(sender) 
				break 
				case 'croman':
					if (!isUser) return reply(mess.only.userB)
					
					if (isBanned) return reply(mess.only.benned)
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					reply(mess.wait)
					if (args.length < 1) return reply('Teksnya mana gan??')
					if (args.length > 10) return reply('karakter minimal 10')
					anu = `https://api.vhtear.com/romancetext?text=${args[0]}&apikey=${VthearApi}`
					voss = await fetch(anu)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
						costum(await getBuffer(anu), image, FarhanGans, ` ~ Romance Text Maker`)
					} else {
						reply(mess.error.bug)
					}
					await limitAdd(sender) 
				break 
				case 'clove':
					if (!isUser) return reply(mess.only.userB)
					
					if (isBanned) return reply(mess.only.benned)
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Teksnya mana gan??')
					if (args.length > 10) return reply('karakter minimal 10')
					reply(mess.wait)
					anu = `https://api.vhtear.com/lovemessagetext?text=${args[0]}&apikey=${VthearApi}`
					voss = await fetch(anu)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
						costum(await getBuffer(anu), image, FarhanGans, ` ~ Love Message Maker`)
					} else {
						reply(mess.error.bug)
					}
					await limitAdd(sender)
				break 
				case 'quotemaker':
				try {
					if (isBanned) return reply(mess.only.benned)
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isUser) return reply(mess.only.userB)
					gh = `${body.slice(12)}`
					quote = gh.split("/")[0];
					wm = gh.split("/")[1];
					bg = gh.split("/")[2];
					const pref = `Usage: \n${prefix}quotemaker teks/watermark/theme\n\nEx :\n${prefix}quotemaker ini contoh/bicit/random`
					if (args.length < 1) return reply(pref)
					reply(mess.wait)
					anu = await fetchFxc7(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=${bg}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					costum(buffer, image, FarhanGans, ` ~ Quotes Maker`)
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
				break 
				case 'cphlogo':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					gh = `${body.slice(9)}`
					gbl1 = gh.split("/")[0];
					gbl2 = gh.split("/")[1];
					if (args.length < 1) return reply('Teksnya mana gan?')
					reply(mess.wait)
					anu = `https://api.vhtear.com/pornlogo?text1=${gbl1}&text2=${gbl2}&apikey=${VthearApi}`
					voss = await fetch(anu)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
						costum(await getBuffer(anu), image, FarhanGans, ` ~ Pornhub Text Maker`)
					} else {
						reply(mess.error.bug)
					}
					await limitAdd(sender) 
				break 
				case 'phcomment':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					gh = `${body.slice(11)}`
					namanya = gh.split("/")[0];
					komen = gh.split("/")[1];
					if (args.length < 1) return reply('Teksnya mana gan?')
					reply(mess.wait)
					anu = `https://api.zeks.xyz/api/phub?apikey=${ZeksApi}&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara%2Bbuat%2Bfoto%2Bprofil%2Bdi%2Bwhatsapp%2Bmenjadi%2Bunik.jpg&username=${namanya}&msg=${komen}`
					voss = await fetch(anu)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
						costum(await getBuffer(anu), image, FarhanGans, ` ~ Comment pornhub Maker`)
					} else {
						reply(mess.error.bug)
					}
					await limitAdd(sender) 
				break 
				case 'cwolf':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					cw = `${body.slice(7)}`
					wolf1 = cw.split("/")[0];
					wolf2 = cw.split("/")[1];
					if (args.length < 1) return reply('Teksnya mana gan?')
					reply(mess.wait)
					anu = `https://api.vhtear.com/avatarwolf?text1=${wolf1}&text2=${wolf2}&apikey=${VthearApi}`
					voss = await fetch(anu)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
						costum(await getBuffer(anu), image, FarhanGans, ` ~ Wolf Text Maker`)
					} else {
						reply(mess.error.bug)
					}
					await limitAdd(sender) 
				break 
				case 'cglitch':
				if (isBanned) return reply(mess.only.benned) 
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					cg = `${body.slice(9)}`
					gh1 = cg.split("/")[0];
					gh2 = cg.split("/")[1];
					if (args.length < 1) return reply('Teksnya mana gan?')
					reply(mess.wait)
					anu = `https://api.vhtear.com/glitchtext?text1=${gh1}&text2=${gh2}&apikey=${VthearApi}`
					voss = await fetch(anu)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
					costum(await getBuffer(anu), image, FarhanGans, ` ~ Glitch Text Maker`)
					} else {
						reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break 
					case 'cballon':
				if (isBanned) return reply(mess.only.benned) 
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					cg = `${body.slice(9)}`
					gh1 = cg.split("/")[0];
					gh2 = cg.split("/")[1];
					if (args.length < 1) return reply('Teksnya mana gan?')
					reply(mess.wait)
					anu = `https://api.vhtear.com/balloonmaker?text1=${gh1}&text2=${gh2}&apikey=${VthearApi}`
					voss = await fetch(anu)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
					costum(await getBuffer(anu), image, FarhanGans, ` ~ Ballom Text Maker`)
					} else {
						reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break 

//akhir kreator
			    case 'jarak':
			    try {
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    if (isLimit(sender)) return reply(ind.limitend(pusname))
			    jarak = `${body.slice(7)}`
			    ja = jarak.split("/")[0];
			    rak = jarak.split("/")[1];
			    anu = await fetchFxc7(`https://api.vhtear.com/distance?from=${ja}&to=${rak}&apikey=${VthearApi}`, {method: 'get'})
			    frhan.sendMessage(from, `${anu.result.data}`, MessageType.text, {quoted: mek})
			    } catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			    break  
			    case 'infoalamat':
			    try {
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    if (isLimit(sender)) return reply(ind.limitend(pusname))
			    reply(mess.wait)
                    anu = await fetchFxc7(`https://api.vhtear.com/infoalamat?query=${body.slice(12)}&apikey=${VthearApi}`, {method: 'get'})
			        frhan.sendMessage(from, `${anu.result.data}`, MessageType.text, {quoted: mek})
			        } catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			        break 
			    case 'tinyurl':
			    try {
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    
			    if (isLimit(sender)) return reply(ind.limitend(pusname))
			    reply(mess.wait)
  anu = await fetchFxc7(`https://tobz-api.herokuapp.com/api/tinyurl?url=${body.slice(9)}&apikey=${TobzApi}`)
			        tinyurl = `${anu.result}`
			        reply(tinyurl)
			        } catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			        break 
			   /*case 'igstalk':
			   try {
                    if (isBanned) return reply(mess.only.benned)    
   					if (!isUser) return reply(mess.only.userB)
   					if (isLimit(sender)) return reply(ind.limitend(pusname))
                    anu = await fetchFxc7(`https://api.vhtear.com/igprofile?query=${args[0]}&apikey=${VthearApi}`, {method: 'get'})
                     buffer = await getBuffer(anu.result.picture)
                     reply(mess.wait)
                     hasil = `╭─「 *INSTAGRAM STALKER* 」\n│\n│• Fullname : ${anu.result.full_name}\n│ • Post: ${anu.result.post_count}\n│• Followers : ${anu.result.follower}\n│• Following : ${anu.result.follow}\n│• Bio : ${anu.result.biography}\n╰─────────────────────`
                    frhan.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
                    } catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
                    break */
				case 'igstalk':

				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					hmm = await fetchFxc7(`https://api.zeks.xyz/api/igstalk?username=${body.slice(9)}&apikey=${ZeksApi}`)
					buffer = await getBuffer(hmm.profile_pic)
					hasil = `Fullname : ${hmm.fullname}\nPengikut : ${hmm.follower}\nMengikuti : ${hmm.following}\nPrivate : ${hmm.is_private}\nVerified : ${hmm.is_verified}\nbio : ${hmm.bio}`
					cosProduct(from, buffer, image, {quoted: mek, caption: hasil})
					await limitAdd(sender)
					break
			    case 'mimpi':
			    try {
			    if (isBanned) return reply(mess.only.benned)
			    if (isLimit(sender)) return reply(ind.limitend(pusname))
			    if (!isUser) return reply(mess.only.userB)
			    if (args.length < 1) return reply('mimpi apa??')
			    reply(mess.wait)
			        anu = await fetchFxc7(`https://api.vhtear.com/artimimpi?query=${body.slice(7)}&apikey=${VthearApi}`, {method: 'get'})
			        mimpi = `${anu.result.hasil}`
			        frhan.sendMessage(from, mimpi, MessageType.text, {quoted: mek})
			        } catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			       	break 
				case 'quotes':
				frhan.updatePresence(from, Presence.composing) 
				 if (isBanned) return reply(mess.only.benned)    
				 if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isUser) return reply(mess.only.userB)
				 data = fs.readFileSync('./Fxc7/quotes.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 randQuote = 'Author: *'+randKey.author+'*\n\n*'+randKey.quotes+'*'
                 frhan.sendMessage(from, randQuote, MessageType.text, {quoted: mek})
				await limitAdd(sender) 
					break 
				case 'fakta':
				try {
				if (isBanned) return reply(mess.only.benned)   
				 if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isUser) return reply(mess.only.userB)
				
					anu = await fetchFxc7(`https://iriene-saybilla.000webhostapp.com/fakta.php?apikey=FarhanXCode7`, {method: 'get'})
					frhan.sendMessage(from, monospace(anu.result), MessageType.text, {quoted: mek})
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break 
				case 'randomwpanime':
				try {
				if (isBanned) return reply(mess.only.benned)   
				 if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isUser) return reply(mess.only.userB)
					buff = await getBuffer(`https://api.xteam.xyz/randomimage/wpmobile?APIKEY=${XteamApi}`, {method: 'get'})
					frhan.sendMessage(from, buff, image, {quoted: mek})
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break 
				case 'katabijak':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchFxc7(`http://api.lolhuman.xyz/api/random/katabijak?apikey=${LolApi}`, {method: 'get'})
					katabijak = `Kata Bijak: *${anu.result}*`
					frhan.sendMessage(from, katabijak, MessageType.text, {quoted: mek})
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break 

			case 'profiltiktok':
			try {
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    
			    if (isLimit(sender)) return reply(ind.limitend(pusname))
			    reply(mess.wait)
                    anu = await fetchFxc7(`https://api.vhtear.com/tiktokprofile?query=${body.slice(14)}&apikey=${VthearApi}`, {method: 'get'})
			        tiktok = await getBuffer(anu.result.picture)
              frhan.sendMessage(from, tiktok, image, {quoted: mek})
			        } catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			        break 
		    case 'darkjokes':
				frhan.updatePresence(from, Presence.composing) 
				 if (isBanned) return reply(mess.only.benned)    
				 if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isUser) return reply(mess.only.userB)
				
				reply(mess.wait)
				 data = fs.readFileSync('./Fxc7/drak.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 darkjokes = await getBuffer(randKey.result)
                 frhan.sendMessage(from, darkjokes, image, {quoted: mek, caption: '\`\`\`DARK JOKES\`\`\`'})
				await limitAdd(sender) 
				break  
			case 'katailham':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				hasil = katailham[Math.floor(Math.random() * (katailham.length))]
				frhan.sendMessage(from, '*'+hasil+'*', MessageType.text, {quoted: mek})
				await limitAdd(sender)
				break 
			case 'pasangan':
			try {
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				pa = `${body.slice(10)}`
				sa = pa.split("/")[0];
				ngan = pa.split("/")[1];
				anu = await fetchFxc7(`https://api.vhtear.com/primbonjodoh?nama=${sa}&pasangan=${ngan}&apikey=${VthearApi}`, {method: 'get'})
				frhan.sendMessage(from, `${anu.result.hasil}`, MessageType.text, {quoted: mek})
			} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			break 

			case 'persengay':
			case 'gaypersen':
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('tag temanmu!')
				rate = body.slice(11)
				persengayy = ["*4%*\n\n*Tobat Ngegay Gan:v*","*9%*\n\n*OTW Tobat Gan:v*","*17%*\n\n*Kang Coli*","*28%*\n\n*Buset Dah Gay🤦*","*34%*\n\n *Korban Tusbol*","*48%*\n\n*Kang Hunter Bool:v*","*59%*\n\n *Bahaya Ni Orang Gan*","*62%*\n\n*Hati² Sama Ni Orang Beneran Dah*","*74%*\n\n*Astagfirullah Kabur Gan🏃🌬️*","83%\n\n Yaallah Nak🤦","97%\n\nAstagfirullah🤦","100%\n\nKabur ae Gan Daripada Ditusbol Bool lu🏃","29%\n\n amann:v","94%\n\n Yaallah🏃","75%\n\nHadehh Gay🤦","82%\n\nMending Lu Tobat Dah🏃","41%\n\nSering Cari Bool Diperempatan","39%\n\nSering Tusbol Bool Topan🏃"]
				const kl = persengayy[Math.floor(Math.random() * persengayy.length)]
				frhan.sendMessage(from, 'Persen Gay: *'+rate+'*\n\nJawaban : '+kl+'', MessageType.text, { quoted: mek })
				await limitAdd(sender) 
				break  

			case 'pbucin':
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Mana Nama?')
				rate = body.slice(8)
				persenbucin = ["4%\n\nHadehh🤦","9%\n\nMasih Kecil Dah Bucin Ae","17%\n\nNakk Masih Kecil","28%\n\nYoalahh hmm","34%\n\nMayan Lah","48%\n\nGatau","59%\n\nBiasa Kang Bucin","62%\n\n Hadehhh🏃","74%\n\n bucen Teroosss","83%\n\n Sekali² kek Ga bucin Gitu","97%\n\nHadehh Pakboi²","100%\n\nHadehhh Ini Bukan Bucin Tapi Pakboi","29%\n\nKasian Mana Masih Muda","94%\n\n Dasar Pakboi","75%\n\n Ya Ampun"]
				const pbucin = persenbucin[Math.floor(Math.random() * persenbucin.length)]
				frhan.sendMessage(from, 'Persen Bucin Kak: *'+rate+'*\n\nJawaban : '+ pbucin +'', MessageType.text, { quoted: mek })
				await limitAdd(sender) 
				break 
		    case 'map':
		    try {
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    
			    if (isLimit(sender)) return reply(ind.limitend(pusname))
			    reply(mess.wait)
                anu = await fetchFxc7(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`, {method: 'get'})
                buffer = await getBuffer(anu.gambar)
                frhan.sendMessage(from, buffer, image, {quoted: mek, caption: `${body.slice(5)}`})
				} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
				break 
				case 'url2img':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					tipelist = ['desktop','tablet','mobile']
					if (args.length < 1) return reply('Tipenya apa gan?')
					if (!tipelist.includes(args[0])) return reply('Tipe desktop|tablet|mobile')
					if (args.length < 2) return reply('Urlnya mana gan?')
					if (!isUrl(args[1])) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchFxc7(`https://mhankbarbar.moe/api/url2image?tipe=${args[0]}&url=${args[1]}&apiKey=${BarBarApi}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					url2img = await getBuffer(anu.result)
					frhan.sendMessage(from, url2img, image, {quoted: mek})
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender)
					break 
			    case 'tagall':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]} wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`╔═══✪ Tag By *${pushname2}* ✪══`+ teks +'╚═══〘 FXC7 BOT 〙═══', members_id, true)
					break
			    case 'mentionall':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = '\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`╔══〘  *${body.slice(12)}*  〙✪══`+teks+'╚═〘 FXC7 BOT 〙', members_id, true)
					break
			    case 'kbbi':
			    try {
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    
			    if (isLimit(sender)) return reply(ind.limitend(pusname))
			    reply(mess.wait)
					if (args.length < 1) return reply('Apa yang mau dicari gan?')
					anu = await fetchFxc7(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
					reply('Menurut Kbbi:\n\n'+anu.result)
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender)
					break 
					case 'grup':
					  case 'group':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args[0] === 'buka') {
					    reply(`\`\`\`✓Sukses Membuka Group\`\`\` *${groupMetadata.subject}*`)
						frhan.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`\`\`\`✓Sukses Menutup Group\`\`\` *${groupMetadata.subject}*`)
						frhan.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break
				case 'artinama':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Apa yang mau dicari gan?')
					anu = await fetchFxc7(`https://api.vhtear.com/artinama?nama=${body.slice(10)}&apikey=${VthearApi}`, {method: 'get'})
					frhan.sendMessage(from, `${anu.result.hasil}`, MessageType.text, {quoted: mek})
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break 
				case 'clearall':
					if (!isOwner) return reply('Kamu siapa?')
					anu = await frhan.chats.all()
					frhan.setMaxListeners(25)
					for (let _ of anu) {
						frhan.deleteChat(_.jid)
					}
					reply(`\`\`\`Sukses delete all chat Jenny\`\`\``)
					break
                                case 'bcgc':
					frhan.updatePresence(from, Presence.composing) 
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('.......')
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bcgc = await frhan.downloadMediaMessage(encmedia)
						for (let _ of groupMembers) {
							frhan.sendMessage(_.jid, bcgc, image, {caption: `*「 BROADCAST GROUP 」*\n*Group* : ${groupName}\n\n${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of groupMembers) {
							sendMess(_.jid, `*「 BROADCAST GROUP 」*\n*Group* : ${groupName}\n\n${body.slice(6)}`)
						}
						reply('Suksess broadcast group')
					}
					break 

				case 'bc':
					if (!isOwner) return reply('Kamu siapa?')
					if (args.length < 1) return reply('.......')
					anu = await frhan.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await frhan.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							frhan.sendMessage(_.jid, bc, image, {caption: `[ Izin Broadcast ]\n\n${body.slice(4)}`})
						}
						reply('Suksess broadcast')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ *JENNY BROADCAST* ]\n\n${body.slice(4)}`)
						}
						reply('Suksess broadcast')
					}
					break
				case 'add':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Yang mau di add siapa??')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						frhan.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
			    case 'kick':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, mengeluarkan :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						frhan.groupRemove(from, mentioned)
					} else {
						mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
						frhan.groupRemove(from, mentioned)
					}
					break 
				case 'kicktime':
					if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)
					
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					setTimeout( () => {
					frhan.sendMessage(from, 'Yok Sama" Al-fatihah',MessageType.text)
					}, 8000)
					setTimeout( () => {
					reply('sukses min:D')
					}, 7000)
					setTimeout( () => {
					frhan.groupRemove(from, mentioned)
					}, 6000)
					setTimeout( () => {
					frhan.sendMessage(from, `Bismilah Kick @${mentioned[0].split('@')[0]}`,MessageType.text) // ur cods
					}, 5000)
					setTimeout( () => {
					frhan.sendMessage(from, 'Asikkk Dapet Makanan nihh:D',MessageType.text)
					}, 2500)
					setTimeout( () => {
					reply('Perintah Diterima min:D')
					}, 0)
					break
				case 'promote':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, anda menjdi admin :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						frhan.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
						frhan.groupMakeAdmin(from, mentioned)
					}
					break
				case 'delete':
					case 'd':
					if (!isGroup)return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					frhan.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
			    case 'demote':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Perintah di terima, anda tidak menjadi admin :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						frhan.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Perintah di terima, Menurunka : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
						frhan.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'adminlist':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
				case 'toimg':
					if (!isQuotedSticker) return reply(' reply stickernya gan')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await frhan.downloadAndSaveMediaMessage(encmedia)
					ran= getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
						buffer = fs.readFileSync(ran)
						costum(buffer, image, FarhanGans, FarhanGans2)
						fs.unlinkSync(ran)
					})
					break 
				case 'antivirtex':
                    if (isBanned) return reply(mess.only.benned)
                    if (!isUser) return reply(mess.only.userB)
                    
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('ketik on untuk mengaktifkan')
					if ((args[0]) === 'on') {
						if (isAntiVirtex) return reply('anti virtex group sudah aktif')
						_antivirtex.push(from)
						fs.writeFileSync('./database/json/antivirtex.json', JSON.stringify(_antivirtex))
						reply(`\`\`\`Sukses mengaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						if (!isAntiVirtex) return reply('Mode anti virtex sudah nonaktif')
						_antivirtex.splice(from, 1)
						fs.writeFileSync('./database/json/antivirtex.json', JSON.stringify(_antivirtex))
						reply(`\`\`\`✓Sukes menonaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('on untuk mengaktifkan, off untuk menonaktifkan')
					}
					break
				case 'simih':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isSimi) return reply('Mode simi sudah aktif')
						_samih.push(from)
						fs.writeFileSync('./database/json/simi.json', JSON.stringify(_samih))
						reply(`\`\`\`✓Sukses mengaktifkan mode simi di group\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						if (!isSimi) return reply('Mode simi Sudah Off sebelumnya')
						_samih.splice(from, 1)
						fs.writeFileSync('./database/json/simi.json', JSON.stringify(_samih))
						reply(`\`\`\`✓Sukes menonaktifkan mode simi di group\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('On untuk mengaktifkan, Off untuk menonaktifkan')
					}
					break
			    case 'nsfw':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isNsfw) return reply('Mode nsfw sudah aktif')
						_nsfw.push(from)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(_nsfw))
						reply(`\`\`\`✓Sukses mengaktifkan mode nsfw di group\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						if (!isNsfw) return reply('Mode Nsfw sudah Off Sebelumnya')
						_nsfw.splice(from, 1)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(_nsfw))
						reply(`\`\`\`✓Sukes menonaktifkan mode nsfw di group\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('On untuk mengaktifkan, Off untuk menonaktifkan')
					}
					break 
				case 'autostiker':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('pilih on apa off')
					if (args[0] == 'on') {
						if (isStiker) return reply('Mode auto sticker sudah aktif')
						astik.push(from)
						fs.writeFileSync('./database/json/autos.json', JSON.stringify(astik))
						reply(`Sukses mengaktifkan mode auto sticker`)
					} else if (args[0] == 'off') {
						if (!isStiker) return reply('Mode Auto Sticker Sudah Off Sebelumnya')
						astik.splice(from, 1)
						fs.writeFileSync('./database/json/autos.json', JSON.stringify(astik))
						reply('Sukses menonaktifkan mode auto sticker')
					} else {
						reply('pilih on / off!!')
					}
					break
				case 'welcome':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Example: !welcome on')
					if ((args[0]) === 'on') {
						if (isWelkom) return reply('Udah aktif gan')
						welkom.push(from)
						fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
						reply(`\`\`\`✓Sukses mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						if (!isWelkom) return reply('Mode Welcome Sudah Off Sebelumnya')
						welkom.splice(from, 1)
						fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
						reply(`\`\`\`✓Sukses menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('On untuk mengaktifkan, Off untuk menonaktifkan')
					}
					break 
				case 'antilink':
				if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('ketik !antilink on untuk mengaktifkan')
					if ((args[0]) === 'on') {
						if (isAntiLink) return reply('anti link sudah on')
						_antilink.push(from)
						fs.writeFileSync('./database/json/antilink.json', JSON.stringify(_antilink))
						reply(`\`\`\`✓Sukses mengaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						if (!isAntiLink) return reply('anti link sudah off sebelumnya')
						_antilink.splice(from, 1)
						fs.writeFileSync('./database/json/antilink.json', JSON.stringify(_antilink))
						reply(`\`\`\`✓Sukses menonaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('on untuk mengaktifkan, off untuk menonaktifkan')
					}
					break 
				case 'badword':
				if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('ketik !badword on untuk mengaktifkan')
					if ((args[0]) === 'on') {
						if (isBadWord) return reply('anti badword sudah aktif')
						_badword.push(from)
						fs.writeFileSync('./database/json/badword.json', JSON.stringify(_badword))
						reply(`\`\`\`✓Sukses mengaktifkan fitur anti badword di group\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						if (!isBadWord) return reply('anti badword sudah off sebelumnya')
						_badword.splice(from, 1)
						fs.writeFileSync('./database/json/badword.json', JSON.stringify(_badword))
						reply(`\`\`\`✓Sukses menonaktifkan fitur anti badword di group\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('on untuk mengaktifkan, off untuk menonaktifkan')
					}
					break
				case 'caklontong':
				if (isBanned) return reply(mess.only.benned)    
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isUser) return reply(mess.only.userB)
				
				data = fs.readFileSync('./Fxc7/caklontong.js');
				cak = JSON.parse(data);
				lontong = Math.floor(Math.random() * cak.length);
				randKey = cak[lontong];
				Pertanyaan = randKey.result.soal
				Jawaban = '\n*'+randKey.result.desc +'*'
					setTimeout( () => {
					frhan.sendMessage(from, Jawaban, MessageType.text, {quoted: mek})
					}, 30000)
					setTimeout( () => {
					frhan.sendMessage(from, '_10 Detik lagi…_',MessageType.text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					frhan.sendMessage(from, '_20 Detik lagi_…',MessageType.text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					frhan.sendMessage(from, '_30 Detik lagi_…',MessageType.text) // ur cods
					}, 2500) // 1000 = 1s
					frhan.sendMessage(from, Pertanyaan, MessageType.text, {quoted: mek})
					await limitAdd(sender) 
				break
				case 'tebakgambar':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					data = fs.readFileSync('./Fxc7/tebakgambar.js');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
					randSoal = await getBuffer(randKey.result.soalImg)
					setTimeout( () => {
					frhan.sendMessage(from, '*➸ Jawaban :* '+ randKey.result.jawaban +'\n', MessageType.text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					frhan.sendMessage(from, '_10 Detik lagi…_',MessageType.text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					frhan.sendMessage(from, '_20 Detik lagi_…',MessageType.text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					frhan.sendMessage(from, '_30 Detik lagi_…',MessageType.text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					frhan.sendMessage(from, randSoal, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break  
				case 'family100':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				data = fs.readFileSync('./Fxc7/family100.js');
				fami = JSON.parse(data);
				ly100 = Math.floor(Math.random() * fami.length);
				randKey = fami[ly100];
				Pertanyaan = randKey.result.soal
					setTimeout( () => {
					frhan.sendMessage(from, '*➸ Jawaban :* \n```'+randKey.result.jawaban +'```', MessageType.text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					  reply('_Waktu Anda Habis_')
					}, 29000)
					setTimeout( () => {
					frhan.sendMessage(from, '_10 Detik lagi…_',MessageType.text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					frhan.sendMessage(from, '_20 Detik lagi_…',MessageType.text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					frhan.sendMessage(from, '_30 Detik lagi_…',MessageType.text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					frhan.sendMessage(from, '*'+ Pertanyaan +'*', MessageType.text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
				case 'randombokep':
				 if (isBanned) return reply(mess.only.benned)    
				 if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isUser) return reply(mess.only.userB)
				if (!isPrem) return reply(mess.only.premiumU)
				 data = fs.readFileSync('./Fxc7/18.js');
				 jsonData = JSON.parse(data);
				 randIndex = Math.floor(Math.random() * jsonData.length);
				 randKey = jsonData[randIndex];
				 randBokep = await getBuffer(randKey.image)
				 reply(mess.wait)
				 randTeks = randKey.teks
				 frhan.sendMessage(from, randBokep, image, {quoted: mek, caption: randTeks})
				await limitAdd(sender) 
				break

				case 'clone':
				if (!isOwner) return reply(mess.only.ownerB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Tag target yang ingin di clone')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag gan')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await frhan.getProfilePicture(id)
						buffer = await getBuffer(pp)
						frhan.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('Gagal om')
					}
					break
//setting bot
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					setting.prefix = prefix
					fs.writeFileSync('./database/json/setting.json', JSON.stringify(setting, null, '\t'))
					reply(`Prefix berhasil di ubah menjadi : ${prefix}`)
				break
				case 'setlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					limitawal = args[0]
					setting.limitt = limitawal
					fs.writeFileSync('./database/json/setting.json', JSON.stringify(setting, null, '\t'))
					reply(`Limit berhasil di ubah menjadi : ${limitawal}`)
				break 
				case 'setmemlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					memberlimit = args[0]
					setting.memberlimit = memberlimit
					fs.writeFileSync('./database/json/setting.json', JSON.stringify(setting, null, '\t'))
					reply(`Limit Member berhasil di ubah menjadi : ${memberLimit}`)
				break 
				case 'setnamebot':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					name = args[0]
					setting.name = name
					fs.writeFileSync('./database/json/setting.json', JSON.stringify(setting, null, '\t'))
					reply(`Nama Bot berhasil di ubah menjadi : ${name}`)
				break 
				case 'setreply':
					if (!isOwner) return reply(mess.only.ownerB)
					frhan.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					FarhanGans2 = args[0]
					setting.FarhanGans2 = FarhanGans2
					fs.writeFileSync('./database/json/setting.json', JSON.stringify(setting, null, '\t'))
					reply(`reply berhasil di ubah menjadi : ${rmenu}`)
				break 
////////////
				case 'wait':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await frhan.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							frhan.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('Foto aja mas')
					}
					break 
					
			case 'quran':
			try {
			 if (isBanned) return reply(mess.only.benned)    
			 if (!isUser) return reply(mess.only.userB)
			 frhan.updatePresence(from, Presence.composing) 
			 if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchFxc7(`https://api.zeks.xyz/api/randomquran`, {method: 'get'})
					quran = `${anu.result.asma}\nSurah: ${anu.result.nama} Ayat ${anu.result.ayat}\nArtinya: ${anu.result.arti}\n\n${anu.result.keterangan}`
					buff = await getBuffer(anu.result.audio)
					frhan.sendMessage(from, quran, MessageType.text, {quoted: mek})
					frhan.sendMessage(from, buff, audio, {mimetype: Mimetype.mp4Audio, quoted: mek, ptt: true})
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break 
case 'asmaulhusna':
			try {
			 if (isBanned) return reply(mess.only.benned)    
			 if (!isUser) return reply(mess.only.userB)
			 frhan.updatePresence(from, Presence.composing) 
			 if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchFxc7(`https://api-iriene.herokuapp.com/api/muslim/asmaulhusna?apikey=${fxc7Api}`, {method: 'get'})
					asmaul = ''
					for (let husna of anu.result.data){
					asmaul += `\n*• no:* ${husna.index}\n*• ${husna.latin}*\n*• *${husna.arabic}*\n*• ${husna.translation_id}*\n`
					}
					reply(asmaul.trim())
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break 
				case 'infocuaca':
				try {
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					frhan.updatePresence(from, Presence.composing)
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Kirim perintah *!cuaca [tempat]*\nContoh : *!cuaca Banyuwangi')
					reply(mess.wait)
					tempat = `${body.slice(11)}`
					weather = await fetchFxc7('https://videfikri.com/api/cuaca/?daerah='+ tempat, {method: 'get'})
					if (weather.error) {
					 reply(from, weather.error,MessageType.text)
					 } else {
					  frhan.sendMessage(from, `➸ Tempat : ${weather.result.tempat}\n\n➸ Angin : ${weather.result.angin}\n➸ Cuaca : ${weather.result.cuaca}\n➸ Deskripsi : ${weather.result.desc}\n➸ Kelembapan : ${weather.result.kelembapan}\n➸ Suhu : ${weather.result.suhu}\n➸ Udara : ${weather.result.udara}`, MessageType.text, {quoted: mek})
					  }
					  } catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender)
				 break 

         case 'pinterest':
         try {
         if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Mau Nyari Foto Apa???')
					pinte = body.slice(11)
					anu = await fetchFxc7(`http://lolhuman.herokuapp.com/api/pinterest?apikey=${LolApi}&query=${pinte}`, {method: 'get'})
					reply(mess.wait)
					buff = await getBuffer(anu.result)
					costum(buff, image, FarhanGans, pinte)
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break 
			case 'igimage': 
				  try {
				if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Urlnya mana ???')
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
					 anu = await fetchFxc7(`http://api.lolhuman.xyz/api/instagram?apikey=${LolApi}&url=${args[0]}`, {method: 'get'})
					 reply(mess.wait)
					buffer = await getBuffer(anu.result)
					frhan.sendMessage(from, buffer, image, {quoted: mek})
				  } catch {
				    reply(mess.error.bug)
				  }
				await limitAdd(sender)
				    break
				case 'igvideo': 
				  try {
				if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Urlnya mana ???')
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
					 ige = body.slice(9)
					 anu = await fetchFxc7(`http://api.lolhuman.xyz/api/instagram?apikey=${LolApi}&url=${args[0]}`, {method: 'get'})
					 reply(mess.wait)
					buffer = await getBuffer(anu.result)
					frhan.sendMessage(from, buffer, video, {quoted: mek})
				  } catch {
				    reply(mess.error.bug)
				  }
				await limitAdd(sender)
				    break 
				case 'igtv': 
				  try {
				if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('Urlnya mana ???')
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com/tv')) return reply(mess.error.lv)
					 ige = body.slice(9)
					 anu = await fetchFxc7(`https://videfikri.com/api/igtv/?url=${args[0]}`, {method: 'get'})
					 reply(mess.wait)
					captionya = `• ${anu.result.username}\n• ${anu.result.full_name}\n• ${anu.result.duration}\n\n${anu.result.caption}`
					buffer = await getBuffer(anu.result.video_url)
					frhan.sendMessage(from, buffer, video, {quoted: mek, caption: captionya})
				  } catch {
				    reply(mess.error.bug)
				  }
				await limitAdd(sender)
				    break
				case 'jadwalsholat':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Masukan nama daerah!!')
					sholat = `${body.slice(14)}`
					anu = await fetchFxc7(`http://api.lolhuman.xyz/api/sholat/${sholat}?apikey=${LolApi}`, {method: 'get'})
					reply(mess.wait)
					hasil = `• *Wilayah:* ${anu.result.wilayah}\n• *Tanggal:* ${anu.result.tanggal}\n• *imsak:* ${anu.result.imsak}\n• *subuh:* ${anu.result.subuh}\n• *terbit:* ${anu.result.terbit}\n• *dhuha:* ${anu.result.dhuha}\n• *dzuhur:* ${anu.result.dzuhur}\n• *ashar:* ${anu.result.ashar}\n• *maghrib:* ${anu.result.maghrib}\n• *isya:* ${anu.result.isya}`
					frhan.sendMessage(from, hasil, MessageType.text, {quoted: mek})
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break 
				case 'jadwaltv':
					try {
					if (isBanned) return reply(mess.wait.benned)
					if (!isUser) return reply(mess.only.userB)
					
					frhan.updatePresence(from, Presence.composing)
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1)return reply('Nama Channelnya??')
					reply(mess.wait)
					jadwaltv = `${body.slice(10)}`
					anu = await fetchFxc7(`http://nzcha-apii.herokuapp.com/jadwaltv?channel=${jadwaltv}`, {method: 'get'})
					jtv = '===========================\n'
					for (let jdwl of anu.result){
					jtv += `• *Jam:* ${jdwl.jam} => *Tayangan:* ${jdwl.tayang}\n===========================\n`
					}
					reply(jtv.trim())
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender)
				break 
            case 'jadwaltvnow':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				frhan.updatePresence(from, Presence.composing) 
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				anu = await fetchFxc7(`http://api.lolhuman.xyz/api/jadwaltv/now?apikey=${LolApi}`, {method: 'get'})
				reply(mess.wait)
				if (anu.result) return reply(anu.result)
				frhan.sendMessage(from, anu.result, MessageType.text, {quoted: mek})
				} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			break 
// premium user
         case 'joox':
         try {
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPrem) return reply(mess.only.premiumU)
				frhan.updatePresence(from, Presence.recording)
				anu = await fetchFxc7(`https://tobz-api.herokuapp.com/api/joox?q=${body.slice(6)}&apikey=${TobzApi}`, {method: 'get'})
				if (anu.error) return reply(anu.error)
				infomp3 = `╭─「 *JOOX DOWNLOADER* 」\n│\n│ *• Judul* : ${anu.result.judul}\n│ *• Album* : ${anu.result.album}\n│ *• Dipublikasi* : ${anu.result.dipublikasi}\n│\n│ *TUNGGU SEBENTAR LAGI DIKIRIM*\n│ *MOHON JANGAN SPAM*\n╰─────────────────────`
				bufferddd = await getBuffer(anu.result.thumb)
				reply(mess.wait)
				buff = await getBuffer(anu.result.mp3)
				frhan.sendMessage(from, bufferddd, image, {quoted: mek, caption: infomp3})
				frhan.sendMessage(from, buff, audio, {mimetype: 'audio/mp4', filename: `${anu.result.judul}.mp3`, quoted: mek})
				} catch {
				reply(mess.error.bug)
				}
				await limitAdd(sender) 
			break  
			case 'snack':
			try {
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (!isPrem) return reply(mess.only.premiumU)
				frhan.updatePresence(from, Presence.recording)
				if (args.length < 1) return reply('Urlnya mana gan?')
					if (!isUrl(args[0]) && !args[0].includes('sck')) return reply(mess.error.Iv)
					anu = await fetchFxc7(`https://api-anoncybfakeplayer.herokuapp.com/sckdown?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					sck = `「 *SNACK VIDEO DOWNLOADER* 」\n\n*• Format:* ${anu.format}\n*• Size:* ${anu.size}\n\n*TUNGGU SEBENTAR LAGI DIKIRIM MOHON JANGAN SPAM*`
					bufferddd = await getBuffer('https://raw.githubusercontent.com/FarhanXCode7/termux-bot-wa/main/src/glitchtext.png')
					reply(mess.wait)
					buff = await getBuffer(anu.result)
					frhan.sendMessage(from, bufferddd, image, {quoted: mek, caption: sck})
					frhan.sendMessage(from, buff, video, {mimetype: 'video/mp4', filename: `${anu.format}.mp4`, quoted: mek})
					} catch {
					reply(mess.error.bug)
					}
				break  
				case 'ytmp4':
						if (isBanned) return reply(mess.only.benned)
						if (!isPrem) return reply(mess.only.premiumU)
						if (!isUser) return reply(mess.only.userB)
						if (args.length < 1) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
						let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
						if (!isLinks2) return reply(mess.error.Iv)
						try {
							reply(mess.wait)
							ytv(args[0])
							.then((res) => {
							const { dl_link, thumb, title, filesizeF, filesize } = res
							axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
							.then((a) => {
							if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
							const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
							sendMediaURL(from, thumb, captionsYtmp4)
							sendMediaURL(from, dl_link).catch(() => reply(mess.error.bug))
							})
			
							})
						} catch (err) {
							reply(mess.error.bug)
						}
						break
					case 'ytmp3':
						if (isBanned) return reply(mess.only.benned)
						if (!isPrem) return reply(mess.only.premiumU)
						if (!isUser) return reply(mess.only.userB)
						if (args.length < 1) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
						let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
						if (!isLinks) return reply(mess.error.Iv)
						try {
							reply(mess.wait)
							yta(args[0])
							.then((res) => {
							const { dl_link, thumb, title, filesizeF, filesize } = res
							axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
							.then((a) => {
							if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
							const captions = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
							sendMediaURL(from, thumb, captions)
							sendMediaURL(from, dl_link).catch(() => reply(mess.error.bug))
							})

							})
						} catch (err) {
							reply(mess.error.bug)
						}
						break
				case 'playmp3':
				if (isBanned) return reply(mess.only.benned)
				if (!isPrem) return reply(mess.only.premiumU)
				if (!isUser) return reply(mess.only.userB)
				if (args.length < 1) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
				const playy = await axios.get(`http://nzcha-apii.herokuapp.com/ytsearch?q=${body.slice(6)}`)
				const mulaikah = playy.data.result[0].url
				try {
				reply(mess.wait)
				yta(mulaikah)
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then(async (a) => {
				if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
				const captions = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captions)
				await sendMediaURL(from, dl_link).catch(() => reply(mess.error.bug))
				})
				})
				} catch (err) {
				reply(mess.error.bug)
				}
				break
			case 'smule':
				try {
				frhan.updatePresence(from, Presence.recording) 
				if (isBanned) return reply(mess.only.benned)
				if (!isPrem) return reply(mess.only.premiumU)
				if (!isUser) return reply(mess.only.userB)
				if (args.length < 1) return reply('Urlnya mana gan?')
				if (!isUrl(args[0]) && !args[0].includes('c-ash.smule')) return reply(mess.error.Iv)
				reply(mess.wait)
				anu = await fetchFxc7(`https://mnazria.herokuapp.com/api/smule?link=${args[0]}`, {method: 'get'})
				if (anu.error) return reply(anu.error)
				teks = `*Title* : ${anu.title}\n\n Tunggu Sebentar 1 menit Mungkun Agak Lama Karna Mendownload Video`
				thumb = await getBuffer(anu.thumb)
				frhan.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
				buffer = await getBuffer(anu.result)
				frhan.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek, caption: 'Nih Gan'})
				} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 	
			break 
case 'video': // SEARCH VIDEO FROM YOUTUBE
case 'vidio':
if (isBanned) return reply(mess.only.benned)
if (!isUser) return reply(mess.only.userB)
if (!isPrem) return reply(mess.only.premiumU)
if (args.length === 0) return reply(`Kirim perintah ${prefix}video judul video`)
const querv = body.slice(7)
reply(mess.wait)
try {
const resmusv = await axios.get(`https://api.vhtear.com/youtube?query=${encodeURIComponent(querv)}&apikey=${VthearApi}`)
const jsonsercmuv = await resmusv.data
let berhitung1 = 1
const { result } = await jsonsercmuv
let xixixai = `Hasil pencarian dari ${querv}\n\nKetik ${prefix}getvideo [angka] untuk mengambil ID\nContoh : ${prefix}getvideo 2\n`
for (let i = 0; i < result.length; i++) {
xixixai += `\n═════════════════\n\n*Urutan* : ${i+1}\n*Title* : ${result[i].title}\n*Channel* : ${result[i].channel}\n*Durasi* : ${result[i].duration}\n*Perintah download* : ${prefix}getvideo ${result[i].id}\n`
}
xixixai += `\n\n`
for (let ii = 0; ii < result.length; ii++) {
xixixai += `(#)${result[ii].id}`
}
await sendMediaURL(from, result[0].image, xixixai)
} catch (err){
console.log(err)
}
break

case 'music': // SEARCH MUSIC FROM YOUTUBE
case 'musik':
if (isBanned) return reply(mess.only.benned)
if (!isUser) return reply(mess.only.userB)
if (!isPrem) return reply(mess.only.premiumU)
if (args.length === 0) return reply(`Kirim perintah ${prefix}music judul lagu`)
const querv2 = body.slice(7)
reply(mess.wait)
try {
const resmusv2 = await axios.get(`https://api.vhtear.com/youtube?query=${encodeURIComponent(querv2)}&apikey=${VthearApi}`)
const jsonsercmuv2 = await resmusv2.data
let berhitung1 = 1
const { result } = await jsonsercmuv2
let xixixai = `Hasil pencarian dari ${querv2}\n\nKetik ${prefix}getmusic [id] untuk mengambil lagu. Atau reply pesan ini dan ketik ${prefix}getmusic 2\n`
for (let i = 0; i < result.length; i++) {
xixixai += `\n═════════════════\n\n*Urutan* : ${i+1}\n*Title* : ${result[i].title}\n*Channel* : ${result[i].channel}\n*Durasi* : ${result[i].duration}\n*Perintah download*:\n${prefix}getmusic ${result[i].id}\n`
}
xixixai += `\n\n`
for (let ii = 0; ii < result.length; ii++) {
xixixai += `(#)${result[ii].id}`
}
await sendMediaURL(from, result[0].image, xixixai)
} catch (err){
console.log(err)
}
break
case 'getmusik':
case 'getmusic':
if (isBanned) return reply(mess.only.benned)
if (!isUser) return reply(mess.only.userB)
if (!isPrem) return reply(mess.only.premiumU)
try {
if (isQuotedImage) {
if (args.length === 0) return reply(`Kirim perintah *${prefix}getmusik _IdDownload_*`)
if (!Number(args[0])) return reply(`_Apabila ditag hanya cantumkan nomer urutan bukan ID Download!_  contoh : *!getmusik _1_*`)
const dataDownmp3 = mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage.caption
const pilur = dataDownmp3.split('(#)')
reply(mess.wait)

yta(`https://youtube.com/watch?v=${pilur[args[0]]}`)
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
const captions = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
sendMediaURL(from, thumb,captions)
sendMediaURL(from, dl_link).catch(() => reply(mess.error.bug))
})
}).catch((e) => {
reply('Kesalahan saat mendownload data yg dipilih! pastikan id from perintah *!musik* sudah benar.')
})

} else if (mek.message.extendedTextMessage.contextInfo.quotedMessage) { 
reply(`_Salah tag! hanya tag pesan berisi data hasil from penelusuran musik._`)
} else {
if (args.length === 0) return reply('Kirim perintah *!getmusik _IdDownload_*, untuk contoh silahkan kirim perintah *!readme*')
if (args[0] <= 25) return reply(`_Apabila ingin mengambil data musik dengan nomor urutan, mohon tag pesan bot tentang pencarian musik!_`,)
reply(mess.wait)
yta(`https://youtu.be/${args[0]}`)
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
const captions = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
sendMediaURL(from, thumb, captions)
sendMediaURL(from, dl_link).catch(() => reply(mess.error.bug))
})
})
}
} catch (err) {
reply(`_Kesalahan! Pastikan id download sudah benar._`)
}
break
case 'getvideo':
if (isBanned) return reply(mess.only.benned)
if (!isUser) return reply(mess.only.userB)
if (!isPrem) return reply(mess.only.premiumU)
if (args.length === 0) return reply(`Kirim perintah *${prefix}getvideo* _IdDownload_`)
try {    
if (isQuotedImage) {
if (!Number(args[0])) return reply(`_Apabila reply hanya cantumkan nomer urutan bukan ID Download!_  contoh : *!getvideo _1_*`)
const dataDownmp3 = mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage.caption
const pilur = dataDownmp3.split('(#)')
console.log(pilur[args[0]])
reply(mess.wait)
ytv(`https://youtu.be/${pilur[args[0]]}`)
.then((res) => {
// console.log(res)
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
const captions = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
sendMediaURL(from, thumb, captions)
sendMediaURL(from, dl_link).catch(() => reply(mess.error.bug))
})

})

} else if (mek.message.extendedTextMessage.contextInfo.quotedMessage) { 
reply(`_Salah reply cok! hanya tag pesan berisi data hasil from penelusuran video._`)
} else {
if (args.length === 0) return reply(`Kirim perintah *${prefix}getvideo _Id Video_*`)
if (args[0] <= 25) return reply(`_Apabila ingin mengambil data video dengan nomor urutan, mohon tag pesan bot tentang pencarian video!_`,)
reply(mess.wait)
ytv(`https://youtu.be/${args[0]}`)
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
const captions = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
sendMediaURL(from, thumb, captions)
sendMediaURL(from, dl_link).catch(() => reply(mess.error.bug))
})
})
}
} catch (err) {
reply(mess.error.bug)
}
break
// akhir Fitur Premium
			
			case 'asupan':
			frhan.updatePresence(from, Presence.composing) 
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isUser) return reply(mess.only.userB)
				reply(mess.wait)
				anu = await fetchFxc7(`http://api.lolhuman.xyz/api/asupan?apikey=${LolApi}`, {method: 'get'})
				asupan = await getBuffer(anu.result)
				frhan.sendMessage(from, asupan, video, {quoted: mek, caption: '```ASUPAN NIH:V```'})
				} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
				break  
			case 'wiki':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('teks nya mana om?')
				reply(mess.wait)
				wiki = `${body.slice(6)}`
				anu = await fetchFxc7(`https://tobz-api.herokuapp.com/api/wiki?q=${wiki}&apikey=${TobzApi}`, {method: 'get'})
				if (anu.error) return reply(anu.error)
				wikii = `${anu.result}`
				frhan.sendMessage(from, wikii, MessageType.text, {quoted: mek})
				} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			break  
			
			case 'pastebin':
                try {
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(mess.wait)
				paste = `${body.slice(10)}`
                   anu = await fetchFxc7(`https://api-anoncybfakeplayer.herokuapp.com/pastebin?text=${paste}`, {method: 'get'})
                   frhan.sendMessage(from, `${anu.result}`, MessageType.text, {quoted: mek})
                   } catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 				
                   break 
		case 'bpfont':
			try {
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (!isUser) return reply(mess.only.userB)
			
			bp = `${body.slice(8)}`
			anu = await fetchFxc7(`https://api.terhambar.com/bpk?kata=${bp}`, {method: 'get'})
			reply (anu.text)
			} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			break  
		case 'spamcall':
			try {
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (!isUser) return reply(mess.only.userB)
			if (!isPrem) return reply(mess.only.premiumU)
			call = `${body.slice(11)}`
			anu = await fetchFxc7(`https://videfikri.com/api/call/?nohp=${call}`, {method: 'get'})
			frhan.sendMessage(from, `${anu.result.logs}`, MessageType.text, {quoted: mek})
			} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			break  
		case 'spamgmail':
			try {
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
			if (!isPrem) return reply(mess.only.premiumU)
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			spam = `${body.slice(10)}`
			anu = await fetchFxc7(`https://videfikri.com/api/spamemail/?email=${spam}&subjek=PT.PLN&pesan=Silahkan%20bayar%20tagihan%20listrik%20Anda`, {method: 'get'})
			frhan.sendMessage(from, `${anu.result.log_lengkap}`, MessageType.text, {quoted: mek})
			} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			break 
		case 'spamsms':
			try {
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
			if (!isPrem) return reply(mess.only.premiumU)
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			spam = `${body.slice(10)}`
			anu = await fetchFxc7(`http://api.lolhuman.xyz/api/sms/spam1?apikey=${LolApi}&nomor=${body.slice(9)}`, {method: 'get'})
			anu = await fetchFxc7(`http://api.lolhuman.xyz/api/sms/spam2?apikey=${LolApi}&nomor=${body.slice(9)}`, {method: 'get'})
			anu = await fetchFxc7(`http://api.lolhuman.xyz/api/sms/spam3?apikey=${LolApi}&nomor=${body.slice(9)}`, {method: 'get'})
			anu = await fetchFxc7(`http://api.lolhuman.xyz/api/sms/spam4?apikey=${LolApi}&nomor=${body.slice(9)}`, {method: 'get'})
			anu = await fetchFxc7(`http://api.lolhuman.xyz/api/sms/spam5?apikey=${LolApi}&nomor=${body.slice(9)}`, {method: 'get'})
			anu = await fetchFxc7(`http://api.lolhuman.xyz/api/sms/spam6?apikey=${LolApi}&nomor=${body.slice(9)}`, {method: 'get'})
			anu = await fetchFxc7(`http://api.lolhuman.xyz/api/sms/spam7?apikey=${LolApi}&nomor=${body.slice(9)}`, {method: 'get'})
			anu = await fetchFxc7(`http://api.lolhuman.xyz/api/sms/spam8?apikey=${LolApi}&nomor=${body.slice(9)}`, {method: 'get'})
			frhan.sendMessage(from, `${mess.success}`, MessageType.text, {quoted: mek})
			} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			break 
		case 'quransurah':
			try {
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			reply(mess.wait)
			surah = `${body.slice(12)}`
			anu = await fetchFxc7(`https://api.zeks.xyz/api/quran?no=${surah}&apikey=${ZeksApi}`, {method: 'get'})
			quran = `Surah Al-Qur\`an Nomer: *${surah}*\nSurah: *${anu.surah}*\nDiturunkan Dikota: *${anu.type}*\nJumlah Ayat: *${anu.jumlah_ayat}*\n\n*${anu.ket}\n=============================\n`
			for (let surah of anu.ayat) {
			quran += `${surah.number}\n${surah.text}\n${surah.translation_id}\n=====================\n`
			}
			reply(quran.trim())
			} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			break 
		case 'bitly':
			try {
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
			
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			link = `${body.slice(7)}`
			anu = await fetchFxc7(`https://tobz-api.herokuapp.com/api/bitly?url=${link}&apikey=${TobzApi}`, {method: 'get'})
			bitly = `${anu.result}`
			frhan.sendMessage(from, bitly, MessageType.text, {quoted: mek})
			} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			break  
			case 'pantun':
			try {
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
			anu = await fetchFxc7(`https://api.zeks.xyz/api/pantun?apikey=${ZeksApi}`, {method: 'get'})
			frhan.sendMessage(from, `${anu.result.pantun}`, MessageType.text, {quoted: mek})
			} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			break  
			
		case 'jamdunia':
		try {
		if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
			reply(mess.wait)
		 jamdunia = `${body.slice(10)}`
			anu = await fetchFxc7(`https://tobz-api.herokuapp.com/api/jamdunia?lokasi=${jamdunia}&apikey=${TobzApi}`, {method: 'get'})
			wtime = `*${anu.result.title}*\n*${anu.result.date}*\n*${anu.result.time}*`
			frhan.sendMessage(from, wtime, MessageType.text, {quoted: mek})
			} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			break  
			
		 case 'tomp3':
                if (isBanned) return reply(mess.only.benned)    
                if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isUser) return reply(mess.only.userB)
				
                	frhan.updatePresence(from, Presence.recording) 
					if (!isQuotedVideo) return reply('_*Reply Video nya Gan!*_')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await frhan.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
						bufferlkj = fs.readFileSync(ran)
						frhan.sendMessage(from, bufferlkj, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender) 
					break 
					case 'tovideo':
					  if (!isUser) return reply(mess.only.userB)
					  if (!isQuotedSticker) return reply('*☒* Reply stikernya')
					  reply(mess.wait)
					  anumedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					  anum = await frhan.downloadAndSaveMediaMessage(anumedia)
					  ran = getRandom('.webp')
					  exec(`ffmpeg -i ${anum} ${ran}`, (err) => {
					    fs.unlinkSync(anum)
					    if (err) return reply('Gagal, pada saat mengkonversi sticker ke Video')
					    buffer = fs.readFileSync(ran)
					    frhan.sendMessage(from, buffer, video, {quoted: mek, caption: 'Buat apa sii..'})
					    fs.unlinkSync(ran)
					    })
					    break

				case 'setppbot':
					if (!isOwner) return reply(mess.only.ownerB)
				    frhan.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await frhan.downloadAndSaveMediaMessage(enmedia)
					await frhan.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya🙂')
					break

// Fitur Defacer
case 'whois':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				whois = body.slice(7)
				anu = await fetchFxc7(`https://api.banghasan.com/domain/whois/${whois}`, {method: 'get'})
				reply(anu.hasil)
				} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			break 
case 'hostsearch':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				hostsearch = body.slice(12)
				anu = await fetchFxc7(`https://api.banghasan.com/domain/hostsearch/${hostsearch}`, {method: 'get'})
				reply(anu.hasil)
				} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			break 
case 'dnslookup':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				dnslookup = body.slice(7)
				anu = await fetchFxc7(`https://api.banghasan.com/domain/dnslookup/${dnslookup}`, {method: 'get'})
				reply(anu.hasil)
				} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			break 
case 'geoip':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				geoip = body.slice(7)
				anu = await fetchFxc7(`https://api.banghasan.com/domain/geoip/${geoip}`, {method: 'get'})
				reply(anu.hasil)
				} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			break 
case 'nping':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				nping = body.slice(7)
				anu = await fetchFxc7(`https://api.banghasan.com/domain/nping/${nping}`, {method: 'get'})
				reply(anu.hasil)
				} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			break 
				case 'dorking':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				reply(mess.wait)
				dork = `${body.slice(9)}`
					anu = await fetchFxc7(`https://api-anoncybfakeplayer.herokuapp.com/dorking?dork=${dork}`, {method: 'get'})
					hasil = `${anu.result}`
					frhan.sendMessage(from, hasil, MessageType.text, {quoted: mek})
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break  
			case 'encode64':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				encode64 = `${body.slice(10)}`
				anu = await fetchFxc7(`https://api.vhtear.com/encode_string?string=${encode64}&apikey=${VthearApi}`, {method: 'get'})
				frhan.sendMessage(from, anu.result.encode_string, MessageType.text, {quoted: mek})
				} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			break 
			case 'decode64':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				decode64 = `${body.slice(10)}`
				anu = await fetchFxc7(`https://api.vhtear.com/decode_string?string=${decode64}&apikey=${VthearApi}`, {method: 'get'})
				frhan.sendMessage(from, anu.result.decode_string, MessageType.text, {quoted: mek})
				} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			break 
			case 'img2base64':
			  imageToBase64(`${args[0]}`)
    .then(
        (response) => {
          reply(response)
        }
    )
    .catch(
        (error) => {
            console.log(error); // Logs an error if there was one
        }
    )
    break
			case 'hexaencode':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				hexaencode = `${body.slice(12)}`
				anu = await fetchFxc7(`https://api.vhtear.com/hex_to_text?string=${hexaencode}&apikey=${VthearApi}`, {method: 'get'})
				frhan.sendMessage(from, anu.result.hex_code, MessageType.text, {quoted: mek})
				} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			break 
			case 'hexadecode':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				hexadecode = `${body.slice(12)}`
				anu = await fetchFxc7(`https://api.vhtear.com/hex_to_text?string=${hexadecode}&apikey=${VthearApi}`, {method: 'get'})
				frhan.sendMessage(from, anu.result.result_text, MessageType.text, {quoted: mek})
				} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			break 
				case 'encbinary':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				encbinary = `${body.slice(11)}`
					anu = await fetchFxc7(`https://api.anoncybfakeplayer.com/api/binary/?encode=${encbinary}`, {method: 'get'})
					frhan.sendMessage(from, `${anu.result}`, MessageType.text, {quoted: mek})
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break  
				case 'decbinary':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				decbin = `${body.slice(11)}`
					anu = await fetchFxc7(`https://api.anoncybfakeplayer.com/api/binary/?decode=${decbin}`, {method: 'get'})
					frhan.sendMessage(from, `${anu.result}`, MessageType.text, {quoted: mek})
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break  
				case 'encoctal':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				encoc = `${body.slice(10)}`
					anu = await fetchFxc7(`https://api.anoncybfakeplayer.com/api/octal/?encode=${encoc}`, {method: 'get'})
					frhan.sendMessage(from, `${anu.result}`, MessageType.text, {quoted: mek})
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender)
					break  
				case 'decoctal':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				decoc = `${body.slice(10)}`
					anu = await fetchFxc7(`https://api.anoncybfakeplayer.com/api/octal/?decode=${decoc}`, {method: 'get'})
					frhan.sendMessage(from, `${anu.result}`, MessageType.text, {quoted: mek})
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
					break  
				break 
			case 'hashidentifier':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					  hash = `${body.slice(16)}`
					  anu = await fetchFxc7(`https://freerestapi.herokuapp.com/api/v1/hash-identifier?hash=${hash}`)
					  hasilhash = `Tipe: *${anu.hash_type}*\nChar Tipe: *${anu.char_type}*`
					  frhan.sendMessage(from, hasilhash, MessageType.text, {quoted: mek})
					  } catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender)
					  break 
// akhir encrypt & decrypt Fitur

                case 'addbucin':
                if (!isOwner) return reply(mess.only.ownerB)
				huu = body.slice(10)
						bucinrandom.push(huu)
						fs.writeFileSync('./database/json/bucin.json', JSON.stringify(bucinrandom))
						reply(`Sukses, Kata \n*${huu}*\n Telah Ditambahkan ke database`)
					break
					case 'bucin':
						if (isBanned) return reply(mess.only.benned)    
						if (!isUser) return reply(mess.only.userB)
						hasil = bucinrandom[Math.floor(Math.random() * (bucinrandom.length))]
						frhan.sendMessage(from, '*'+hasil+'*', MessageType.text, {quoted: mek})
						await limitAdd(sender)
					break
					case 'bacotandilan':
						if (isBanned) return reply(mess.only.benned)    
						if (!isUser) return reply(mess.only.userB)
						hasil = randomdilan[Math.floor(Math.random() * (randomdilan.length))]
						frhan.sendMessage(from, '*'+hasil+'*\n\n~ *Dilan*', MessageType.text, {quoted: mek})
						await limitAdd(sender)
					break 
				case 'moddroid':
				try {
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchFxc7(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=${TobzApi}`)
					hepi = anu.result[0] 
					teks = `╭─「 *MOD DROID SCRAPPER* 」\n│• *Nama*: ${anu.result[0].title}\n│• *Publisher*: ${hepi.publisher}\n│• *Mod info:* ${hepi.mod_info}\n│• *Size*: ${hepi.size}\n│• *Latest version*: ${hepi.latest_version}\n│• *Genre*: ${hepi.genre}\n│• *Link:* ${hepi.link}\n│• *Download*: ${hepi.download}\n╰─────────────────────`
					buffer = await getBuffer(hepi.image)
					frhan.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
					} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender)
			break
			case 'happymod':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
			anu = await fetchFxc7(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=${TobzApi}`)
			hupo = anu.result[0] 
			teks = `╭─「 *HAPPY MOD SCRAPPER* 」\n│• *Nama*: ${anu.result[0].title}\n│• *Version*: ${hupo.version}\n│• *Size:* ${hupo.size}\n│• *root*: ${hupo.root}\n│• *Purchase*: ${hupo.price}\n│• *Link*: ${hupo.link}\n│• *Download*: ${hupo.download}\n╰─────────────────────`
			buffer = await getBuffer(hupo.image)
			frhan.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender)
			break 
		case 'tiktoksearch':
			try {
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
			anu = await fetchFxc7(`https://api.vhtear.com/tiktokhastag?query=${body.slice(14)}&apikey=${VthearApi}`, {method: 'get'})
			tts = '====================================\n'
			for (let tk of anu.result){
			tts += `• *Title:* ${tk.title}\n• *Nama:* ${tk.name}\n• *Username:* ${tk.nickName}\n• *Link:* ${tk.urlVideo}\n====================================\n`
			}
			reply(tts.trim())
			} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender)
		break
		case 'wattpad':
			try {
			if (isBanned) return reply(mess.wait.benned)
			if (!isUser) return reply(mess.only.userB)
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (args.length < 1)return reply('Nama Channelnya??')
			reply(mess.wait)
			wttpd = `${body.slice(9)}`
			anu = await fetchFxc7(`http://nzcha-apii.herokuapp.com/wattpad-search?q=${wttpd}`, {method: 'get'})
			wattp = '===========================\n'
			for (let wpadd of anu.result){
			wattp += `• *Title:* ${wpadd.title}\n• *Link Url:* ${wpadd.url}\n===========================\n`
			}
			reply(wattp.trim())
			} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender)
		break 
		case 'bacawattpad':
			try {
			if (isBanned) return reply(mess.wait.benned)
			if (!isUser) return reply(mess.only.userB)
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (args.length < 1)return reply('url?')
			reply(mess.wait)
			if (!isUrl(args[0]) && !args[0].includes('wattpad')) return reply(mess.error.Iv)
			anu = await fetchFxc7(`http://api.lolhuman.xyz/api/wattpad?apikey=${LolApi}&url=${args[0]}`, {method: 'get'})
			hasilnya = `${anu.result.title}\n\n${anu.result.story}\n\nHalaman Selanjutnya:\n${anu.result.nextpage}`
			reply(hasilnya)
			} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender)
		break  
		case 'tanggaljadian':
			try {
			if (isBanned) return reply(mess.wait.benned)
			if (!isUser) return reply(mess.only.userB)
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (args.length < 1) return reply(`tanggal berapa??\n_Example: ${prefix}tanggaljadian ${Jadian}`)
			tggl = body.slice(15)
			ja = tggl.split("/")[0];
			di = tggl.split("/")[1];
			an = tggl.split("/")[2];
			anu = await fetchFxc7(`https://videfikri.com/api/primbon/tgljadian/?tgl=${ja}&bln=${di}&thn=${an}`, {method: 'get'})
			frhan.sendMessage(from, anu.result.hasil, MessageType.text, {quoted: mek})
			} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender)
		break 
		case 'tanggallahir':
			try {
			if (isBanned) return reply(mess.wait.benned)
			if (!isUser) return reply(mess.only.userB)
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			if (args.length < 1) return reply('tanggal berapa??\n_Example: !tanggallahir 15/03/2002')
			tggl = body.slice(14)
			ja = tggl.split("/")[0];
			di = tggl.split("/")[1];
			an = tggl.split("/")[2];
			anu = await fetchFxc7(`https://api.vhtear.com/ramalweton?tgl=${ja}&bln=${di}&thn=${an}&apikey=${VthearApi}`, {method: 'get'})
			frhan.sendMessage(from, anu.result.hasil, MessageType.text, {quoted: mek})
			} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender)
		break 
			case 'zodiak':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('_Example: !zodiak taurus')
				anu = await fetchFxc7(`https://api.vhtear.com/zodiak?query=${body.slice(8)}&apikey=${VthearApi}`, {method: 'get'})
				hzodiak = `• *Zodiak:* ${anu.result.zodiak}\n• *Nomer Keberuntungan:* ${anu.result.nomorKeberuntungan}\n• ${anu.result.ramalan}`
				reply(mess.wait)
				buff = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS-48FfFR7hqlRBp4rZhVISyO9YRUvhTMnGw&usqp=CAU`)
				frhan.sendMessage(from, buff, image, {quoted: mek, caption: hzodiak})
				} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender)
			break
			case 'randomexo':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				anu = await fetchFxc7(`http://api.lolhuman.xyz/api/random/exo?apikey=${LolApi}`, {method: 'get'})
				buff = await getBuffer(anu.result)
				frhan.sendMessage(from, buff, image, {quoted: mek, caption: 'EXO.....'})
				} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender)
			break 
			case 'blackpink':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				anu = await fetchFxc7(`https://api.shizukaa.xyz/blackpink?apikey=itsmeiky633`, {method: 'get'})
				buff = await getBuffer(anu.result)
				frhan.sendMessage(from, buff, image, {quoted: mek, caption: 'BLACK PINK.....'})
				} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender)
			break 
			case 'randombts':
				try {
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				anu = await fetchFxc7(`http://api.lolhuman.xyz/api/random/bts?apikey=${LolApi}`, {method: 'get'})
				buff = await getBuffer(anu.result)
				frhan.sendMessage(from, buff, image, {quoted: mek, caption: 'BTS.....'})
				} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender)
			case 'antivirtexx':
			await costum(antivirtexx(), MessageType.text, FarhanGans, `Buset Dahh Etekel🔥`)
			break 
			case 'addstatus':
					if (!isOwner) return reply(mess.only.ownerB)
					frhan.sendMessage('status@broadcast', `${args[0]}`, extendedText)
					reply('✓Sukses...')
			break 
	// new features
			case 'listonline':
			if (isBanned) return reply(mess.only.benned)    
			if (!isUser) return reply(mess.only.userB)
			
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
		    let online = [...Object.keys(frhan.chats.get(ido).presences), frhan.user.jid]
		    frhan.sendMessage(from, `list online group ${groupMetadata.subject}\n` + online.map(v => '=> @' + v.replace(/@.+/, '')).join`\n`, MessageType.text, { quoted: mek, contextInfo: { mentionedJid: online }
		    })
			break
			case 'grouplist':
			if (!isOwner) return reply(mess.only.ownerB)
			let grouppp = frhan.chats.array.filter(v => v.jid.endsWith('g.us')).map(v =>`${v.name}\n${v.jid} [${v.read_only ? 'Left' : 'Joined'}]`).join`\n\n`
			reply('List Groups:\n' + grouppp)
			break 
			case 'chatlist':
					frhan.updatePresence(from, Presence.composing)  
					teks = 'This is list of chat number :\n'
					for (let all of totalchat) {
						teks += `~> @${all}\n`
					}
					teks += `Total : ${totalchat.length}`
					frhan.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": totalchat}})
					break
		
		case 'return':
			if (!isOwner) return reply(mess.only.ownerB)
			return frhan.sendMessage(from, JSON.stringify(eval(args.join(' '))), MessageType.text, { quoted: mek })
		break 
		case 'restart':
		if (!isOwner) return reply(mess.only.ownerB)
		cosProduct('_*[ + ] RESTART BOT SUCCESS*_', text, FarhanGans, FarhanGans2)
		return process.send('reset')
		break 
		case 'repeat':
		if (isLimit(sender)) return reply(`Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`)
		if (!isUser) return reply(mess.only.userB)
		if (isBanned) return reply(mess.only.benned)
		reply(mess.wait)
		if (args.length < 1) return reply(`Kirim perintah *${prefix}repeat [jumlah|teks]`)
		teks = args.join(' ').split("|")
		if(isNaN(teks[0])) return reply('Jumlah Harus berupa angka!')
		if (teks[0] < 1000) return reply('repeater max 1000')
		repeat(teks[1], teks[0])
		break
		case 'eval':
			if (!isOwner) return reply(mess.only.ownerB)
			const q = args.join(' ').toString('utf8')
			console.log(`${pushname2} Mencoba Executed Command ${command}`)
			if (!isOwner) return reply(mess.only.ownerB)
			if (!q) return reply('Harap masukkan code JavaScript!')
			try {
			let evaled = await eval(q)
			if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
			} catch (e) {
			reply(e)
			}
		break 
		case 'run':
		if (!isOwner) return reply(mess.only.ownerB)
		try {
		sy = args.join(' ')
		return eval(sy)
		} catch(e) {
		reply(`${e}`)
		}
		break 
		case 'bug':
					if (isGroupAdmins || isOwner) {
				frhan.toggleDisappearingMessages(from, 0)
						} else {
					reply(mess.only.owner)
					}
					await limitAdd(sender)
		break
case 'nyimak':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('reply pesan bot!!!')
					if (!mek.message.extendedTextMessage.contextInfo.participant === frhan.user.jid) return reply(mess.only.replyB)
					var nyimak = await frhan.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
					members = []
					teks = ''
					teks += '\n\n'
					no = 0
					for (let nyimaknya of nyimak.read) {
						no += 1
						teks += `[${no.toString()}] @${nyimaknya.jid}\n`
						members.push(nyimaknya.jid)
					}
					mentions(teks, members, true)
					break 
			case 'test':
					frhan.sendMessage(from, {templateMessage: { fourRowTemplate: { content: {namespace: 'my-namespace', localizableParams: [ ], params: ['hello!']}, buttons: [ { index: 0, quickReplyButton: { displayText: { params: ['my name jeff'] }} }, {index: 1, quickReplyButton: {displayText: { params: ['my name NOT jeff'], }}}]}}},{}, MessageType.templateMessage)
					break
		case 'fakedeface':
		if (!isUser) return reply(mess.only.userB)
		if (isBanned) return reply(mess.only.benned)
		tes = body.slice(12)
		tes1 = tes.split("|")[0];
		tes2 = tes.split("|")[1];
		tes3 = tes.split("|")[2];
		var imgbb = require('imgbb-uploader')
		run = getRandom('.jpeg')
		encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		media = await frhan.downloadAndSaveMediaMessage(encmedia)
		ddatae = await imageToBase64(JSON.stringify(media).replace(/\"/gi, ''))
		fs.writeFileSync(`${run}`, ddatae, 'base64')
		sendFakeThumb(from, tes1, `${tes2}`, `${tes3}`, fs.readFileSync(run))
		break
			case 'fakedef':
				var nn = body.slice(12)
				var urlnye = nn.split("|")[0];
				var titlenye = nn.split("|")[1];
				var descnye = nn.split("|")[2];
				imgbbb = require('imgbb-uploader')
				run = getRandom('.jpeg')
				encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
				media = await frhan.downloadAndSaveMediaMessage(encmedia)
				ddatae = await imageToBase64(JSON.stringify(media).replace(/\"/gi, ''))

				frhan.sendMessage(from, {

					text: `${urlnye}`,

					matchedText: `${urlnye}`,

					canonicalUrl: `${urlnye}`,

					description: `${descnye}`,

					title: `${titlenye}`,

					jpegThumbnail: ddatae
				}, 'extendedTextMessage', { detectLinks: false })
				break
				case 'fakeimg':
				case 'img':
            var kontol = body.slice(9)
            var fake1 = kontol.split("|")[0];
            var fake2 = kontol.split("|")[1];
            var bto = fs.readFileSync(`./database/image/${fake1}.jpeg`)
            var ato = fs.readFileSync(`./database/image/${fake2}.jpeg`)
            var option = {
              "thumbnail": ato}
            frhan.sendMessage(from, bto, "imageMessage", option)
                    break
           case 'faketoko':
           case 'toko':
                    var punya_wa = "0@s.whatsapp.net"
                    var _buffer = await getBuffer("https://i.ibb.co/74X1yX2/8da45cd00cb1.jpg")
                    const ini_cstoko = {
                        contextInfo: {
                            participant: punya_wa,
                            remoteJid: 'status@broadcast',
                            quotedMessage: {
                                productMessage: {
                                    product: {
                                        currencyCode: "Usd",
                                        title: "Jual Sc",
                                        priceAmount1000: 50000000,
                                        productImageCount: 100,
                                        productImage: {
                                            jpegThumbnail: _buffer
                                        }
                                    },
                                    businessOwnerJid: "0@s.whatsapp.net"
                                }
                            }
                        }
                    }
                    frhan.sendMessage(from, "Open Bo Xixixi!", text, ini_cstoko)
                    break
		case 'turnoff':
		if (!isOwner) return reply(mess.only.ownerB)
		costum('*_[ + ] TURN OFF BOT SUCCESS_*', MessageType.text, FarhanGans, FarhanGans2)
		setTimeout( () => {
		process.exit()
		}, 2000)
		break
		case 'testing':
			if (!isOwner) return reply(mess.only.ownerB)
			let i = 1;
			const start = Date.now();
			while (i <= 10) {
			reply(`Menguji Speed, item ${i} - 10`)
			i++;
			}
			reply('Terakhir...')
			const diff = Date.now() - start;
			costum(`Setiap pesan diterima ${diff / 21} ms sender`, MessageType.text, FarhanGans, FarhanGans2)
		break
		case 'addbadword':
			if (!isGroupAdmins) return reply(mess.only.admin)
			const bw = body.slice(12)
			bad.push(bw)
			fs.writeFileSync('./database/json/bad.json', JSON.stringify(bad))
			reply('Success ✓')
		break
		case 'dellbadword':
			if (!isOwner) return reply(mess.only.ownerB)
			if (!isGroupAdmins) return reply(mess.only.admin)
			let dbw = body.slice(12)
			bad.splice(dbw)
			fs.writeFileSync('./database/json/bad.json', JSON.stringify(bad))
			reply('Success ✓')
		break 
		case 'listbadword':
			let lbw = `list BAD WORD\nTotal : ${bad.length}\n`
			for (let i of bad) {
			lbw += `➸ ${i.replace(bad)}\n`
			}
			reply(lbw)
		break 
		case 'getsticker':
			if (isBanned) return reply(mess.only.benned)    
			if (!isUser) return reply(mess.only.userB)
			
			if (!isGroup) return reply(mess.only.group)
					namastc = body.slice(12)
					result = fs.readFileSync(`./database/sticker/${namastc}.webp`)
					frhan.sendMessage(from, result, sticker, {quoted :mek})
					break
				case 'stickerlist':
				if (isBanned) return reply(mess.only.benned)    
			if (!isUser) return reply(mess.only.userB)
			
			if (!isGroup) return reply(mess.only.group)
					teks = '*Sticker List :*\n\n'
					for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*`
					frhan.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
				case 'addsticker':
				if (isBanned) return reply(mess.only.benned)    
			if (!isUser) return reply(mess.only.userB)
			
			if (!isGroup) return reply(mess.only.group)
					if (!isQuotedSticker) return reply('Reply stiker nya')
					svst = body.slice(12)
					if (!svst) return reply('Nama sticker nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await frhan.downloadMediaMessage(boij)
					setiker.push(`${svst}`)
					fs.writeFileSync(`./database/sticker/${svst}.webp`, delb)
					fs.writeFileSync(`./database/json/stik.json`, JSON.stringify(setiker))
					frhan.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}stickerlist`, MessageType.text, { quoted: mek })
					break
				case 'addvn':
				if (isBanned) return reply(mess.only.benned)    
			if (!isUser) return reply(mess.only.userB)
			
			if (!isGroup) return reply(mess.only.group)
					if (!isQuotedAudio) return reply('Reply vnnya!')
					svst = body.slice(7)
					if (!svst) return reply('Nama audionya apa gan?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await frhan.downloadMediaMessage(boij)
					audionye.push(`${svst}`)
					fs.writeFileSync(`./database/audio/${svst}.opus`, delb)
					fs.writeFileSync('./database/json/audio.json', JSON.stringify(audionye))
					frhan.sendMessage(from, `Sukses Menambahkan Voice note\nCek dengan cara ${prefix}vnlist`, MessageType.text, { quoted: mek })
					break
				case 'vn':
				if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
			
			if (!isGroup) return reply(mess.only.group)
					namastc = `${body.slice(4)}`
					buffer = fs.readFileSync(`./database/audio/${namastc}.opus`)
					frhan.sendMessage(from, buffer, audio, {quoted: mek, mimetype: Mimetype.mp4Audio, ptt: true})
					break
				case 'vnlist':
				if (isBanned) return reply(mess.only.benned)    
			if (!isUser) return reply(mess.only.userB)
			
			if (!isGroup) return reply(mess.only.group)
					teks = '*List Vn:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*`
					frhan.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
					break
				case 'addimage':
				if (isBanned) return reply(mess.only.benned)    
			if (!isUser) return reply(mess.only.userB)
			
			if (!isGroup) return reply(mess.only.group)
					if (!isQuotedImage) return reply('Reply imagenya!')
					svst = body.slice(10)
					if (!svst) return reply('Nama imagenya apa gan?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await frhan.downloadMediaMessage(boij)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./database/image/${svst}.jpeg`, delb)
					fs.writeFileSync('./database/json/image.json', JSON.stringify(imagenye))
					frhan.sendMessage(from, `Sukses Menambahkan image\nCek dengan cara ${prefix}imagelist`, MessageType.text, { quoted: mek })
					break
				case 'image':
				if (isBanned) return reply(mess.only.benned)    
			if (!isUser) return reply(mess.only.userB)
			
			if (!isGroup) return reply(mess.only.group)
					namastc = body.slice(7)
					buffer = fs.readFileSync(`./database/image/${namastc}.jpeg`)
					frhan.sendMessage(from, buffer, image, { quoted: mek, caption: `Result From Database : ${namastc}.jpeg` })
					break
				case 'imagelist':
				if (isBanned) return reply(mess.only.benned)    
			if (!isUser) return reply(mess.only.userB)
			
			if (!isGroup) return reply(mess.only.group)
					teks = '*List Image :*\n\n'
					for (let awokwkwk of imagenye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagenye.length}*`
					frhan.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
					break
				case 'addvideo':
				if (isBanned) return reply(mess.only.benned)    
			if (!isUser) return reply(mess.only.userB)
			
			if (!isGroup) return reply(mess.only.group)
					if (!isQuotedVideo) return reply('Reply videonya!')
					svst = body.slice(10)
					if (!svst) return reply('Nama videonya apa gan?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await frhan.downloadMediaMessage(boij)
					videonye.push(`${svst}`)
					fs.writeFileSync(`./database/video/${svst}.mp4`, delb)
					fs.writeFileSync('./database/json/video.json', JSON.stringify(videonye))
					frhan.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}videolist`, MessageType.text, { quoted: mek })
					break
				case 'video':
				if (isBanned) return reply(mess.only.benned)    
			if (!isUser) return reply(mess.only.userB)
			
			if (!isGroup) return reply(mess.only.group)
					namastc = body.slice(7)
					buffer = fs.readFileSync(`./database/video/${namastc}.mp4`)
					frhan.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
					break
				case 'videolist':
				if (isBanned) return reply(mess.only.benned)    
			if (!isUser) return reply(mess.only.userB)
			
			if (!isGroup) return reply(mess.only.group)
					teks = '*List Video :*\n\n'
					for (let awokwkwk of videonye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}*`
					frhan.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
				break 
				case 'exec':
				const cmd = body.slice(6)
				exec(cmd, (err, stdout) => {
				if(err) return frhan.sendMessage(from, `root@FarhanXCode7:~ ${err}`, MessageType.text, { quoted: mek })
				if (stdout) {
			costum(stdout, MessageType.text, FarhanGans, FarhanGans2)
				}
				})
				break
				default:
					if (body.startsWith(`${prefix}${command}`)) {
					reply(`Maaf kak, Command Salah Coba Periksa Kembali`)
				}
				if (/^>/.test(Link)) {
				let txt = Link.replace(/^>/, '')
				let type = Function
				if (/await/.test(Link)) type = (async () => {}).constructor
				let func = new type('print', 'frhan', 'MessageType', 'mek', 'text', 'from', 'image', 'os', 'fetch', txt)
				console.log('[EvalF]', func.toString())
				let output
				try {
				output = await func((...args) => {
				console.log('[EvalP]', ...args)
				frhan.sendMessage(from, util.format(...args), MessageType.extendedText, {quoted: mek})
				}, frhan, MessageType, mek, MessageType.text, from, await image, os, fetch)
				console.log('[EvalO]', output)
				frhan.sendMessage(from, util.format(output), MessageType.extendedText, {quoted: mek})
				} catch (e) {
				console.error('[EvalE]', e)
				frhan.sendMessage(from, util.format(e), MessageType.extendedText, {quoted: mek})
			}
		}
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[Manurios]','aqua'), 'Gabisa Bahasa Enggres', color(sender.split('@')[0]))
					}
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'white'))
		}
	})
}
starts()
