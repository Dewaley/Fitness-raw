let sideBar = document.querySelector('.aside-right')
let hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click', (e) => {
  hamburger.classList.toggle('clicked')
  sideBar.classList.toggle('slide-in')
})
window.addEventListener('click', (e) => {
  let getHamburger = document.querySelector('.hamburger')
  let checkClassList = getHamburger.classList.contains('clicked')
  let checkClicked = e.target.classList.contains('hamburger')
  if (checkClassList && !checkClicked) {
    hamburger.classList.toggle('clicked')
    sideBar.classList.toggle('slide-in')
  }
})

