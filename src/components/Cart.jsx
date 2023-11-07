import React, { useEffect, useState } from "react";
import "./cart.css";
import { Link } from "react-router-dom";
import PopUp from "./PopUp";

function Cart({
  cart,
  abc,
  setabc,
  carditem,
  showPopup,
  remove,
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
  const [totalCartItems, setTotalCartItems] = useState(1);
document.title = "Cart"
  const calculateTotalCartItems = () => {
    if(totalCartItems >= 0){
    setTotalCartItems(totalCartItems + 1);}
  };
  const calculateTotalCartItems1 = () => {
    if(totalCartItems > 1){
    setTotalCartItems(totalCartItems - 1);}
  };
  // calculateTotalCartItems()
  // React.useEffect(() => {
  //   calculateTotalCartItems();
  // }, [uniqueItems]);
  // console.log(`abc:-${abc}`);
  return (
    <>
      <div className="all-cart">
        {abc && Array.isArray(carditem)
          ? carditem.map((productItem, index) => (
              <div key={index} className="cart">
    
                <div className="allcard mb-3 col-md-11  ">
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
                        <br />
                        <p className="card-text" style={{ color: "black" }}>
                          {productItem.product_title}...                          
                        </p>
                        <p className="card-text" style={{ color: "black" }}>
                          Quantity :- 
                          <button
                            className="onremove"
                            onClick={() =>
                              {onremove(productItem.product_title, productItem)
                                calculateTotalCartItems1()}
                              }
                              >
                            -
                          </button>
                          {totalCartItems}
                          {productItem.quantity}
                          <button
                            className="onadd"
                            onClick={() =>
                             { onadd(productItem.product_title, productItem)
                              calculateTotalCartItems()}
                            }
                          >
                            +
                          </button>                        
                        </p>
                        <p className="card-text">
                          Price:{" ₹ "}
                          {productItem.product_price
                            .slice(1)
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          /-
                        </p>
                        <p className="card-text">
                          <button
                            className="cart-btn-cart"
                            onClick={() => onRemoveToCart(productItem)}
                          >
                            Remove Item
                          </button>
                        </p>
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : "Your cart is empty"}
        {showPopup && <PopUp remove={remove} />}
        {carditem && Array.isArray(carditem) ? (
          <>
            <p className="total-amount">Total-Amount: ₹ {total}/-</p>
            <Link className="place-order" to="/form">
              Place Order
            </Link>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Cart;

