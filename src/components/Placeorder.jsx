import { useNavigate } from "react-router-dom";
import "./placeorder.css";
import "./placeorder.css";

import React, { useState } from "react";
import Animation from "./Animation";
function Placeorder({ total ,abc,setabc,carditem , order , setorder ,setCart ,setTotal}) {
 document.title = "Payment Page"
  const [succesfull, setsuccesfull] = useState("");
  const [card, setCard] = useState({
    cardno: "",
    cardtype: "far fa-credit-card",
    expirydt: "",
  });
const navigate = useNavigate()
  const handleClick = () => {
    setorder(carditem)
    setTimeout(() => {
      pay();
      setTimeout(() => {
        navigate("/myorder")
        setCart(0)
        setabc([])
  
        // setTotal(0)
      }, 3000);
    }, 2000);
  };

  const pay = () => {
    setsuccesfull('Payment successful');
  };
  const onChange = (e) => {
    var cartype_new = cardnumber(e.target.value);
    setCard({
      ...card,
      cardno: e.target.value,
      cardtype: cartype_new,
    });
  };
  const cardnumber = (inputtxt) => {
    var matches = inputtxt.match(/(\d+)/);
    var cardno = "";
    // console.log(matches);
    if (matches) {
      cardno = inputtxt.split(" - ").join("");
    }
    // console.log(cardno);
    var cardtype1 = card.cardtype;
    //var visa = /^(?:4[0-9]{16}(?:[0-9]{3})?)$/;
    var visa = /^(?:4[0-9]{2}?)$/;
    var mastercardRegEx = /^(?:5[1-5][0-9]{3})$/;
    var amexpRegEx = /^(?:3[47][0-9]{3})$/;
    var discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{5})$/;
    // console.log(visa.test(cardno));
    if (visa.test(cardno) === true) {
      //eg:4651970022334445
      cardtype1 = "far fa fa-3x fa-cc-visa  carddetail-cardtype";
    } else if (mastercardRegEx.test(cardno) === true) {
      cardtype1 = "far fa fa-3x fa-cc-mastercard carddetail-cardtype";
    } else if (amexpRegEx.test(cardno) === true) {
      cardtype1 = "far fa fa-3x fa-cc-amex carddetail-cardtype";
    } else if (discovRegEx.test(cardno) === true) {
      cardtype1 = "far fa fa-3x fa-cc-discover carddetail-cardtype";
    }
    return cardtype1;
  };

  const cc_format = (value) => {
    const v = value.replace(/[^0-9]/gi, "").substr(0, 16);

    const parts = [];
    for (let i = 0; i < v.length; i += 4) {
      parts.push(v.substr(i, 4));
    }
    return parts.length > 1 ? parts.join(" - ") : value;
  };
  const expriy_format = (value) => {
    const expdate = value;
    const expDateFormatter =
      expdate.replace(/\//g, "").substring(0, 2) +
      (expdate.length > 2 ? "/" : "") +
      expdate.replace(/\//g, "").substring(2, 4);

    return expDateFormatter;
  };
  const onChangeExp = (e) => {
    setCard({
      ...card,
      expirydt: e.target.value,
    });
  };

  return (
    <>
    <div className="main">
      <div className="cardetails-wrapper">
        <div className="cardetails-payment">
          <h3 style={{ color: "red", margin: "15px 0px" }}>Amount:- {total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
          <h2 className="carddetails-head">Card Details</h2>

          <div className="cardetails-form">
            <div className="cardetails-card cardetails-space cardetails-icon-relative">
              <label className="cardetails-label">Card Number:</label>
              <input
                type="text"
                className="cardetails-input"
                data-mask="0000 0000 0000 0000"
                placeholder="XXXX-XXXX-XXXX-XXXX"
                value={cc_format(card.cardno)}
                required
                onChange={onChange}
              />
              <i className={card.cardtype} id="cardtype"></i>
            </div>

            <div className="cardetails-card-grp cardetails-space">
              <div className="cardetails-card-item cardetails-icon-relative">
                <label className="cardetails-label">Expiry date:</label>

                <input
                  type="text"
                  name="expiry-data"
                  className="cardetails-input"
                  placeholder="mm / yy"
                  onChange={onChangeExp}
                  value={expriy_format(card.expirydt)}
                />
                <i className="far fa-calendar-alt"></i>
              </div>
              <div className="cardetails-card-item cardetails-icon-relative">
                <label className="cardetails-label">Cvv:</label>
                <input
                  type="password"
                  className="cardetails-input"
                  data-mask="000"
                  placeholder="000"
                  maxLength="3"
                  pattern="[0-9][0-9][0-9]"
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                />
                <i className="fas fa-lock"></i>
              </div>
            </div>
            <div className="cardetails-card cardetails-space cardetails-icon-relative">
              <label className="cardetails-label">Name on Card:</label>
              <input type="text" className="cardetails-input" placeholder="" />
              <i className="fas fa-user"></i>
            </div>
            <div onClick={handleClick} className="cardetails-btn">
              Pay
            </div>
            <div
              // style={{ color: "yellow", fontSize: "22px", margin: "2px 45px" }}
            >
              {" "}
              {/* {succesfull} */}
              { succesfull == 'Payment successful' ?( <Animation />) : ""}
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Placeorder;
