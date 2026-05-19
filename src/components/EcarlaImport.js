// import React, { useEffect, useState } from 'react';
// import { necklace } from '../data/necklace';

// export default function EcarlaImport() {
//   const [ecarlaProducts, setEcarlaProducts] = useState([]);

//   useEffect(() => {
//     fetch('https://hurt.ecarla.pl/export/xml/01c71c690cea3945e7125294c2c8a618.xml')
//       .then(res => res.text())
//       .then(str => {
//         const parser = new DOMParser();
//         const xml = parser.parseFromString(str, 'application/xml');
//         const offers = xml.getElementsByTagName('o');

//         const products = Array.from(offers).map(o => ({
//           id: o.getAttribute('id'),
//           name: o.getElementsByTagName('name')[0]?.textContent.trim(),
//           desc: o.getElementsByTagName('desc')[0]?.textContent.trim(),
//           price: o.getAttribute('price'),
//           image: o.getElementsByTagName('main')[0]?.getAttribute('url'),
//           url: o.getAttribute('url'),
//           stock: o.getAttribute('stock'),
//           category: o.getElementsByTagName('cat')[0]?.textContent.trim()
//         }));

//         setEcarlaProducts(products);
//       })
//       .catch(err => console.error('Błąd podczas pobierania XML:', err));
//   }, []);

//   const allProducts = [...necklace, ...ecarlaProducts];

//   return (
//     <div className="product-grid">
//       {allProducts.map((product) => (
//         <div key={product.id} className="product-card">
//           <img src={product.image} alt={product.name} />
//           <h3>{product.name}</h3>
//           <p>{product.desc}</p>
//           <p>{product.price} zł</p>
//         </div>
//       ))}
//     </div>
//   );
// }
