const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  console.log('Button clicked');
  if (menu.classList.contains('active')) {
    console.log('Menu is active, toggling to inactive');
    menu.classList.remove('active');
    menu.classList.add('inactive');
  } else {
    console.log('Menu is inactive, toggling to active');
    menu.classList.remove('inactive');
    menu.classList.add('active');
  }
  menu.classList.toggle('hidden'); // Toggle the hidden class
  hamburger.classList.toggle('animate');
});