import '../scss/main.scss';
import moment from 'moment'
// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀');
const name = "Ola";
const age = 20;
console.log(`Witaj w konsoli!
Jeżeli dotarłeś aż tu, to znaczy, że jesteś zainteresowany jak działa moja strona,
Spokojnie, nie mam nic do ukrycia:)`);

function greeting(name, age) {
  console.log(`Witaj! Moje imie to ${name} i mam ${age} lat.`);
}

greeting(name, age);

const hamburgerMenu = document.querySelector(".hamburger--js");

hamburgerMenu.addEventListener("click", () => {
  const nav = document.querySelector('.navigation--js');
  nav.classList.toggle('navigation--open');
});

const countDown = moment().startOf('day').fromNow();
console.log(countDown);