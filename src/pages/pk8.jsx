import React, { useRef, useState, useEffect } from "react";
import "../pages/pk8.css";
import backgroundImage from "../asset/image/map.png";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function Pk8() {
  const lowerCardRef = useRef(null);
  const [showMap, setShowMap] = useState(false);

  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 7.957118,
    lng: 80.7576874,
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Ensure page starts at the top
  }, []);

  const handlePurchaseClick = () => {
    if (lowerCardRef.current) {
      lowerCardRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleViewRoadmap = () => {
    setShowMap(true);
  };

  const handleCloseMap = () => {
    setShowMap(false);
  };

  return (
    <div className="container">
      {showMap && (
        <div className="map-overlay">
          <div className="map-container">
            <button className="close-map" onClick={handleCloseMap}>
              ×
            </button>
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={15}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      )}

      {/* Top Card */}
      <div className="intro-card">
        <div className="content-wrapper">
          <div className="close-button">×</div>
          <h1>8 Day Package</h1>
          <p className="intro-description">
            Lorem ipsum is simply dummy text of the printing and typesetting industry.
            Lorem ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>

          <div className="video-section">
            <button className="video-btn">
              <span className="play-icon">▶</span> Watch Video
            </button>
          </div>

          <div className="trip-info">
            <div className="person-info">
              <span className="icon">👤</span> 3 Person
            </div>
            <div className="duration-info">
              <span className="icon">🗓</span> 4 Days Trip
            </div>
            <p className="cost-note">*All costs calculated and included!</p>
            <span className="price">$300</span>
          </div>

          <div className="action-buttons">
            <button className="roadmap-btn" onClick={handleViewRoadmap}>
              VIEW ROADMAP
            </button>
            <button className="purchase-btn" onClick={handlePurchaseClick}>
              Purchase now
            </button>
          </div>

          <div className="slider-dots">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </div>

      {/* Bottom Card */}
      <div
        className="surfing-card"
        ref={lowerCardRef}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="card-header">
          <button className="back-btn">
            <span className="back-icon">‹</span> Back
          </button>
          <div className="package-title">
            <h1>8 Day </h1>
            <h2>Places</h2>
          </div>
        </div>

        <div className="package-description">
          <div className="itinerary-section">
           
            <div className="itinerary-scroll">
              <div className="day-details">
                <h4>Day 1</h4>
                <ul>
                  <li>Airport | Kandy</li>
                  <li>Kandy Temple of the Tooth Relic</li>
                  <li>Cultural Dance Show</li>
                </ul>
              </div>
              <div className="day-details">
                <h4>Day 2</h4>
                <ul>
                  <li>Pnnawala Elephant Orphanage & Feeding Baby Elephants</li>
                  <li>Kandy Spice Garden & Complementary - Ayurvedic Head Massage</li>
                  <li>Complementary - Batik Factory Visit</li>
                  <li>Complementary - Wood Carving Factory Visit</li>
                  
                </ul>
              </div>
              <div className="day-details">
                <h4>Day 3</h4>
                <ul>
                  <li>Kandy | Nuwara Eliya</li>
                  <li>Shri Bhakta Hanuman Temple</li>
                  <li>Ramboda Falls</li>
                 <li> Gregory Lake & Park</li>
                </ul>
              </div>
              <div className="day-details">
                <h4>Day 4</h4>
                <ul>
                  <li>Nuwara Eliya</li>
                  <li>Complementary - Tea Factory Visit</li>
                  <li>Gem Museum</li>
                  <li>Ambewela Farm</li>
                </ul>
              </div>
              <div className="day-details">
                <h4>Day 5</h4>
                <ul>
                  <li>Nuwara Eliya | Yala</li>
                  <li>Lovers Leap</li>
                  <li>Yala National Park & Safari</li>
                </ul>
              </div>
              <div className="day-details">
                <h4>Day 6</h4>
                <ul>
                  <li>Yala | Bentota</li>
                  <li>Madu River Boat Safari & Complementary- Fish Therapy</li>
                  <li>Sunset by the Bentota Beach & Relax</li>
                </ul>
              </div>
              <div className="day-details">
                <h4>Day 7</h4>
                <ul>
                  <li>Bentota</li>
                  <li>Turtle Hatchery Visit & Complementary - Baby Turtle Releasing</li>
                  <li>Sunset by the Bentota Beach & Relax</li>
                </ul>
              </div>
              <div className="day-details">
                <h4>Day 8</h4>
                <ul>
                  <li>Bentota | Colombo | Airport</li>
                  <li>Independence Square</li>
                  <li>Gangaramaya Temple</li>
                  <li>Complementary - Red Mosque</li>
                  <li>Lotus Tower</li>
                </ul>
              </div>
              {/* Add other days as needed */}
            </div>
          </div>
        </div>

        <div className="booking-section">
          <button className="checkout-btn">Purchase now</button>
        </div>
      </div>
    </div>
  );
}

export default Pk8;
