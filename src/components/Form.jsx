import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./form.css";
import { Link, useNavigate } from "react-router-dom";
import { CloudLightning } from "phosphor-react";

function Form() {
  const [name, setName] = useState("");
  const [number, setnumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setaddress] = useState("");
  const [data, setdata] = useState([]);

  const navigate = useNavigate();
  // function to update state of name with
  // value enter by user in form
  const handleChange = (e) => {
    setName(e.target.value);
  };
  // function to update state of number with value
  // enter by user in form
  const handlenumberChange = (e) => {
    setnumber(e.target.value);
  };
  // function to update state of email with value
  // enter by user in form
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  // function to update state of address with
  // value enter by user in form
  const handleaddressChange = (e) => {
    setaddress(e.target.value);
  };

  let name1 = name;
  let email1 = email;
  let number1 = number;
  let address1 = address;
  // below function will be called when user
  // click on submit button .
  const check = (e) => {
  e.preventDefault()
      setTimeout(() => {
        navigate("/placeorder");
      }, 1000);
    
  };

  return (
    <>
      <form class="row g-3 form">
        <div class="col-md-6 ">
          <label for="name" class="form-label">
            Name
          </label>
          <input type="name" class="form-control" id="name" />
        </div>
        <div class="col-md-6 ">
          <label for="inputEmail4" class="form-label">
            Email
          </label>
          <input type="email" class="form-control" id="inputEmail4" />
        </div>
        {/* <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Password
          </label>
          <input type="password" class="form-control" id="inputPassword4" />
        </div> */}
        <div class="col-12">
          <label for="inputAddress" class="form-label">
            Address
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div class="col-12">
          <label for="inputAddress2" class="form-label">
            Address 2
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">
            City
          </label>
          <input type="text" class="form-control" id="inputCity" />
        </div>
        <div class="col-md-4">
          <label for="inputState" class="form-label">
            State
          </label>
          <select id="inputState" class="form-select">
            <option selected>Choose...</option>
            <option>Gujrat</option>
            <option>M.H</option>
            <option>U.P</option>
          </select>
        </div>
        <div class="col-md-2">
          <label for="inputZip" class="form-label">
            Zip
          </label>
          <input type="text" class="form-control" id="inputZip" />
        </div>
        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div class="col-12">
          <button  onClick={check} type="submit" class="btn btn-primary">
          Go To Payment Page
          </button>
        </div>
      </form>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <form>
    //       <div className="text">
    //         <label>Name:</label>
    //         <input
    //           style={{ marginLeft: "10px" }}
    //           className="form"
    //           type="text"
    //           value={name}
    //           required
    //           onChange={(e) => {
    //             handleChange(e);
    //           }}
    //         />
    //         <br />
    //       </div>
    //       <div className="text">
    //         <label>Phone num:</label>
    //         <input
    //           className="form"
    //           type="number"
    //           value={number}
    //           required
    //           onChange={(e) => {
    //             handlenumberChange(e);
    //           }}
    //         />
    //         <br />
    //       </div>
    //       <div className="text">
    //         <label>Email:</label>
    //         <input
    //           style={{ marginLeft: "10px" }}
    //           className="form"
    //           type="email"
    //           value={email}
    //           required
    //           onChange={(e) => {
    //             handleEmailChange(e);
    //           }}
    //         />
    //         <br />
    //       </div>
    //       <div className="text">
    //         {" "}
    //         <label>Address:</label>
    //         <input
    //           style={{ marginLeft: "10px" }}
    //           className="form"
    //           type="text"
    //           value={address}
    //           required
    //           onChange={(e) => {
    //             handleaddressChange(e);
    //           }}
    //         />
    //         <br />
    //       </div>

    //       <input
    //         onClick={check}
    //         className="submit-btn"
    //         // type="submit"
    //         value="Go To Payment Page"
    //       />
    //     </form>
    //   </header>
    // </div>
  );
}

export default Form;
