const menuButton = document.querySelector('.menu-toggle');
const navigation = document.getElementById('main-navigation');
const mobile = window.matchMedia('(max-width: 800px)');

function setMenuOpen(open) {
  menuButton.setAttribute('aria-expanded', String(open));
}

menuButton.hidden = false;
menuButton.addEventListener('click', () => {
  setMenuOpen(menuButton.getAttribute('aria-expanded') === 'false');
});

navigation.addEventListener('click', (event) => {
  if (mobile.matches && event.target.closest('a')) setMenuOpen(false);
});

menuButton.closest('.topbar').addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && mobile.matches && menuButton.getAttribute('aria-expanded') === 'true') {
    setMenuOpen(false);
    menuButton.focus();
  }
});

mobile.addEventListener('change', () => setMenuOpen(false));
