let burgerMenu = document.querySelector('.burger-menu');
let body = document.body;

let openMenu = (event) => {
   let target = event.target.closest('.burger-menu');

   if(target) {
    body.classList.toggle('active');

   }
}

burgerMenu.addEventListener('click', openMenu);