const toggle = document.querySelector('.toggleNav')

toggle.addEventListener('click', toggleNavbar)

function toggleNavbar() {
  const ul = document.querySelector('.flex-nav ul')
  ul.classList.toggle('open')
}
