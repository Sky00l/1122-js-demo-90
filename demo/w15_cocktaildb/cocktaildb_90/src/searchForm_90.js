import get from './getElement.js';
import presentDrinks from './presentDrinks_90.js'
const form = get('.search-form');

const input = get('[name="drink"]');

// console.log('form', form);
// console.log('input', input);

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

form.addEventListener('keyup', (e) => {
  e.preventDefault();
  console.log('input', input.value)
  const value = input.value;
  if(!value) return;
    presentDrinks(`${baseURL}${value}`);
  
});