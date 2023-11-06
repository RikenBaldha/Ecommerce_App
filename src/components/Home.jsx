import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';

function Home({onAddToCart , all , setall}) {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(all);
    const [maxPrice, setMaxPrice] = useState("");
  
    const handleSearch = (e) => {
      const value = e.target.value.toLowerCase();
      setSearchTerm(value);
      const filteredProducts = all.filter((product) =>
        product.product_title.toLowerCase().includes(value)
      );
      setFilteredProducts(filteredProducts);
    };
    const handleSearchprice = (e) => {
      const maxPriceValue = parseFloat(e.target.value);
      setMaxPrice(maxPriceValue);
      const filteredProducts = all.filter((product) => {
        const productPrice = product.product_price
          ? parseFloat(product.product_price.slice(1).replace(/,/g, ""))
          : 0;
        return (
          product.product_title
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) &&
          (!maxPriceValue || productPrice <= maxPriceValue)
        );
      });
      setFilteredProducts(filteredProducts);
    };
    
  
    
    return (
      <>
    
        <input
          style={{
            padding: "10px",
            margin: "10px",
            position: "sticky",
            top: "90px",
            zIndex: 999
          }}
          className="sort1"
          type="text"
          placeholder="Search products"
          value={searchTerm}
          onChange={handleSearch}
        />
        <br />
         <input
          style={{
            padding: "10px",
            margin: "10px",
            position: "sticky",
            top: "90px",
            zIndex: 999
          }}
          className="sort2"
          type="number"
          placeholder="Maximum Price"
          value={maxPrice}
          onChange={handleSearchprice}
        />
        <div className="all-products">
        {filteredProducts.map((productItem, index) => (
          // <div key={index} className="main1">
          //   <Link to={`/${productItem.asin}`}>
          //   <img
          //     className="product-image"
          //     src={productItem.product_photo}
          //     alt=""
          //   />
          //   <p className="allp">{(productItem.product_title).slice(0,35)}...</p>
          //   <p className="all-p">Price: {productItem.product_price}</p>
          //   {/* <p>Product Review: {productItem.product_num_ratings}</p>
          //   <p>Product Rating: {productItem.product_star_rating} Out Of 5</p> */}
          //   <p className="allp">
          //     More About Products:{" "}
          //     <a className="link" href={productItem.product_url} target="_blank" rel="noopener noreferrer">
          //       Link
          //     </a>  
          //   </p>
          //   {/* <button onClick={() => onAddToCart(productItem)} className="cart-btn">Add To Cart</button> */}
          //   </Link>
          // </div>
          <div key={index} class="card" style={{width: "18rem"}}>
          <Link to={`/${productItem.asin}`}>
          <img src={productItem.product_photo} class="card-img-top" alt="..." width="287px" height="200px" />
          {/* <span>------------------------------</span> */}
          <br />
          <div class="card-body">
            <h5 class="card-title">Price:- {productItem.product_price}</h5>
            <p class="card-text">
            {(productItem.product_title).slice(0,50)}...
            </p>
            <Link to={`/${productItem.asin}`} class="btn btn-primary">
              More Details
            </Link>
          </div>
          </Link>
        </div>
        ))}
        </div>
    
      </>
    );
}

export default Home