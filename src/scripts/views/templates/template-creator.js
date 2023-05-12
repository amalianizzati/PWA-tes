/* eslint-disable comma-dangle */
/* eslint-disable indent */
import CONFIG from '../../globals/config';

// const createRestoItemTemplate = (restaurants) => `
// <div class="list_item">
//     <img class="list_item_img" src="${
//       restaurants.pictureId
//         ? CONFIG.MEDIUM_BASE_IMAGE_URL + restaurants.pictureId
//         : 'images/heros/hero-image_2.jpg'
//     }" alt="gambar makanan ${restaurants.name}" title="${restaurants.name}">
//         <div class="city">Kota &nbsp;${restaurants.city}
//         </div>

//         <div class="list_item_content">
//             <div class= "rating">
//                 <i class="fas fa-star"></i>
//                     <span> ${restaurants.rating} </span>
//             </div>
//         <h1 class="list_title"><a href="./#/detail">${restaurants.name}</a></h1>
//             <div class="list_desc">${restaurants.description.slice(0, 150)}...
//             </div>
//       </div>
// </div>
// `;

// const createRestoDetailTemplate = (restaurant) => `
//   <div class= "detail">

//     <h1 class= "title">
//       ${restaurant.restaurant.name}
//     </h1>
//     <img src="${
//       CONFIG.MEDIUM_BASE_IMAGE_URL + restaurant.restaurant.pictureId
//     }" alt="${restaurant.restaurant.name}"/>

//     <div class= "resto_info">
//       <h2>Information</h2>
//       <ul>
//         <li>
//           <h3>City</h3>
//           <p>${restaurant.restaurant.city}</p>
//         </li>
//         <li>
//           <h3>Address<h3>
//           <p>${restaurant.restaurant.address}</p>
//         </li>
//         <li>
//           <h3>Rating</h3>
//           <p>${restaurant.restaurant.rating}</p>
//         </li>
//         <li>
//           <h3>Meal</h3>
//           <span id= "food">
//           <p>${restaurant.restaurant.menus.foods
//             .map((food) => food.name)
//             .join(', ')}</p>
//           <span>
//         </li>
//         <li>
//           <h3>Drinks</h3>
//           <span id= "drink">
//             <p>${restaurant.restaurant.menus.drinks
//               .map((food) => food.name)
//               .join(', ')}</p>
//           </span>
//         </li>
//       </ul>
//     </div>

//     <div class= "description">
//       <h2>Description</h2>
//       <p>${restaurant.restaurant.description}</p>
//     </div>
//     <div class="customer-reviews">
//     <h3>Customer Reviews</h3>${restaurant.restaurant.customerReviews
//       .map(
//         (review) => `
//         <div class="review">
//             <p>${review.review}</p>
//         </div>`
//       )
//       .join('')}
// </div>
//     `;
const createRestoDetailTemplate = (restaurant) => `
<h2 class="resto__name">${restaurant.restaurant.name}</h2>
<img class="resto__poster" alt=" image ${restaurant.restaurant.name} src="${
  CONFIG.BASE_IMAGE_URL + restaurant.restaurant.pictureId
}"  crossorigin="anonymous" />
    <div class="resto__info">
        <h3>Informasi Restoran</h3>
        <h4>Kota</h4>
        <p>${restaurant.restaurant.city}</p>
        <h4>Deskripsi</h4>
        <p>${restaurant.restaurant.description}</p>
        <h4>Menu Makanan</h4>
        <p>${restaurant.restaurant.menus.foods
          .map((food) => food.name)
          .join(', ')}</p>
        <h4>Menu Minuman</h4>
        <p>${restaurant.restaurant.menus.drinks
          .map((drink) => drink.name)
          .join(', ')}</p>
    </div>
    <div class="customer-reviews">
        <h4>Customer Reviews</h4>${restaurant.restaurant.customerReviews
          .map(
            (review) => `
            <div class="review">
                <p>${review.review}</p>
                
            </div>`
          )
          .join('')}
    </div>
    <div class="movie__overview">
        <h3>Overview</h3>
        <p>${restaurant.restaurant.rating}</p>
    </div>`;
const createRestoItemTemplate = (restaurants) => `
<div class="col">
<div class="card">
    <div class="card-img">
        <div class="city-label">
            <span class="city-label-text">
                Kota ${restaurants.city}
            </span>
        </div>
        <img src="${
          restaurants.pictureId
            ? CONFIG.BASE_IMAGE_URL + restaurants.pictureId
            : 'images/heros/hero-image_2.jpg'
        }" alt="${restaurants.name}">
    </div>
    <div class="card-body">
        <div class="rating">
            <i class="fas fa-star"></i>
            <span>${restaurants.rating}</span>
        </div>
        <h3 class="card-title">
            <a href="./#/detail/${
              restaurants.id
            }" title="Link ke halaman detail makanan">${restaurants.name}</a>
        </h3>
        <p class="card-text">${restaurants.description}</p>
    </div>
</div>
</div>>
`;

export { createRestoDetailTemplate, createRestoItemTemplate };
