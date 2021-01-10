'use strict'

var sideBar = document.querySelector('.aside-right')
var hamburger = document.querySelector('.hamburger')
hamburger.addEventListener('click', function (e) {
  hamburger.classList.toggle('clicked')
  sideBar.classList.toggle('slide-in')
})
window.addEventListener('click', function (e) {
  var getHamburger = document.querySelector('.hamburger')
  var checkClassList = getHamburger.classList.contains('clicked')
  var checkClicked = e.target.classList.contains('hamburger')

  if (checkClassList && !checkClicked) {
    hamburger.classList.toggle('clicked')
    sideBar.classList.toggle('slide-in')
  }
})
