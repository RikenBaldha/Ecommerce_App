import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./product-details.css";
import PopUp from "./PopUp";
// import { useNavigate } from "react-router-dom";

function Productdetails({ gym, all, onAddToCart,remove , showPopup , setShowPopup}) {
  // const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();
  let { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [price, setprice] = useState(0);
  document.title = `product | ${productId} `

  useEffect(() => {
    const filteredProducts = all.filter(
      (product) => product.asin === productId
    );
    setProduct(filteredProducts);
  }, [all, productId]);

  if (product.length === 0) {
    return <div>No product found.</div>; // handle the case when the product is not found
  }
  // console.log(product);
  let discount;
  if(product[0].product_original_price !== null)
  {let original = Number(
    product[0].product_original_price.slice(1, Infinity).replace(/,/g, "")
  );
   let real = Number(product[0].product_price.slice(1).replace(/,/g, ""));
   discount = Math.floor(((original - real) / original) * 100);
}
else{
  discount = 20
}

  const ongotocart = () => {
    navigate("/cart");
  };
  return (
    <>
      {product.map((productItem, index) => (
        <div key={index} className="product-details">
          <div className="allcard mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={productItem.product_photo}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <p className="card-text" style={{ color: "black" }}>
                    {productItem.product_title}...
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                    Product Review<span style={{color:"yellow"}}>: {productItem.product_num_ratings}</span>
                    </small>
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                    Product Review:<span style={{color:"yellow"}}> {productItem.product_star_rating} Out Of 5</span>
                    </small>
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Original Price:{" "}
                      <span style={{color:"yellow"}}> {productItem.product_original_price && productItem.product_original_price !== null
                        ? productItem.product_original_price
                        : "Not available"}
                      /-</span>
                    </small>
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Price:{" "}
                      <span style={{ color: "#605151" }}>{discount}% Off</span>{" "}
                      <span style={{textDecoration:'line-through',color:"#605151",fontSize:"18px"}}>{productItem.product_original_price && productItem.product_original_price !== null
                        ? productItem.product_original_price
                        : "Not available"}</span>{" "}<span style={{color:"yellow"}}> {productItem.product_price}/-</span>
                    </small>
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      <a
                        className="link"
                        href={productItem.product_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Link
                      </a>
                    </small>
                  </p>
                  <button
                    onClick={() => {
                      onAddToCart(productItem);
                    }}
                    className="cart-btn"
                  >
                    Add To Cart
                  </button>
                  <button onClick={ongotocart} className="cart-btn">
                    Go to Cart
                  </button>
                  {showPopup && <PopUp remove={remove}/>}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Productdetails;
