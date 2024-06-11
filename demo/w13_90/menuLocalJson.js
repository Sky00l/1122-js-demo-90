// import menu from './data_xx.js';
// const url = './api/data_xx.json';


const url = "./api/data_xx.json"
let menu = [];

const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');

const fetchData = async() => {
    try {
        const response = await fetch(url);
        const data = response.json();
        console.log('fetch menu', data)
        return data;
    } catch (error) {
        console.log(error)
    }
}

console.log('menu', menu);

const displayMenuItems = (menuItems) => {
    let displayMenu = menuItems
        .map((item) => {
            const {
                id,
                title,
                category,
                price,
                local_img,
                descrip
            } = item;
            return `
      <article class="menu-item">
      <img
        src=${local_img}
        alt="buttermilk"
        pancakes=""
        class="photo"
      />
      <div class="item-info">
        <header>
          <h4>${title}</h4>
          <h4 class="price">$${price}</h4>
        </header>
        <p class="item-text">
          ${descrip}
        </p>
      </div>
    </article>
      `;
        })
        .join('');
    // console.log('displayMenu', displayMenu);
    sectionCenter.innerHTML = displayMenu;
};

// const categories = ['all', 'breakfast', 'lunch', 'dinner', 'shakes'];

const displayMenuButtons = () => {
    const menuCategories = new Set(
        menu.map((item) => {
            return item.category;
        })
    );
    // console.log('menuCategories', menuCategories);

    const categories = ['all', ...menuCategories];
    // console.log('categories', categories);

    let menuButtons = categories
        .map((category) => {
            return `
    <button type="button" class="filter-btn" data-id=${category}>${category}</button
    >
    `;
        })
        .join('');
    // console.log('menuButtons', menuButtons);
    btnContainer.innerHTML = menuButtons;

    const filterBtns = document.querySelectorAll('.filter-btn');
    console.log('filterBtns', filterBtns);
    filterBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            console.log('data-id', e.currentTarget.dataset.id);
            const category = e.currentTarget.dataset.id;
            const filterMenu = menu.filter((item) => item.category === category);
            if (category === 'all') {
                displayMenuItems(menu);
            } else {
                displayMenuItems(filterMenu);
            }
        });
    });
};

window.addEventListener('DOMContentLoaded', async() => {
    menu = await fetchData()
    displayMenuItems(menu);
    displayMenuButtons();
});