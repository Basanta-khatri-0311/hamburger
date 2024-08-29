const hamburgerIcon = document.querySelector('.hamburger-menu-container')
const headerContainer =  document.querySelector('.header-container')
const closeIcon = document.querySelector('.close-icon')

hamburgerIcon.addEventListener('click',()=>{
  headerContainer.classList.add('menu-open')
})
closeIcon.addEventListener('click',()=>{
  headerContainer.classList.remove('menu-open')
})

