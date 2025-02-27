import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HappyClients = () => {
  const clients = [
    "/path-to-logo1.png",
    "/path-to-logo2.png",
    "/path-to-logo3.png",
    "/path-to-logo4.png",
    "/path-to-logo5.png",
    "/path-to-logo6.png",
    "/path-to-logo7.png",
    "/path-to-logo8.png",
  ];

  return (
    <div className="container text-center my-5">
      <h2 className="fw-bold">Our Happy Clients</h2>
      <p className="text-muted">
        Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling
        customer service for state-of-the-art customer service.
      </p>
      <div className="d-flex flex-wrap justify-content-center gap-4 mt-4">
        {clients.map((logo, index) => (
          <div key={index} className="rounded-circle border p-3 shadow-sm" style={{ width: "80px", height: "80px" }}>
            <img src={logo} alt={`Client ${index + 1}`} className="img-fluid" />
          </div>
        ))}
      </div>
      <button className="btn btn-link text-primary mt-4">Show more →</button>
    </div>
  );
};

export default HappyClients;
