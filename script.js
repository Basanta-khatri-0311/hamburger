const hamburgerIcon = document.querySelector('.hamburger-menu-container')
const headerContainer = document.querySelector('.header-container')
const closeIcon = document.querySelector('.close-icon')
const clickToTop = document.querySelector('.go-to-top a')
const nav = document.querySelector('nav')
const mainContent = document.querySelector('.main-content'); 

hamburgerIcon.addEventListener('click', (e) => {
  e.stopPropagation()
  headerContainer.classList.add('menu-open')
})

nav.addEventListener('click',(e)=>e.stopPropagation())

closeIcon.addEventListener('click', () => {
  headerContainer.classList.remove('menu-open')
})
window.addEventListener('click', () => {
  headerContainer.classList.remove('menu-open')
})


clickToTop.addEventListener('click', () => {
  mainContent.scrollTo(0, 0)
})

