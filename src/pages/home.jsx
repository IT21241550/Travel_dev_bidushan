import React from "react";
import "../pages/Home.css";
import img1 from "../asset/image/img1.png";
import imgl from "../asset/image/imgl.png";
import imgr from "../asset/image/imgr.png";
import Group83 from "../asset/image/Group83.png";
import ss1 from "../asset/image/ss1.png"
import img6 from "../asset/image/img6.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane, faShield, faStar } from "@fortawesome/free-solid-svg-icons";

// "Why Book With Us" card details
const whyBookCards = [
  {
    title: "Expert Local Knowledge",
    content:
      "Our team of local experts is passionate about Sri Lanka and knows the best-kept secrets of the island. You'll get insider tips and personalized recommendations to make your trip truly special.",
  },
  {
    title: "24/7 Customer Support",
    content:
      "We're here for you around the clock, offering support before, during, and after your trip. We take care of all the logistics, so you can focus on enjoying your vacation.",
  },
  {
    title: "Sustainable Travel",
    content:
      "We believe in responsible tourism. Our tours and safaris are designed to have a positive impact on the environment and local communities. Travel with us knowing that you are supporting conservation efforts and local livelihoods.",
  },
  {
    title: "Custom Itineraries",
    content:
      "Our team designs personalized itineraries tailored to your interests, ensuring your experience is unique and unforgettable.",
  },
  {
    title: "Affordable Luxury",
    content:
      "We offer premium travel experiences at prices that won’t break the bank, ensuring value for every dollar you spend.",
  },
];

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content2">
          <h2 className="top-right-text">Sri Lanka</h2>
        </div>

        <img src={img1} alt="Sri Lanka Landscape" className="home-image" />
        <img src={Group83} alt="circle" className="home-image2" />
        <div className="hero-content">
          <h1>
            Explore
            <br />
            &Travel
          </h1>
        </div>
      </div>

      {/* Discover Section */}
      <div className="discover-section">
        <h2>
          Discover the Beauty of <span className="highlight">Sri Lanka</span>
          <br />
          Your Dream <span className="highlight">Safari</span> Awaits
        </h2>

        <div className="discover-content">
          {/* Elephant images container */}
          <div className="elephant-images-container">
            <img src={imgr} alt="Elephant Left" className="elephant-imagel" />
            <img src={imgl} alt="Elephant Right" className="elephant-imager" />
          </div>

          {/* Center content */}
          <div className="center-content">
            <p className="discover-text">
              Welcome to Do&Be Travels and Tours, your gateway to the tropical
              paradise of Sri Lanka. Immerse yourself in the island's rich
              culture, breathtaking landscapes, and unparalleled wildlife
              experiences.
            </p>
            <div className="button-container">
              <button className="learn-more-btn">Learn More</button>
              <div className="watch-container">
                <button className="watch-btn">Watch</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <h2>Our All-Inclusive Services</h2>
        <div className="services-container">
          <div className="service-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faPlane} className="service-icon" />
            </div>
            <h3>Tailored Travel Packages</h3>
            <p>
              Discover endless new ways to enjoy your holiday with a carefully
              crafted and personalized travel experience.
            </p>
          </div>

          <div className="service-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faShield} className="service-icon" />
            </div>
            <h3>Safari Adventures</h3>
            <p>
              Let expert guides take you through thrilling adventures in Sri
              Lanka's most beautiful wildlife sanctuaries.
            </p>
          </div>

          <div className="service-card">
            <div className="icon-container">
              <FontAwesomeIcon icon={faStar} className="service-icon" />
            </div>
            <h3>Luxury & Comfort</h3>
            <p>
              Experience the finest accommodations and services throughout your
              journey with our premium travel packages.
            </p>
          </div>
        </div>
      </div>

      {/* Why Book Section */}
      <div className="why-book-section">
        <h2>Why Book With Do&Be Travels and Tours?</h2>
        <div className="why-book-circle">
          {whyBookCards.map((card, index) => (
            <div className="why-book-card" key={index}>
              <h3>{card.title}</h3>
              <p>{card.content}</p>
            </div>
          ))}
          
        </div>
        
      </div>


           {/* Why Book Section */}
  <div className="why-book-section">
<h2>Why Book With Do&Be Travels and Tours?</h2>
<div className="why-book-container">
 <img src={ss1} alt="Why Book With Us" className="why-book-image" />
</div>
</div>

      {/* Review Section */}
<div className="reviews-section">
  <h2>What Our Customers Say</h2>
  <div className="reviews-container">
    <div className="reviews-scroll">
      <div className="review-card">
        <div className="review-header">
          <img
            src="https://via.placeholder.com/50"
            alt="Reviewer"
            className="reviewer-image"
          />
          <div className="reviewer-info">
            <h4>John Doe</h4>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
        </div>
        <p className="review-comment">
          Amazing experience! The service was top-notch, and the team was very
          accommodating. Highly recommend!
        </p>
      </div>
      
      

      <div className="review-card">
        <div className="review-header">
          <img
            src="https://via.placeholder.com/50"
            alt="Reviewer"
            className="reviewer-image"
          />

          
          <div className="reviewer-info">
            <h4>Jane Smith</h4>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              
            </div>
          </div>
        </div>
        <p className="review-comment">
          Everything was perfect! From the booking process to the actual trip,
          it was seamless and enjoyable.
        </p>
      </div>

      <div className="review-card">
        <div className="review-header">
          <img
            src="https://via.placeholder.com/50"
            alt="Reviewer"
            className="reviewer-image"
          />

          
          <div className="reviewer-info">
            <h4>Jane Smith</h4>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
        </div>
        <p className="review-comment">
          Everything was perfect! From the booking process to the actual trip,
          it was seamless and enjoyable.
        </p>
      </div>

      <div className="review-card">
        <div className="review-header">
          <img
            src="https://via.placeholder.com/50"
            alt="Reviewer"
            className="reviewer-image"
          />

          
          <div className="reviewer-info">
            <h4>Jane Smith</h4>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
        </div>
        <p className="review-comment">
          Everything was perfect! From the booking process to the actual trip,
          it was seamless and enjoyable.
        </p>
      </div>

      <div className="review-card">
        <div className="review-header">
          <img
            src="https://via.placeholder.com/50"
            alt="Reviewer"
            className="reviewer-image"
          />

          
          <div className="reviewer-info">
            <h4>Jane Smith</h4>
            <div className="rating">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
        </div>
        <p className="review-comment">
          Everything was perfect! From the booking process to the actual trip,
          it was seamless and enjoyable.
        </p>
      </div>

      {/* Add more review cards as needed */}
    </div>
  </div>
</div>

      
    </div>
  );
}

export default Home;
