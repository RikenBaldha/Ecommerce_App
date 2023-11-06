import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./product-details.css";
import PopUp from "./PopUp";
// import { useNavigate } from "react-router-dom";

function Productdetails({ gym, all, onAddToCart , showPopup , setShowPopup}) {
  // const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();
  let { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [price, setprice] = useState(0);

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
          {/* <div className="part-a">
            <img
              className="product-details-image"
              src={productItem.product_photo}
              alt=""
            />
          </div>

          <div className="part-b">
            <p className="allp">{productItem.product_title}...</p>
            <p>Product Review: {productItem.product_num_ratings}</p>
            <p>Product Rating: {productItem.product_star_rating} Out Of 5</p>
            <p className="allp">
              Original Price:{" "}
              {productItem.product_original_price
                ? productItem.product_original_price
                : "Not available"}
              /-
            </p>

            <p className="all-p">
              Discount-Price:{" "}
              <span style={{ color: "#d5b0b0" }}>{discount}% Off</span>{" "}
              {productItem.product_price}/-
            </p>
            <p className="allp">
              More About Products:{" "}
              <a
                className="link"
                href={productItem.product_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>
            </p>
            <button
              onClick={() => onAddToCart(productItem)}
              className="cart-btn"
            >
              Add To Cart
            </button>

            <Link
              style={{
                backgroundColor: "black",
                color: "white",
                padding: "10px",
                fontSize: "20px",
                width: "100px",
                cursor: "pointer",
              }}
              to="/cart"
            >
              Go to Cart
            </Link>
          </div> */}

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
                  {/* <h5 className="card-title">Card title</h5> */}
                  <p className="card-text" style={{ color: "black" }}>
                    {productItem.product_title}...
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Product Review: {productItem.product_num_ratings}
                    </small>
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Product Rating: {productItem.product_star_rating} Out Of 5
                    </small>
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Original Price:{" "}
                      {productItem.product_original_price && productItem.product_original_price !== null
                        ? productItem.product_original_price
                        : "Not available"}
                      /-
                    </small>
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Discount-Price:{" "}
                      <span style={{ color: "#d5b0b0" }}>{discount}% Off</span>{" "}
                      {productItem.product_price}/-
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
                  {/* <button
                    onClick={() => {
                      onAddToCart(productItem);
                      setShowPopup(true);
                    }}
                    className="cart-btn"
                  >
                    Add To Cart
                  </button>
                  {/* {showPopup && <PopUp />} */}
       
                  <button
                    onClick={() => {
                      onAddToCart(productItem);
                      // setShowPopup(true);
                      // setTimeout(() => {
                      //   setShowPopup(false);
                      // }, 1000); // 1000 milliseconds = 1 second
                    }}
                    className="cart-btn"
                  >
                    Add To Cart
                  </button>
                  {showPopup && <PopUp />}
                  {/* <button onClick={ongotocart} className="cart-btn">
                    Go to Cart
                  </button> */}
                  <button onClick={ongotocart} className="cart-btn">
                    Go to Cart
                  </button>

                  {/* <Link
              style={{
                backgroundColor: "black",
                color: "white", 
                padding: "10px",
                fontSize: "20px",
                width: "100px",
                cursor: "pointer",
              }}
              to="/cart"
            >
              Go to Cart
            </Link> */}
                  {/* <p className="card-text">
                    <small className="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </p> */}
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
