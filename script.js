const hamburgerIcon = document.querySelector('.hamburger-menu-container')
const headerContainer = document.querySelector('.header-container')
const closeIcon = document.querySelector('.close-icon')
const clickToTop = document.querySelector('.go-to-top')

hamburgerIcon.addEventListener('click', (e) => {
  e.stopPropagation()
  headerContainer.classList.add('menu-open')
})

closeIcon.addEventListener('click', () => {
  headerContainer.classList.remove('menu-open')
})
window.addEventListener('click', () => {
  headerContainer.classList.remove('menu-open')
})


clickToTop.addEventListener('click', () => {
  window.scrollTo(0, 0)
})

