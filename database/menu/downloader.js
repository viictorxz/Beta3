const downloader = (prefix, botName, ownerName) => {
	return `
「 MAgagu* 」
◪ *INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Creator: MAgagu
◪ *ABOUT*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}chatlist
  ├─ ❏ ${prefix}ping
  └─ ❏ ${prefix}bugreport
◪ *DOWNLOADER*
  │
  ├─ ❏ ${prefix}pinterest
  ├─ ❏ ${prefix}ytmp3
  ├─ ❏ ${prefix}ytmp4
  └─ ❏ ${prefix}tiktok`
}
exports.downloader = downloader