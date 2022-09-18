const burger = document.querySelector('#burger');

if (burger){
  burger.addEventListener('click', () => {
    document.querySelector('#menu').classList.toggle('hidden');
  });
}
