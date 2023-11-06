import React from "react";
import { Input } from "@mui/material";
import "./filter.css"

function Filter({products,setProducts, handleSortByall ,handleSortByphone,handleSortByheadphone,handleSortByac,handleSortBylaptop,handleSortByPrice0To, handleSortByPrice0To500 ,handleSortByPrice500To1000 ,handleSortByPrice1000To5000 , handleSortByPrice5000And10000 , handleSortByPrice10000AndAbove}) {

  return (
    <>
    <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1 >
        </div>
  
      <h2 className="sidebar-title">Category</h2> 
      <div className="type">
        <label className="sidebar-label-container">
          <input onClick={handleSortByall} type="radio" value="" name="test" selected />
          <span className="checkmark"></span>All
        </label>
        {/* handleChange={handleChange} */}
         <label className="sidebar-label-container">
          <input onClick={handleSortByphone}  type="radio" value="" name="test" />
          <span className="checkmark"></span>Phone
        </label>
       
          <label className="sidebar-label-container">
          <input onClick={handleSortByheadphone} type="radio" value="" name="test" />
          <span className="checkmark"></span>Head Phones
        </label>
       
           <label className="sidebar-label-container">
          <input onClick={handleSortByac} type="radio" value="" name="test" />
          <span className="checkmark"></span>AC  
        </label>
    
           <label className="sidebar-label-container">
          <input onClick={handleSortBylaptop} type="radio" value="" name="test" />
          <span className="checkmark"></span>Laptop  
        </label>
      </div>

      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>

        <label className="sidebar-label-container">
          <input onClick={handleSortByPrice0To} type="radio" value="" name="test2" />
          <span className="checkmark"></span>Sort (Low To High) 
        </label>

        <label className="sidebar-label-container">
          <input onClick={handleSortByPrice0To500} type="radio" value="500" name="test2" />
          <span className="checkmark"></span>0-500
        </label>

        <label className="sidebar-label-container">
          <input onClick={handleSortByPrice500To1000} type="radio" value="1000" name="test2" />
          <span className="checkmark"></span>500-1000
        </label>

        <label className="sidebar-label-container">
          <input onClick={handleSortByPrice1000To5000} type="radio" value="5000" name="test2" />
          <span className="checkmark"></span>1000-5000
        </label>

        <label className="sidebar-label-container">
          <input  onClick={handleSortByPrice5000And10000}type="radio" value="all" name="test2" />
          <span className="checkmark"></span>5000-10000
        </label>

        <label className="sidebar-label-container">
          <input  onClick={handleSortByPrice10000AndAbove}type="radio" value="all" name="test2" />
          <span className="checkmark"></span>10000+
        </label>

       
      </div>
          </section>
    </>
  );
}

export default Filter;
