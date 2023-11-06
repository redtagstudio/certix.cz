const onAriaKeyUpClick = (event: Event) => {
  if ((event as KeyboardEvent).key === 'Enter' || (event as KeyboardEvent).key === ' ') {
      event.preventDefault()
      event.stopPropagation()

      const element = event.target
      if (element instanceof HTMLElement) {
          element.click()
      } else if (element instanceof SVGElement) {
          const parent = element.parentElement
          if (parent instanceof HTMLElement) {
              parent.click()
          }
      }
  }
}

export default onAriaKeyUpClick
