// import { products_xx, all_products_xx } from './p1_data_xx.js';

import { _supabase } from './clientSupabase_90.js';

let products_xx = [];

const getProductsSupabase_xx = async () => {
    try {
        let { data, error } = await _supabase.from('products_90').select('*');
        console.log('product data', data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

const productContainer = document.querySelector('.products-container');

const companyBtns = document.querySelectorAll('.company-btn')

console.log('products_xx', products_xx);

const displayProducts = (products) => {
    let productsContent = products
        .map((product) => {
            const { id, title, price, category, img, remote_url } = product;
            return `
        <div class="single-product">
        <img
          src=${img}
          class="single-product-img img"
          alt=${title}
        />
        <footer>
          <h3 class="name">${title} (${id})</h3>
          <span class="price">$${price}</span>
        </footer>
      </div>
    `;
        })
        .join('');
    productContainer.innerHTML = productsContent;
};

companyBtns.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
        const companyName = e.currentTarget.dataset.id
        console.log('companyName', companyName);
        if (companyName === 'all') {
            products_xx = await getProductsSupabase_xx();
        } else {

            let { data: company, error1 } = await _supabase
                .from('company_90')
                .select('id')
                .eq('name', companyName);
            console.log('company id', company[0].id);
            let { data, error2 } = await _supabase
                .from('products_90')
                .select('*')
                .eq('companyId', company[0].id);
            console.log(`${companyName} products`, data);
            products_xx = data;


        }
        displayProducts(products_xx);
    })

})

document.addEventListener('DOMContentLoaded', async () => {
    products_xx = await getProductsSupabase_xx();
    displayProducts(products_xx);
});