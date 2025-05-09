import React from 'react'
import { Link } from 'react-router-dom'
import Map from './Map'

const About = () => {
  return (
    <div className='bg-secondary glowing-div'>
      <h1>About Us</h1>
      <p className='text-info'>Welcome to our e-commerce platform! We are dedicated to providing you with the best online shopping experience. Our mission is to offer a wide range of high-quality products at competitive prices, all while ensuring exceptional customer service.</p>
      <p className='text-warning'>Our team is passionate about curating the latest trends and must-have items, so you can find everything you need in one place. Whether you're looking for fashion, electronics, home goods, or more, we've got you covered.</p>
      <p className='text-white'>We believe in making online shopping easy and enjoyable. Our user-friendly website and secure payment options ensure a seamless experience from start to finish. Plus, our dedicated customer support team is always here to assist you with any questions or concerns.</p>
      <p className='text-dark'>Thank you for choosing us as your go-to e-commerce platform. We look forward to serving you and helping you discover amazing products that fit your lifestyle.</p>
      <p className='text-danger'>Happy shopping!</p>
      <Link to="/contact">Contact Us</Link>
      <marquee behavior="" direction="">We are the leading ecommerce platform. Try us and you'll never regret</marquee>

      <section className="row">
        <div className="col-md-12 card bg-dark justify-content-center">
          <h1>View Our Map</h1>
          <Map />
        </div>
      </section>
    </div>
  )
}

export default About;
