const heading = document.querySelector('h2');

console.dir(heading);

const pizzaList = document.querySelector('.pizza');
console.log(pizzaList.textContent);
pizzaList.insertAdjacentText('beforeend', 'pizza');
