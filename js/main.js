let btn1 = document.querySelector('#btn1');
let opros = document.querySelector('.opros');

const random = (min, max) => {
  const rand = min + Math.random() * (max - min + 1);
  return Math.floor(rand);
}

let btn = document.querySelector('#btn');
btn.addEventListener('mouseenter', () => {
  btn.style.left = `${random(0, 90)}%`;
  btn.style.top = `${random(0, 90)}%`;
})

btn.addEventListener('click', function(){
  opros.textContent = 'Error, please try again!'
})

btn1.addEventListener('click', function(){
  opros.textContent = 'Thanks for being honest;)'
})
