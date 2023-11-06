import onAriaKeyUpClick from "scripts/onAriaKeyUpClick"

const btnToTop = document.querySelector('#to-top')

if(btnToTop) {
  const action = () => {
    window.scrollTo({
      top:0,
      behavior: "smooth"
    })
  }

  btnToTop.setAttribute('tabIndex', '0')
  btnToTop.addEventListener('click', action)
  btnToTop.addEventListener('keyup', onAriaKeyUpClick)
}