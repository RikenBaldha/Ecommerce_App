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
  <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    ...
  </div>
</div>
  </>
  )
}

export default About