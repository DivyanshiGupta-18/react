import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PartnersSection = () => {
  const partners = [
    { name: "coinbase", logo: "/path-to-coinbase-logo.png" },
    { name: "Spotify", logo: "/path-to-spotify-logo.png" },
    { name: "Slack", logo: "/path-to-slack-logo.png" },
    { name: "Dropbox", logo: "/path-to-dropbox-logo.png" },
    { name: "Webflow", logo: "/path-to-webflow-logo.png" },
    { name: "Zoom", logo: "/path-to-zoom-logo.png" }
  ];

  return (
    <div className="container-fluid bg-white py-5 text-center">
      <div className="container d-flex justify-content-around flex-wrap">
        {partners.map((partner, index) => (
          <img key={index} src={partner.logo} alt={partner.name} className="mx-3" height="40" />
        ))}
      </div>
    </div>
  );
};

export default PartnersSection;
