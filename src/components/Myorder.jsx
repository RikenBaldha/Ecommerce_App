import React, { useEffect, useState } from "react";
import "./cart.css";

import { Link } from "react-router-dom";

function Myorder({
  cart,
  order,
  carditem,
  onRemoveToCart,
  onadd,
  onremove,
  products,
  setProducts,
  cartItems,
  uniqueItems,
  setUniqueItems,
  cartitem,
  total,
}) {
  // console.log(order);
  const[mycolor,setmycolor] = useState("block")
  useEffect(() => {
    if (order.length === 0) {
      setmycolor("none");
    }
  }, [order]);
  
  
  return (
    <>
      <div className="all-cart">
        <div className="all-order"><span>My-All-Order</span></div>
        {order && Array.isArray(order)
          ? order.map((productItem, index) => (
              <div key={index} className="cart">
                <img
                  className="addproduct-image"
                  src={productItem.product_photo}
                  alt=""
                />
                <p>{productItem.product_title}</p>
                <p>Quantity :- 1</p>
                <p>
                  Price:{" ₹ "}
                  {productItem.product_price
                    .slice(1)
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  /-
                </p>
              </div>
            ))
          : "Your cart is empty"}
        {order  ? (
          <div style={{display:`${mycolor}`}}>
            <a
              className="track-order"
              href="https://www.google.com/maps/place/ABHILASHA+HEIGHTS,+Abhilasha+Heights,+Nikol,+Ahmedabad,+Gujarat+380038/@23.0476928,72.6579893,17z/data=!3m1!4b1!4m6!3m5!1s0x395e86e0440187bf:0x133db88c8b5a013d!8m2!3d23.0476155!4d72.6604809!16s%2Fg%2F11n6sqhh7n?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Track Order
            </a>
            <p className="total-amount">Total Amount: ₹ {total}/-</p>
            <p className="total-amount">Expected Delivery: In 2 Days</p>
          </div>
        ) : 
          "Not Ordered yet"
        }

        {/* <Link className="place-order" to="/placeorder">Place Order</Link> */}
      </div>
    </>
  );
}

export default Myorder;
