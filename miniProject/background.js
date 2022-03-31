const bodyBackground = document.querySelector('body')
const imgs = ["0.jpg", "1.jpg", "2.jpg", "3.jpg",]
let random = Math.random() * imgs.length

bodyBackground.style.background = `url(./imgs/${parseInt(random)}.jpg) no-repeat center center`
bodyBackground.style.backgroundSize = `cover`