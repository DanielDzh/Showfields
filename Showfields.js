$(document).ready(function () {
   $('.header_burger').click(function (event) {
      $('.header_burger,.header_menu,.socset').toggleClass('active');
      $('body').toggleClass('lock');
   });
});
const body = document.querySelector('body');

let unlock = true;

const timeout = 800;

function bodyLock() {
   body.classList.add('lock');

   unlock = false;
   setTimeout(function () {
      unlock = true;
   }, timeout);
}

function bodyUnlock() {
   setTimeout(function () {
      body.classList.remove('lock');
   }, timeout)
}