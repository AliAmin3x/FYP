// import React, { useEffect, useRef } from 'react';
// import SwiperCore from 'swiper';
// import 'swiper/css';
// import 'swiper/css/pagination';
// // import 'swiper/css/navigation';

// // SwiperCore.use([Pagination, Navigation]);/.

// const GameCardSwiper = ({ products }) => {
//   const swiperRef = useRef(null);

//   useEffect(() => {
//     if (swiperRef.current) {
//       const swiper = new swiper(swiperRef.current, {
//         slidesPerView: 3, 
//         spaceBetween: 20,
//         loop: true,
//         pagination: {
//           el: '.swiper-pagination',
//           clickable: true,
//         },
//         navigation: {
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev',
//         },
//       });
//     }
//   }, [products]); 

//   return (
//     <div className="container">
//       <div className="swiper-wrapper" ref={swiperRef}>
//         {products.map((product) => (
//           <div key={product.id} className="card product-card">
//             <img src={product.image} alt={product.name} />
//             <div className="card-content">
//               <h3>{product.name}</h3>
//               <p>${product.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="swiper-pagination"></div>
//       <div className="swiper-button-prev"></div>
//       <div className="swiper-button-next"></div>
//     </div>
//   );
// };

// export default GameCardSwiper;
