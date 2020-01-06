// const heading = document.querySelector('h2');

// console.dir(heading);

// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);
// pizzaList.insertAdjacentText('beforeend', 'pizza');

// CLASSESS!!!!
const pic = document.querySelector('.nice');
pic.classList.add('open');
console.log(pic.classList);

function toogleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toogleRound);
