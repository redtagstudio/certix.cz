const menuToggle = document.querySelector('#menu-toggle')
const menu = menuToggle?.parentElement?.querySelector('ul')

if(menuToggle && menu) {
  const action = () => {
    menu.classList.toggle('active')
    menuToggle.classList.toggle('active')
  }

  menuToggle.addEventListener('click', action)

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 580) {
      menuToggle.classList.remove('active')
      menu.classList.remove('active')
    }
  })
}