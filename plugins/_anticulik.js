let fs = require('fs')
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return
    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('Undangan untuk bergabung') || m.text.startsWith('Invitation to join') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
    let teks = `*SEWA BOT*\n
• 1 Minggu     - Rp 5,000
• 1 Bulan         - Rp 20,000
• 6 Bulan         - Rp 70,000
• 12 Bulan       - Rp 100,000

Untuk Satu Grup Saja
Silahkan Hubungi Owner @${global.owner[0]}
`
    this.reply(m.chat, teks, m)
    const data = global.owner.filter(([id, isCreator]) => id && isCreator)
    this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
    }
}

module.exports = handler
