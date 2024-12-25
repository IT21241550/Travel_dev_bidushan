// // Pk1.jsx
// import React, { useRef, useState } from "react";
// import "../pages/pk1.css";
// import backgroundImage from "../asset/image/imgp1.jpg";
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// function Pk1() {
//   const lowerCardRef = useRef(null);
//   const [showMap, setShowMap] = useState(false);

//   const mapContainerStyle = {
//     width: '100%',
//     height: '400px'
//   };

//   const center = {
//     lat: 7.957118,
//     lng: 80.7576874
//   };

//   const handlePurchaseClick = () => {
//     lowerCardRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   const handleViewRoadmap = () => {
//     setShowMap(true);
//   };

//   const handleCloseMap = () => {
//     setShowMap(false);
//   };

//   return (
//     <div className="container">
//       {showMap && (
//         <div className="map-overlay">
//           <div className="map-container">
//             <button className="close-map" onClick={handleCloseMap}>×</button>
//             <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
//               <GoogleMap
//                 mapContainerStyle={mapContainerStyle}
//                 center={center}
//                 zoom={15}
//               >
//                 <Marker position={center} />
//               </GoogleMap>
//             </LoadScript>
//           </div>
//         </div>
//       )}

//       {/* Top Card */}
//       <div className="intro-card">
//         <div className="content-wrapper">
//           <div className="close-button">×</div>
//           <h1>1 Day packege</h1>
//           <h2></h2>
//           <p className="intro-description">
//             Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
//           </p>
          
//           <div className="video-section">
//             <button className="video-btn">
//               <span className="play-icon">▶</span>
//               Watch Video
//             </button>
//           </div>

//           <div className="trip-info">
//             <div className="person-info">
//               <span className="icon">👤</span>
//               <span>3 Person</span>
//             </div>
//             <div className="duration-info">
//               <span className="icon">🗓</span>
//               <span>4 Days Trip</span>
//             </div>
//             <p className="cost-note">*All the cost calculated and added!</p>
//             <span className="price">300$</span>
//           </div>

//           <div className="action-buttons">
//             <button className="roadmap-btn" onClick={handleViewRoadmap}>
//               VIEW ROADMAP
//             </button>
//             <button className="purchase-btn" onClick={handlePurchaseClick}>
//               Purchase now
//             </button>
//           </div>

//           <div className="slider-dots">
//             <span className="dot active"></span>
//             <span className="dot"></span>
//             <span className="dot"></span>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Card */}
//       <div className="surfing-card" ref={lowerCardRef} style={{ backgroundImage: `url(${backgroundImage})` }}>
//         <div className="card-header">
//           <button className="back-btn">
//             <span className="back-icon">‹</span>
//             Back
//           </button>
//           <div className="package-title">
//             <h1>Unawatuna</h1>
//             <h2>Surfing Package</h2>
//           </div>
//         </div>

//         <div className="package-description">
//           <p>
//             Lorem ipsum is simply dummy text of the printing and typesetting industry. 
//             Lorem ipsum has been the industry's standard dummy text ever since the 1500s, 
//             when an unknown printer took a galley of type and scrambled it to make a type specimen book.
//           </p>
//         </div>

//         <div className="customize-section">
//           <h3>Customize</h3>
          
//           <div className="options-container">
//             <div className="option-group person-count">
//               <button>±8</button>
//               <button>±5</button>
//               <button>±3</button>
//             </div>

//             <div className="divider"></div>

//             <div className="option-group package-type">
//               <button className="active">Regular</button>
//               <button>Premium</button>
//             </div>

//             <div className="divider"></div>

//             <div className="option-group day-count">
//               <button>7 Days</button>
//               <button className="active">5 Days</button>
//             </div>
//           </div>
//         </div>

//         <div className="booking-section">
//           <select className="country-select">
//             <option value="">Sri Lanka</option>
//             <option value="">India</option>
//           </select>

//           <div className="trip-summary">
//             <div className="trip-details">
//               <p>3 Person</p>
//               <p>5 Days Trip</p>
//             </div>
//             <p className="total-price">300$</p>
//           </div>

//           <button className="checkout-btn">Check Out</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Pk1;


import React, { useRef, useState } from "react";
import "../pages/pk1.css";
import backgroundImage from "../asset/image/map.png";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function Pk1() {
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

  const handlePurchaseClick = () => {
    lowerCardRef.current?.scrollIntoView({ behavior: "smooth" });
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
            <button className="close-map" onClick={handleCloseMap}>×</button>
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
          <h1>1 Day Package</h1>
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
            <h1>Unawatuna</h1>
            <h2>Surfing Package</h2>
          </div>
        </div>

        <div className="package-description">
          <div className="itinerary-section">
            <h3>Itinerary</h3>
            <div className="itinerary-scroll">
              <div className="day-details">
                <h4>Day 1</h4>
                <ul>
                  <li>Visit Galle Fort</li>
                  <li>Explore Unawatuna Beach</li>
                  <li>Snorkeling Adventure</li>
                </ul>
              </div>
              <div className="day-details">
                <h4>Day 2</h4>
                <ul>
                  <li>Surfing at Jungle Beach</li>
                  <li>Visit Japanese Peace Pagoda</li>
                  <li>Evening Leisure</li>
                </ul>
              </div>
              <div className="day-details">
                <h4>Day 3</h4>
                <ul>
                  <li>Morning Safari</li>
                  <li>Relax at Dalawella Beach</li>
                  <li>Evening Bonfire</li>
                </ul>
              </div>
              <div className="day-details">
                <h4>Day 4</h4>
                <ul>
                  <li>Surfing at Jungle Beach</li>
                  <li>Visit Japanese Peace Pagoda</li>
                  <li>Evening Leisure</li>
                </ul>
              </div>
              <div className="day-details">
                <h4>Day 5</h4>
                <ul>
                  <li>Surfing at Jungle Beach</li>
                  <li>Visit Japanese Peace Pagoda</li>
                  <li>Evening Leisure</li>
                </ul>
              </div>
              <div className="day-details">
                <h4>Day 6</h4>
                <ul>
                  <li>Surfing at Jungle Beach</li>
                  <li>Visit Japanese Peace Pagoda</li>
                  <li>Evening Leisure</li>
                </ul>
              </div>
              <div className="day-details">
                <h4>Day 7</h4>
                <ul>
                  <li>Surfing at Jungle Beach</li>
                  <li>Visit Japanese Peace Pagoda</li>
                  <li>Evening Leisure</li>
                </ul>
              </div>
              <div className="day-details">
                <h4>Day 8</h4>
                <ul>
                  <li>Surfing at Jungle Beach</li>
                  <li>Visit Japanese Peace Pagoda</li>
                  <li>Evening Leisure</li>
                </ul>
              </div>
              <div className="day-details">
                <h4>Day 9</h4>
                <ul>
                  <li>Surfing at Jungle Beach</li>
                  <li>Visit Japanese Peace Pagoda</li>
                  <li>Evening Leisure</li>
                </ul>
              </div>
              <div className="day-details">
                <h4>Day 1</h4>
                <ul>
                  <li>Surfing at Jungle Beach</li>
                  <li>Visit Japanese Peace Pagoda</li>
                  <li>Evening Leisure</li>
                </ul>
              </div>
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

export default Pk1;
