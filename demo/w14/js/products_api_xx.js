// import { products_xx, all_products_xx } from '../api/productsData.js';

const url = 'https://www.course-api.com/javascript-store-products';

let products_xx = [];

const productContainer = document.querySelector('.products-container');

const fetchData = async(url) => {
    try {
        const response = await fetch(url);
        const data = response.json();
        console.log('fetch data', data)
        return data;
    } catch (error) {
        console.log(error)
    }
}

console.log('products_xx', products_xx);

const DisplayProducts = (products) => {
    let productsContent = products
        .map((product) => {
            const { name, price, image } = product.fields;
            return `
  <div class="single-product">
  <img
    src=${image[0].url}
    class="single-product-img img"
    alt=${name}
  />
  <footer>
    <h3 class="name">${name}</h3>
    <span class="price">$${price}</span>
  </footer>
</div>
`;
        })
        .join('');
    productContainer.innerHTML = productsContent;
};

document.addEventListener('DOMContentLoaded', async() => {
    products_xx = await fetchData(url);
    DisplayProducts(products_xx);
});