// import React, { useRef, useState, useEffect } from "react";
// import "../pages/pk7.css";
// import backgroundImage from "../asset/image/map.png";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// function Pk7() {
//   const lowerCardRef = useRef(null);
//   const [showMap, setShowMap] = useState(false);

//   const mapContainerStyle = {
//     width: "100%",
//     height: "400px",
//   };

//   const center = {
//     lat: 7.957118,
//     lng: 80.7576874,
//   };

//   useEffect(() => {
//     window.scrollTo(0, 0); // Ensure page starts at the top
//   }, []);

//   const handlePurchaseClick = () => {
//     if (lowerCardRef.current) {
//       lowerCardRef.current.scrollIntoView({ behavior: "smooth" });
//     }
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
//             <button className="close-map" onClick={handleCloseMap}>
//               ×
//             </button>
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
//           <h1>7 Day Package</h1>
//           <p className="intro-description">
//             Lorem ipsum is simply dummy text of the printing and typesetting industry.
//             Lorem ipsum has been the industry's standard dummy text ever since the 1500s.
//           </p>

//           <div className="video-section">
//             <button className="video-btn">
//               <span className="play-icon">▶</span> Watch Video
//             </button>
//           </div>

//           <div className="trip-info">
//             <div className="person-info">
//               <span className="icon">👤</span> 3 Person
//             </div>
//             <div className="duration-info">
//               <span className="icon">🗓</span> 4 Days Trip
//             </div>
//             <p className="cost-note">*All costs calculated and included!</p>
//             <span className="price">$300</span>
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
//       <div
//         className="surfing-card"
//         ref={lowerCardRef}
//         style={{ backgroundImage: `url(${backgroundImage})` }}
//       >
//         <div className="card-header">
//           <button className="back-btn">
//             <span className="back-icon">‹</span> Back
//           </button>
//           <div className="package-title">
//             <h1>7 Day Package</h1>
//             <h2>Places</h2>
//           </div>
//         </div>

//         <div className="package-description">
//           <div className="itinerary-section">
//             <h3>Itinerary</h3>
//             <div className="itinerary-scroll">
//               <div className="day-details">
//                 <h4>Day 1</h4>
//                 <ul>
//                   <li>Airport | Galle</li>
//                   <li>Explore Unawatuna Beach</li>
//                   <li>Galle Dutch Fort</li>
//                   <li>Roomassala Temple</li>
//                   <li>Sea Turtle hetchary</li>
//                   <li>whales and Dolpine bort Ride</li>
//                 </ul>
//               </div>
//               <div className="day-details">
//                 <h4>Day 2</h4>
//                 <ul>
//                   <li>Ella</li>
//                   <li>whales and Dolpine bort Ride</li>
//                   <li>Evening yala safari</li>
//                   <li>Night ella</li>
//                 </ul>
//               </div>
//               <div className="day-details">
//                 <h4>Day 3</h4>
//                 <ul>
//                   <li>Ella</li>
//                   <li>Nine arch Bridge</li>
//                   <li>Ella Rock </li>
//                   <li>Mini Adams Peak & Ravana Pool Club</li>
//                   <li>Night Ella</li>
//                 </ul>
//               </div>
//               <div className="day-details">
//                 <h4>Day 4</h4>
//                 <ul>
//                   <li>Heading Nuwara-Eliya</li>
//                   <li>Seatha Kovil(Temple)</li>
//                   <li>Gregary late & Park</li>
//                   <li>Night at Nuwara-Eliya</li>
//                 </ul>
//               </div>
//               <div className="day-details">
//                 <h4>Day 5</h4>
//                 <ul>
//                 <li>Morning hike to Wolds end& Horton Plains</li>
//                   <li>Visit Japanese Peace Pagoda</li>
//                   <li>Evening Heading to Kandy</li>
//                   <li>Night Kandy</li>
//                 </ul>
//               </div>
//               <div className="day-details">
//                 <h4>Day 6</h4>
//                 <ul>
//                   <li>Morning visit Kandy City </li>
//                   <li>Visit Japanese Peace Pagoda</li>
//                   <li>Evening Heading to Kandy</li>
//                   <li>Night Kandy</li>
//                 </ul>
//               </div>
//               <div className="day-details">
//                 <h4>Day 7</h4>
//                 <ul>
//                   <li>Visit Galle Fort</li>
//                   <li>Explore Unawatuna Beach</li>
//                   <li>Snorkeling Adventure</li>
//                 </ul>
//               </div>
//               <div className="day-details">
//                 <h4>Day 8</h4>
//                 <ul>
//                   <li>Surfing at Jungle Beach</li>
//                   <li>Visit Japanese Peace Pagoda</li>
//                   <li>Evening Leisure</li>
//                 </ul>
//               </div>
//               <div className="day-details">
//                 <h4>Day 9</h4>
//                 <ul>
//                   <li>Visit Galle Fort</li>
//                   <li>Explore Unawatuna Beach</li>
//                   <li>Snorkeling Adventure</li>
//                 </ul>
//               </div>
//               <div className="day-details">
//                 <h4>Day 10</h4>
//                 <ul>
//                   <li>Surfing at Jungle Beach</li>
//                   <li>Visit Japanese Peace Pagoda</li>
//                   <li>Evening Leisure</li>
//                 </ul>
//               </div>
//               {/* Add other days as needed */}
//             </div>
//           </div>
//         </div>

//         <div className="booking-section">
//           <button className="checkout-btn">Purchase now</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Pk7;

import React, { useRef, useState, useEffect } from "react";
import "../pages/pk7.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function Pk7() {
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
          <h1>7 Day Package</h1>
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
      <div className="surfing-card" ref={lowerCardRef}>
        <div className="card-header">
          <button className="back-btn">
            <span className="back-icon">‹</span> Back
          </button>
          <div className="package-title">
            <h1>7 Day Package</h1>
            <h2>Places</h2>
          </div>
        </div>

        <div className="package-description">
          <div className="itinerary-section">
            <h3>Itinerary</h3>
            <div className="itinerary-scroll">
              {/* Add day details */}
              <div className="day-details">
                <h4>Day 1</h4>
                <ul>
                  <li>Airport | Galle</li>
                  <li>Explore Unawatuna Beach</li>
                  <li>Galle Dutch Fort</li>
                  <li>Roomassala Temple</li>
                  <li>Sea Turtle Hatchery</li>
                  <li>Whale and Dolphin Boat Ride</li>
                </ul>
              </div>
              {/* Add more days as needed */}
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

export default Pk7;
