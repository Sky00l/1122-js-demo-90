import { products_xx, all_products_xx } from './p1_data_xx.js';

const productContainer = document.querySelector('.products-container');

console.log('products_xx', products_xx);

const DisplayProducts = (products) => {};

document.addEventListener('DOMContentLoaded', () => {
  DisplayProducts(products_xx);
});
