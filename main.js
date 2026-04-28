const topbtn = document.querySelector('.top-btn')

let lastScroll = window.scrollY

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY
  if (currentScroll > lastScroll) {
    topbtn.classList.add('show')
  } else if (currentScroll === 0) {
    topbtn.classList.remove('show')
  }
  lastScroll = currentScroll
})
