const header = document.getElementsByTagName('header')[0]

function getTime() {
  nowTime = new Date
  nowHour = ("00" + nowTime.getHours()).slice(-2)
  nowMinute = ("00" + nowTime.getMinutes()).slice(-2)
  nowSecond = ("00" + nowTime.getSeconds()).slice(-2)

  return nowHour + " : " + nowMinute + " : " + nowSecond
}

header.innerHTML = `<h1>${getTime()}</h1>`
setInterval(() => {
  header.innerHTML = `<h1>${getTime()}</h1>`
},1000)