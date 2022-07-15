window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {

  const menuElement = document.querySelector(`.menu a[href*=${section.getAttribute('id')}]`)

  if (scrollY + innerHeight / 2 >= section.offsetTop && section.offsetTop + section.offsetHeight >= scrollY + innerHeight / 2) { 
    menuElement.classList.add('active')
  } else {
    menuElement.classList.remove('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}


function showNavOnScroll(){
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll(){
  if (scrollY > 400) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'right',
  distance: '30px',
  duration: 700,
}).reveal(`
  #home, 
  #home img, 
  #home .stats,
  #services header,
  #services .cards,
  #services .card,
  #about, 
  #about header, 
  #about .content,
  #contact header,
  #contact ul,
  #contact .button,
  #contact img`)