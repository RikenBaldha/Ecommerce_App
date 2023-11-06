import React from 'react'
import { useState } from 'react';

function Tv({onAddToCart}) {
  const [products, setProducts] = useState([
        
      {
        "asin": "B08DPLCM6T",
        "product_title": "LG 80 cm (32 inches) HD Ready Smart LED TV 32LM563BPTC (Dark Iron Gray)",
        "product_price": "₹11,990",
        "product_original_price": "₹21,990",
        "currency": "INR",
        "product_star_rating": "4.3",
        "product_num_ratings": 13177,
        "product_url": "https://www.amazon.in/dp/B08DPLCM6T",
        "product_photo": "https://m.media-amazon.com/images/I/71kuqRw8L5L._AC_SX444_SY639_QL65_.jpg",
        "product_num_offers": null,
        "product_minimum_offer_price": "₹11,990",
        "is_best_seller": false,
        "is_amazon_choice": false,
        "is_prime": false,
        "climate_pledge_friendly": false,
        "sales_volume": null
      },
      {
        "asin": "B0CH33P1PV",
        "product_title": "MI 80 cm (32 inches) A Series HD Ready Smart Google TV L32M8-5AIN (Black)",
        "product_price": "₹10,990",
        "product_original_price": "₹24,999",
        "currency": "INR",
        "product_star_rating": "4.2",
        "product_num_ratings": 66780,
        "product_url": "https://www.amazon.in/dp/B0CH33P1PV",
        "product_photo": "https://m.media-amazon.com/images/I/71Dkc-5hX1L._AC_SX444_SY639_QL65_.jpg",
        "product_num_offers": null,
        "product_minimum_offer_price": "₹10,990",
        "is_best_seller": false,
        "is_amazon_choice": true,
        "is_prime": false,
        "climate_pledge_friendly": false,
        "sales_volume": null
      },
      {
        "asin": "B0B6F7LX4C",
        "product_title": "MI 80 cm (32 inches) 5A Series HD Ready Smart Android LED TV L32M7-5AIN (Black)",
        "product_price": "₹11,490",
        "product_original_price": "₹24,999",
        "currency": "INR",
        "product_star_rating": "4.2",
        "product_num_ratings": 66780,
        "product_url": "https://www.amazon.in/dp/B0B6F7LX4C",
        "product_photo": "https://m.media-amazon.com/images/I/81xT3no1+6L._AC_SX444_SY639_QL65_.jpg",
        "product_num_offers": null,
        "product_minimum_offer_price": "₹11,490",
        "is_best_seller": false,
        "is_amazon_choice": false,
        "is_prime": false,
        "climate_pledge_friendly": false,
        "sales_volume": null
      },
      {
        "asin": "B0CD1S96SM",
        "product_title": "LG 80 cm (32 inches) HD Ready Smart LED TV 32LQ643BPTA (Black)",
        "product_price": "₹13,490",
        "product_original_price": "₹30,990",
        "currency": "INR",
        "product_star_rating": "4.3",
        "product_num_ratings": 13177,
        "product_url": "https://www.amazon.in/dp/B0CD1S96SM",
        "product_photo": "https://m.media-amazon.com/images/I/71VHchc4T4L._AC_SX444_SY639_QL65_.jpg",
        "product_num_offers": null,
        "product_minimum_offer_price": "₹13,490",
        "is_best_seller": false,
        "is_amazon_choice": false,
        "is_prime": false,
        "climate_pledge_friendly": false,
        "sales_volume": null
      },
      {
        "asin": "B0C146SQVS",
        "product_title": "TCL 101 cm (40 inches) Bezel-Less S Series Full HD Smart Android LED TV 40S5400A (Black)",
        "product_price": "₹15,990",
        "product_original_price": "₹40,990",
        "currency": "INR",
        "product_star_rating": "4.1",
        "product_num_ratings": 3412,
        "product_url": "https://www.amazon.in/dp/B0C146SQVS",
        "product_photo": "https://m.media-amazon.com/images/I/71tclO9I-rL._AC_SX444_SY639_QL65_.jpg",
        "product_num_offers": null,
        "product_minimum_offer_price": "₹15,990",
        "is_best_seller": false,
        "is_amazon_choice": false,
        "is_prime": false,
        "climate_pledge_friendly": false,
        "sales_volume": null
      },
      {
        "asin": "B0B21MF4RF",
        "product_title": "VW 109 cm (43 inches) Playwall Frameless Series Full HD Android Smart LED TV VW43F1 (Black)",
        "product_price": "₹14,499",
        "product_original_price": "₹24,999",
        "currency": "INR",
        "product_star_rating": "4.2",
        "product_num_ratings": 2234,
        "product_url": "https://www.amazon.in/dp/B0B21MF4RF",
        "product_photo": "https://m.media-amazon.com/images/I/81SYE9YcekL._AC_SX444_SY639_QL65_.jpg",
        "product_num_offers": null,
        "product_minimum_offer_price": "₹14,499",
        "is_best_seller": false,
        "is_amazon_choice": false,
        "is_prime": false,
        "climate_pledge_friendly": false,
        "sales_volume": null
      },
      {
        "asin": "B0BVMLNGXR",
        "product_title": "Redmi 80 cm (32 inches) F Series HD Ready Smart LED Fire TV L32R8-FVIN (Black)",
        "product_price": "₹9,999",
        "product_original_price": "₹24,999",
        "currency": "INR",
        "product_star_rating": "4.2",
        "product_num_ratings": 55290,
        "product_url": "https://www.amazon.in/dp/B0BVMLNGXR",
        "product_photo": "https://m.media-amazon.com/images/I/819Lw2PE8tL._AC_SX444_SY639_QL65_.jpg",
        "product_num_offers": null,
        "product_minimum_offer_price": "₹9,999",
        "is_best_seller": true,
        "is_amazon_choice": false,
        "is_prime": false,
        "climate_pledge_friendly": false,
        "sales_volume": null
      },
      {
        "asin": "B09F6S8BT6",
        "product_title": "Samsung 80 cm (32 Inches) Wondertainment Series HD Ready LED Smart TV UA32T4340BKXXL (Glossy Black)",
        "product_price": "₹12,990",
        "product_original_price": "₹22,900",
        "currency": "INR",
        "product_star_rating": "4.2",
        "product_num_ratings": 11588,
        "product_url": "https://www.amazon.in/dp/B09F6S8BT6",
        "product_photo": "https://m.media-amazon.com/images/I/71RxCmvnrbL._AC_SX444_SY639_QL65_.jpg",
        "product_num_offers": null,
        "product_minimum_offer_price": "₹12,990",
        "is_best_seller": false,
        "is_amazon_choice": false,
        "is_prime": false,
        "climate_pledge_friendly": false,
        "sales_volume": null
      },
      {
        "asin": "B07MNNH484",
        "product_title": "VW 80 cm (32 inches) Frameless Series HD Ready Android Smart LED TV VW32S (Black)",
        "product_price": "₹7,199",
        "product_original_price": "₹16,999",
        "currency": "INR",
        "product_star_rating": "3.9",
        "product_num_ratings": 9513,
        "product_url": "https://www.amazon.in/dp/B07MNNH484",
        "product_photo": "https://m.media-amazon.com/images/I/717oSOB4hCL._AC_SX444_SY639_QL65_.jpg",
        "product_num_offers": null,
        "product_minimum_offer_price": "₹7,199",
        "is_best_seller": false,
        "is_amazon_choice": false,
        "is_prime": false,
        "climate_pledge_friendly": false,
        "sales_volume": null
      },
      {
        "asin": "B0BNVLQZM2",
        "product_title": "iFFALCON 80.04 cm (32 inches) Bezel-Less S Series HD Ready Smart Android LED TV iFF32S53 (Black)",
        "product_price": "₹8,499",
        "product_original_price": "₹19,990",
        "currency": "INR",
        "product_star_rating": "4.1",
        "product_num_ratings": 1941,
        "product_url": "https://www.amazon.in/dp/B0BNVLQZM2",
        "product_photo": "https://m.media-amazon.com/images/I/717FSxcSEjL._AC_SX444_SY639_QL65_.jpg",
        "product_num_offers": null,
        "product_minimum_offer_price": "₹8,499",
        "is_best_seller": false,
        "is_amazon_choice": false,
        "is_prime": false,
        "climate_pledge_friendly": false,
        "sales_volume": null
      },
      {
        "asin": "B0BQZQ3QTV",
        "product_title": "VW 80 cm(32 inches) Linux Series Frameless HD Ready Smart LED TV VW32C2 (Black)",
        "product_price": "₹7,499",
        "product_original_price": "₹16,999",
        "currency": "INR",
        "product_star_rating": "4.3",
        "product_num_ratings": 1495,
        "product_url": "https://www.amazon.in/dp/B0BQZQ3QTV",
        "product_photo": "https://m.media-amazon.com/images/I/71jVRzxB1wL._AC_SX444_SY639_QL65_.jpg",
        "product_num_offers": null,
        "product_minimum_offer_price": "₹7,499",
        "is_best_seller": false,
        "is_amazon_choice": false,
        "is_prime": false,
        "climate_pledge_friendly": false,
        "sales_volume": null
      },
      {
        "asin": "B0CHFK5WKF",
        "product_title": "VW 101 cm (40 inches) Playwall Frameless Series Full HD Android Smart LED TV VW40F1 (Black)",
        "product_price": "₹12,999",
        "product_original_price": "₹26,999",
        "currency": "INR",
        "product_star_rating": null,
        "product_num_ratings": 0,
        "product_url": "https://www.amazon.in/dp/B0CHFK5WKF",
        "product_photo": "https://m.media-amazon.com/images/I/81+S8ryDoGL._AC_SX444_SY639_QL65_.jpg",
        "product_num_offers": null,
        "product_minimum_offer_price": "₹12,999",
        "is_best_seller": false,
        "is_amazon_choice": false,
        "is_prime": false,
        "climate_pledge_friendly": false,
        "sales_volume": null
      },
      {
        "asin": "B0C82ZHYQ8",
        "product_title": "LG 108 cm (43 inches) 4K Ultra HD Smart LED TV 43UR7500PSC (Dark Iron Gray)",
        "product_price": "₹27,990",
        "product_original_price": "₹49,990",
        "currency": "INR",
        "product_star_rating": "4.3",
        "product_num_ratings": 3289,
        "product_url": "https://www.amazon.in/dp/B0C82ZHYQ8",
        "product_photo": "https://m.media-amazon.com/images/I/81OnFolEvpL._AC_SX444_SY639_QL65_.jpg",
        "product_num_offers": null,
        "product_minimum_offer_price": "₹27,990",
        "is_best_seller": false,
        "is_amazon_choice": false,
        "is_prime": false,
        "climate_pledge_friendly": false,
        "sales_volume": null
      },
      {
        "asin": "B09F9YQQ7B",
        "product_title": "Redmi 80 cm (32 inches) HD Ready Android Smart TV with Vivid Picture Engine &amp; 20W Dolby Audio (Black)",
        "product_price": "₹9,990",
        "product_original_price": "₹24,999",
        "currency": "INR",
        "product_star_rating": "4.2",
        "product_num_ratings": 55290,
        "product_url": "https://www.amazon.in/dp/B09F9YQQ7B",
        "product_photo": "https://m.media-amazon.com/images/I/71pfxj-c0KL._AC_SX444_SY639_QL65_.jpg",
        "product_num_offers": null,
        "product_minimum_offer_price": "₹9,990",
        "is_best_seller": false,
        "is_amazon_choice": false,
        "is_prime": true,
        "climate_pledge_friendly": false,
        "sales_volume": null
      }

    ]);
    const handleSortByPrice = () => {
      const sortedProducts = [...products].sort((a, b) => {
        const priceA = Number((a.product_price || '').replace(/[^0-9.-]+/g, ''));
        const priceB = Number((b.product_price || '').replace(/[^0-9.-]+/g, ''));
        return priceA - priceB;
      });
      setProducts(sortedProducts);
    };
    const handleSortByPriceHigh = () => {
      const sortedProducts = [...products].sort((a, b) => {
        const priceA = Number((a.product_price || '').replace(/[^0-9.-]+/g, ''));
        const priceB = Number((b.product_price || '').replace(/[^0-9.-]+/g, ''));
        return priceB - priceA;
      });
      setProducts(sortedProducts);
    };
  return (
    <>
     <button className="cart-btn-sort" onClick={handleSortByPrice}>
        Sort by Price (Low to High)
      </button>
     <button className="cart-btn-high" onClick={handleSortByPriceHigh}>
        Sort by Price (High To Low)
      </button>
    {products.map((productItem, index) => (
      <div key={index} className="main1">
        <img
          className="tv-image"
          src={productItem.product_photo}
          alt=""
        />
        <p>{productItem.product_title}</p>
        <p>Price: {productItem.product_price}</p>
        <p>Product Review: {productItem.product_num_ratings}</p>
        <p>Product Rating: {productItem.product_star_rating} Out Of 5</p>
        <p>More About Products:- <a className="link" href={productItem.product_url} target="_blank">Link</a></p>
        <button className="cart-btn" onClick={() => onAddToCart(productItem)}>Add Item</button>
        {/* <button className="cart-btn" onClick={() => onRemoveToCart(productItem)}>Remove Item</button> */}
      </div>
    ))}
    {/* })} */}
  </>
  )
}

export default Tv