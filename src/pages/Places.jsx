import React from "react";
import "../pages/places.css";
import img21 from "../asset/image/img21.png";
import c1img from "../asset/image/c1img.png";
import c2img from "../asset/image/c2img.png";
import c4img from "../asset/image/c4img.png";
import "bootstrap-icons/font/bootstrap-icons.css";

const Places = () => {
  const sections = [
    {
      title: "Beach and Coastal Escapes",
      image: img21,
      description:
        "Discover pristine beaches and coastal beauty. Our carefully curated tours offer unforgettable experiences along the most beautiful shorelines.",
      locations: [
        "Famous Beach Tours",
        "Coastal Adventure Packages",
        "Sunset Beach Walks",
        "Island Hopping Tours",
      ],
    },
    {
      title: "Wildlife Safaris",
      image: c1img,
      description:
        "Experience the thrill of wildlife in their natural habitat. Our expert guides ensure safe and exciting safari adventures.",
      locations: [
        "National Park Tours",
        "Bird Watching Expeditions",
        "Big Game Safaris",
        "Photography Tours",
      ],
    },
    {
      title: "Cultural and Heritage Tours",
      image: c2img,
      description:
        "Immerse yourself in rich cultural experiences and historical sites. Explore ancient traditions and local customs.",
      locations: [
        "Historical Site Visits",
        "Traditional Village Tours",
        "Art and Craft Tours",
        "Festival Celebrations",
      ],
    },
    {
      title: "Mountain Adventures",
      image: c4img,
      description:
        "Embark on exciting mountain expeditions. From hiking to climbing, experience the thrill of mountain adventures.",
      locations: [
        "Trekking Expeditions",
        "Mountain Climbing",
        "Valley Exploration",
        "Scenic Hiking Tours",
      ],
    },
  ];

  return (
    <div className="places-container">
      <div className="header-section">
        <h1>See</h1>
        <i className="bi bi-dot"></i>
        <h2>What we have to Offer</h2>
      </div>

      <div className="sections-container">
        {sections.map((section, index) => (
          <div
            className="section"
            key={index}
            style={{ backgroundImage: `url(${section.image})` }}
          >
            <div className="content-overlay">
              <h3 data-title={section.title}>{section.title}</h3>
              <p>{section.description}</p>
              <div className="locations">
                <p>We offer within tours at</p>
                <ul>
                  {section.locations.map((location, idx) => (
                    <li key={idx}>{location}</li>
                  ))}
                </ul>
              </div>
              <button className="explore-button">Explore More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Places;
