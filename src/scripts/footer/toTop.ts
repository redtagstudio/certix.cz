import onAriaKeyUpClick from "scripts/onAriaKeyUpClick"
import debounce from "scripts/debounce"

const btnToTop = document.querySelector('#to-top')

if(btnToTop) {
  const action = () => {
    window.scrollTo({
      top:0,
      behavior: "smooth"
    })
  }

  btnToTop.addEventListener('click', action)
  btnToTop.addEventListener('keyup', onAriaKeyUpClick)

  const onScroll = debounce(() => {
    if(window.scrollY > 400) {
      btnToTop.classList.add('active')
    } else {
      btnToTop.classList.remove('active')
    }
  }, 250)

  window.addEventListener('scroll', onScroll)

  //Init state
  onScroll()
}