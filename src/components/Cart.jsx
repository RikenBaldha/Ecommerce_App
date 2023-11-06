import React, { useEffect, useState } from "react";
import "./cart.css";
import { Link } from "react-router-dom";
import PopUp from "./PopUp";

function Cart({cart,abc,setabc,carditem,showPopup,remove ,onRemoveToCart,onadd,onremove,products,setProducts,cartItems,uniqueItems,setUniqueItems, cartitem, total }) {
  const [totalCartItems, setTotalCartItems] = useState(0);
  
  
  
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
            <img
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
            {/* {showPopup && <PopUp />} */}
          </div>
            ))
          
          : 'Your cart is empty'}
          {showPopup && <PopUp remove={remove}/>}
           {carditem && Array.isArray(carditem) ?
           ( <>

           <p className="total-amount">
            Total-Amount: ₹ {total}/-
          </p>
          <Link className="place-order" to="/form">Place Order</Link>
           </>) : "" }
  </div>
    </>
  );
}

export default Cart;
