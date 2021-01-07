let sideBar = document.querySelector('.aside-right')
let hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click', (e) => {
 hamburger.classList.toggle('clicked')
 sideBar.classList.toggle('slide')
})

window.addEventListener('click', (e) => {
 let getHamburger = document.querySelector('.hamburger');
 if(getHamburger.classList.contains('clicked'){
     getHamburger.classList.remove('clicked')
 sideBar.classList.remove('slide')
    }

})
