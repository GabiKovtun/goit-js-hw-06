const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients')

const ingredientEl = ingredients.forEach(element => {
  const liEl = document.createElement('li');
  liEl.textContent = element;
liEl.classList.add('item');
  ulEl.append(liEl);
});

