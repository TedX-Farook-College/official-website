// Navigation Menu

const toggle = document.getElementById("toggle");
const sidebar = document.getElementById("sidebar");



document.onclick = function(e){
    if(e.target.id !=='sidebar' && e.target.id !=='toggle')
    {
        toggle.classList.remove('active');
        sidebar.classList.remove('active');
    }
}


toggle.onclick = function(){
    toggle.classList.toggle('active');
    sidebar.classList.toggle('active')
}
// Dev


// Dev

// Navbar

window.addEventListener('scroll', () => {
  var nav = document.querySelector('.nav')
  if (window.pageYOffset > 80) {
    nav.classList.add('nav-bg')
  } else {
    nav.classList.remove('nav-bg')
  }
})

// tab section

function setupTab() {
  document.querySelectorAll('.tab__button').forEach((button) => {
    button.addEventListener('click', () => {
      const sideBar = button.parentElement
      const tabContainer = sideBar.parentElement
      const tabNumber = button.dataset.forTab
      const tabToActivate = tabContainer.querySelector(
        `.tab__content[data-tab="${tabNumber}"]`,
      )

      sideBar.querySelectorAll('.tab__button').forEach((button) => {
        button.classList.remove('tab__button--active')
      })
      tabContainer.querySelectorAll('.tab__content').forEach((tab) => {
        tab.classList.remove('tab__content--active')
      })

      button.classList.add('tab__button--active')
      tabToActivate.classList.add('tab__content--active')
    })
  })
}
document.addEventListener('DOMContentLoaded', () => {
  setupTab()
})
