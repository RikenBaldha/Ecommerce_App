import React from 'react'
import "./about.css"
function About() {
  document.title = "About Us"
  return (
    <>
    <div className="about-us-container">
    <h2 className='about'>About Us</h2>
    <p>
      Welcome to our ecommerce website! We are dedicated to providing high-quality products and excellent service to our customers. Our mission is to make online shopping a seamless and enjoyable experience for everyone.
    </p>
    <p>
      At our store, you'll find a wide range of products, including electronics, clothing, accessories, and much more. We strive to offer competitive prices without compromising on quality.
    </p>
    <p>
      Our team is committed to ensuring that your shopping experience is convenient, secure, and efficient. If you have any questions or feedback, please don't hesitate to contact us.
    </p>
    
  </div>
  
  </>
  )
}

export default About