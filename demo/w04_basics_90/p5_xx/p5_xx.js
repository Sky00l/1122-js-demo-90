import { tours_xx } from './data_xx.js';

console.log('tours_xx', tours_xx);

const section = document.querySelector('.section-center');

const displayTours_xx = () => {
  const toursInfo = tours_xx
    .map((tour) => {
      const { id, info, local_img, name, price } = tour;
      return `
        <article class="single-tour">
        <img src=${local_img} alt=${name} />
        <footer>
          <div class="tour-info">
            <h4>${name}</h4>
            <h4 class="tour-price">$${price}</h4>
          </div>
          <p>
            ${info}
            <button>read more</button>
          </p>
          <button class="delete-btn">not interested</button>
        </footer>
      </article>
        
        `;
    })
    .join('');
  section.innerHTML = toursInfo;
};

window.addEventListener('DOMContentLoaded', () => {
  displayTours_xx();
});
