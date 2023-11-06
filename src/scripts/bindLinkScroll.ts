const bindLinkScroll = (e: Event) => {
  e.preventDefault()

  const href = (e.target as HTMLAnchorElement).getAttribute('href')
  if(!href) return

  const element = document.querySelector(href)
  if (!element) { return }
  
  const rect = element.getBoundingClientRect()
  window.scrollTo({
    top: rect.top + window.scrollY - 50,
    behavior: "smooth"
  })

  window.history.replaceState(
    window.history.state,
    (window as unknown as Window & {title: string}).title,
    href
  )
}

const links = document.querySelectorAll('a[href^="#"]')

if(links) {
  links.forEach(link => {
    link.addEventListener('click', bindLinkScroll)
  })
}