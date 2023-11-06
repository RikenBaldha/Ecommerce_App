
import React from "react";
import { useState ,useEffect} from "react";
import { Link } from "react-router-dom";

function Same({ all }) {
    const [filteredProducts, setFilteredProducts] = useState([]); // Provide an initial value, assuming filteredProducts is an array
    const [my, setmy] = useState([]); // Provide an initial value, assuming filteredProducts is an array

    useEffect(() => {
        const uniqueAsins = new Set();
        const updatedFilteredProducts = [];
        
        all.forEach((productItem) => {
          const { asin } = productItem;
          if (!uniqueAsins.has(asin)) {
            uniqueAsins.add(asin);
            updatedFilteredProducts.push(asin);
          } else {
            setmy(prevState => [...prevState, asin]);
          }
        });
      
        setFilteredProducts(updatedFilteredProducts);
      }, [all]);
      
      console.log(`same: ${my}`);
      console.log(`my: ${filteredProducts}`);


  return (
    <div className="all-products">
      {all.map((productItem, index) => (
        <div key={index} class="card" style={{ width: "18rem" }}>
          <Link to={`/${productItem.asin}`}>
            <img
              src={productItem.product_photo}
              class="card-img-top"
              alt="..."
              width="287px"
              height="200px"
            />
            {/* <span>------------------------------</span> */}
            <br />
            <div class="card-body">
              <h5 class="card-title">Price:- {productItem.product_price}</h5>
              <p class="card-text">
                {productItem.product_title.slice(0, 50)}...
              </p>
              <Link to={`/${productItem.asin}`} class="btn btn-primary">
                More Details
              </Link>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Same;
