window.onload = () => {
  const links = document.querySelector('.navbar-links')

  const btn = document.querySelector('.navbar-burger')

  btn.addEventListener('click', function () {
    links.classList.toggle('active')
  })
}
