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
  const [totalCartItems, setTotalCartItems] = useState(0);
document.title = "Cart"
  const calculateTotalCartItems = () => {
    let totalCount = 0;
    Object.values(uniqueItems).forEach((item) => {
      totalCount += item.quantity;
    });
    setTotalCartItems(totalCount);
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
                {/* <img
              className="addproduct-image"
              src={productItem.product_photo}
              alt=""
            />
            <p>{productItem.product_title}</p>
            <p>
              Quantity  :- 
              <button className="onremove"onClick={() => onremove(productItem.product_title,productItem)}>
                -
              </button>
             {productItem.quantity}
              <button className="onadd" onClick={() => onadd(productItem.product_title,productItem)}>
                +
              </button>
            </p>
            <p>
              Price:{" ₹ "}
              {productItem.product_price.slice(1).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}/-
            </p>
            <button
              className="cart-btn-cart"
              onClick={() => onRemoveToCart(productItem)}
            >
              Remove Item
            </button>
            {showPopup && <PopUp />} */}
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
                        <p className="card-text" style={{ color: "black" }}>
                          {productItem.product_title}... Quantity :-
                          <button
                            className="onremove"
                            onClick={() =>
                              onremove(productItem.product_title, productItem)
                            }
                          >
                            -
                          </button>
                          {productItem.quantity}
                          <button
                            className="onadd"
                            onClick={() =>
                              onadd(productItem.product_title, productItem)
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
