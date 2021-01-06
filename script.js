let sideBar = document.querySelector('.aside-right')
let hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click', (e) => {
 hamburger.classList.toggle('clicked')
 sideBar.classList.toggle('slide')
})
