import React from 'react'
import { useState } from 'react';

function Ac({onAddToCart}) {
  const [products, setProducts] = useState([
        
      {
        "asin": "B0BTVR3886",
        "product_title": "Hitachi 1 Ton 3 Star ice Clean Xpandable Plus Inverter Split AC (100% Copper, Dust Filter, 2023 Model, iZen 3400FXL, R32-RAS.G312PCAISF, Dual Gold)",
        "product_price": "₹31,290",
        "product_original_price": "₹54,300",
        "currency": "INR",
        "product_star_rating": "3.3",
        "product_num_ratings": 17,
        "product_url": "https://www.amazon.in/dp/B0BTVR3886",
        "product_photo": "https://m.media-amazon.com/images/I/51qAUryQ5DL._AC_SX444_SY639_QL65_.jpg",
        "product_num_offers": null,
        "product_minimum_offer_price": "₹31,290",
        "is_best_seller": false,
        "is_amazon_choice": false,
        "is_prime": false,
        "climate_pledge_friendly": false,
        "sales_volume": null
      },
      {
        "asin": "B0BQR3D9V6",
        "product_title": "Voltas 2 Ton 3 Star, Fixed Speed Split AC (Copper, LED Display, Anti-dust Filter, 2023 Model, 243 Vectra Plus, White)",
        "product_price": "₹48,990",
        "product_original_price": "₹81,990",
        "currency": "INR",
        "product_star_rating": "4",
        "product_num_ratings": 5,
        "product_url": "https://www.amazon.in/dp/B0BQR3D9V6",
        "product_photo": "https://m.media-amazon.com/images/I/41M7ocgxanL._AC_SX444_SY639_QL65_.jpg",
        "product_num_offers": null,
        "product_minimum_offer_price": "₹48,990",
        "is_best_seller": false,
        "is_amazon_choice": false,
        "is_prime": false,
        "climate_pledge_friendly": false,
        "sales_volume": null
      },
      {
        "asin": "B0BXB8W2BM",
        "product_title": "Daikin 1.5 Ton 3 Star Inverter Split AC (Copper, PM 2.5 Filter, FTKY50UV, White)",
        "product_price": "₹37,290",
        "product_original_price": "₹58,400",
        "currency": "INR",
        "product_star_rating": "3.9",
        "product_num_ratings": 1187,
        "product_url": "https://www.amazon.in/dp/B0BXB8W2BM",
        "product_photo": "https://m.media-amazon.com/images/I/71dqi16IxhL._AC_SX444_SY639_QL65_.jpg",
        "product_num_offers": null,
        "product_minimum_offer_price": "₹37,290",
        "is_best_seller": true,
        "is_amazon_choice": false,
        "is_prime": false,
        "climate_pledge_friendly": false,
        "sales_volume": "200+ bought in past month"
      },
      {
        "asin": "B09R4SF5SP",
        "product_title": "Daikin 0.8 Ton 3 Star, Fixed Speed Split AC (Copper, PM 2.5 Filter, 2022 Model, FTL28U, White)",
        "product_price": "₹24,990",
        "product_original_price": "₹37,400",
        "currency": "INR",
        "product_star_rating": "4.2",
        "product_num_ratings": 2471,
        "product_url": "https://www.amazon.in/dp/B09R4SF5SP",
        "product_photo": "https://m.media-amazon.com/images/I/61VC4kJtDAL._AC_SX444_SY639_QL65_.jpg",
        "product_num_offers": null,
        "product_minimum_offer_price": "₹24,990",
        "is_best_seller": false,
        "is_amazon_choice": false,
        "is_prime": true,
        "climate_pledge_friendly": false,
        "sales_volume": "900+ bought in past month"
      },
      {
        "asin": "B0BR5812CL",
        "product_title": "Carrier 1.5 Ton 3 Star AI Flexicool Inverter Split AC (Copper, Convertible 4-in-1 Cooling,High Density Filter, Auto Cleanser, 2023 Model,ESTER Exi - CAI18ER3R32F0,White)",
        "product_price": "₹32,990",
        "product_original_price": "₹67,790",
        "currency": "INR",
        "product_star_rating": "4",
        "product_num_ratings": 1826,
        "product_url": "https://www.amazon.in/dp/B0BR5812CL",
        "product_photo": "https://m.media-amazon.com/images/I/51sTXvsanQL._AC_SX444_SY639_QL65_.jpg",
        "product_num_offers": null,
        "product_minimum_offer_price": "₹32,990",
        "is_best_seller": false,
        "is_amazon_choice": false,
        "is_prime": false,
        "climate_pledge_friendly": false,
        "sales_volume": "3K+ bought in past month"
      },
      {
        "asin": "B0BBFVSG7N",
        "product_title": "Voltas 1.5 Ton 3 Star, Inverter Split AC(Copper, 4-in-1 Adjustable Mode, Anti-dust Filter, 2023 Model, 183V Vectra Prime, White)",
        "product_price": "₹32,490",
        "product_original_price": "₹64,990",
        "currency": "INR",
        "product_star_rating": "3.7",
        "product_num_ratings": 2696,
        "product_url": "https://www.amazon.in/dp/B0BBFVSG7N",
        "product_photo": "https://m.media-amazon.com/images/I/41BD0L1mzJL._AC_SX444_SY639_QL65_.jpg",
        "product_num_offers": null,
        "product_minimum_offer_price": "₹32,490",
        "is_best_seller": false,
        "is_amazon_choice": false,
        "is_prime": false,
        "climate_pledge_friendly": false,
        "sales_volume": null
      },
      {
        "asin": "B0BRQD4L93",
        "product_title": "Samsung 2 Ton 3 Star Wi-fi Enabled Inverter Split AC (Copper, Convertible 5-in-1 Cooling Mode, Anti-bacterial Filter, 2023 Model AR24CYLZABE White)",
        "product_price": "₹48,990",
        "product_original_price": "₹83,990",
        "currency": "INR",
        "product_star_rating": "3.7",
        "product_num_ratings": 44,
        "product_url": "https://www.amazon.in/dp/B0BRQD4L93",
        "product_photo": "https://m.media-amazon.com/images/I/51pSParNYHL._AC_SX444_SY639_QL65_.jpg",
        "product_num_offers": null,
        "product_minimum_offer_price": "₹48,990",
        "is_best_seller": false,
        "is_amazon_choice": false,
        "is_prime": false,
        "climate_pledge_friendly": false,
        "sales_volume": "300+ bought in past month"
      },
      {
        "asin": "B0BTVQJX54",
        "product_title": "Hitachi 2 Ton Class 3 Star ice Clean Xpandable Plus Inverter Split AC (100% Copper, Dust Filter, 2023 Model, iZen 3400FXL, R32-RAS.G324PCAISF, Dual Gold)",
        "product_price": "₹52,990",
        "product_original_price": "₹81,100",
        "currency": "INR",
        "product_star_rating": "3.9",
        "product_num_ratings": 13,
        "product_url": "https://www.amazon.in/dp/B0BTVQJX54",
        "product_photo": "https://m.media-amazon.com/images/I/51qAUryQ5DL._AC_SX444_SY639_QL65_.jpg",
        "product_num_offers": null,
        "product_minimum_offer_price": "₹52,990",
        "is_best_seller": false,
        "is_amazon_choice": false,
        "is_prime": false,
        "climate_pledge_friendly": false,
        "sales_volume": null
      },
      {
        "asin": "B0BQR2491B",
        "product_title": "Voltas 1 Ton 3 Star, Inverter Split AC(Copper, 4-in-1 Adjustable Mode, Anti-dust Filter, 2023 Model, 123V Vectra Elegant, White)",
        "product_price": "₹28,999",
        "product_original_price": "₹56,990",
        "currency": "INR",
        "product_star_rating": "3.6",
        "product_num_ratings": 258,
        "product_url": "https://www.amazon.in/dp/B0BQR2491B",
        "product_photo": "https://m.media-amazon.com/images/I/41LlSc9YsnL._AC_SX444_SY639_QL65_.jpg",
        "product_num_offers": null,
        "product_minimum_offer_price": "₹28,999",
        "is_best_seller": false,
        "is_amazon_choice": false,
        "is_prime": false,
        "climate_pledge_friendly": false,
        "sales_volume": "1K+ bought in past month"
      },
      {
        "asin": "B0BR59SY4M",
        "product_title": "Carrier 1.5 Ton 5 Star AI Flexicool Inverter Split AC (Copper, Convertible 6-in-1 Cooling,Dual Filtration with HD &amp; PM 2.5 Filter, Auto Cleanser, 2023 Model,ESTER Exi -CAI18ES5R33F0 ,White)",
        "product_price": "₹40,990",
        "product_original_price": "₹76,090",
        "currency": "INR",
        "product_star_rating": "4",
        "product_num_ratings": 1389,
        "product_url": "https://www.amazon.in/dp/B0BR59SY4M",
        "product_photo": "https://m.media-amazon.com/images/I/61JtwWcAcoL._AC_SX444_SY639_QL65_.jpg",
        "product_num_offers": null,
        "product_minimum_offer_price": "₹40,990",
        "is_best_seller": false,
        "is_amazon_choice": false,
        "is_prime": false,
        "climate_pledge_friendly": false,
        "sales_volume": null
      },
      {
        "asin": "B09SW8FP11",
        "product_title": "Daikin 1.5 Ton 5 Star Inverter Split AC (Copper,2022,FTKM50U,White)",
        "product_price": "₹44,690",
        "product_original_price": "₹67,200",
        "currency": "INR",
        "product_star_rating": "4.1",
        "product_num_ratings": 583,
        "product_url": "https://www.amazon.in/dp/B09SW8FP11",
        "product_photo": "https://m.media-amazon.com/images/I/41zljqtpKgL._AC_SX444_SY639_QL65_.jpg",
        "product_num_offers": null,
        "product_minimum_offer_price": "₹44,690",
        "is_best_seller": false,
        "is_amazon_choice": false,
        "is_prime": true,
        "climate_pledge_friendly": false,
        "sales_volume": "300+ bought in past month"
      },
      {
        "asin": "B0C3CL5CMY",
        "product_title": "LG 1.5 Ton 3 Star DUAL Inverter Split AC (Copper, Super Convertible 5-in-1 Cooling, HD Filter with Anti-Virus Protection, 2023 Model, RS-Q18TNXE, White)",
        "product_price": "₹39,190",
        "product_original_price": "₹64,990",
        "currency": "INR",
        "product_star_rating": "4",
        "product_num_ratings": 2110,
        "product_url": "https://www.amazon.in/dp/B0C3CL5CMY",
        "product_photo": "https://m.media-amazon.com/images/I/51PJkW8mo6L._AC_SX444_SY639_QL65_.jpg",
        "product_num_offers": null,
        "product_minimum_offer_price": "₹39,190",
        "is_best_seller": false,
        "is_amazon_choice": false,
        "is_prime": false,
        "climate_pledge_friendly": false,
        "sales_volume": "800+ bought in past month"
      },
      {
        "asin": "B0BTVRSY5L",
        "product_title": "Hitachi 1.5 Ton 5 Star ice Clean Xpandable Plus Inverter Split AC (100% Copper, Dust Filter, 2023 Model, Yoshi 5400FXL, R32-RAS.G518PCAISF, Dual Platinum)",
        "product_price": "₹43,490",
        "product_original_price": "₹74,100",
        "currency": "INR",
        "product_star_rating": "3.8",
        "product_num_ratings": 787,
        "product_url": "https://www.amazon.in/dp/B0BTVRSY5L",
        "product_photo": "https://m.media-amazon.com/images/I/510xASFjJgL._AC_SX444_SY639_QL65_.jpg",
        "product_num_offers": null,
        "product_minimum_offer_price": "₹43,490",
        "is_best_seller": false,
        "is_amazon_choice": false,
        "is_prime": false,
        "climate_pledge_friendly": false,
        "sales_volume": "50+ bought in past month"
      },
      {
        "asin": "B09RG2SZVX",
        "product_title": "Blue Star 1.5 Ton 3 Star 5 in 1 Convertible Inverter Split AC (Copper, Multi Sensors, Stabalizer Free Operation, Self Diagnosis, 2023 Model, IA318FNU, White)",
        "product_price": "₹35,990",
        "product_original_price": "₹62,250",
        "currency": "INR",
        "product_star_rating": "3.8",
        "product_num_ratings": 1213,
        "product_url": "https://www.amazon.in/dp/B09RG2SZVX",
        "product_photo": "https://m.media-amazon.com/images/I/61uMS8dtApL._AC_SX444_SY639_QL65_.jpg",
        "product_num_offers": null,
        "product_minimum_offer_price": "₹35,990",
        "is_best_seller": false,
        "is_amazon_choice": false,
        "is_prime": false,
        "climate_pledge_friendly": false,
        "sales_volume": "500+ bought in past month"
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
    <div className="allmain">
    {products.map((productItem, index) => (
      <div key={index} className="main1">
        <img
          className="ac-image"
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
    </div>
    {/* })} */}
  </>
  )
}

export default Ac