import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ServicesSection = () => {
  const services = [
    { title: "Company Formation", description: "Build web-based solutions that enhance customer experience.", icon: "⚙️" },
    { title: "Company Secretarial Services", description: "Make data-driven decisions and utilize technology to reach business goals.", icon: "📊" },
    { title: "Virtual Office Address", description: "Foster customer relationships by effectively serving your market.", icon: "⭐" },
    { title: "Annual Compliance Services", description: "Turn your ideas into modern products with our design experts.", icon: "📦" },
    { title: "Payroll Services", description: "Expand your business across the globe with minimal effort.", icon: "🌍" },
    { title: "Bookkeeping Services", description: "Steering user behaviors with creative design, data insights & technology.", icon: "📒" }
  ];

  return (
    <div className="container text-center my-5">
      <h6 className="text-warning">WELCOME TO REGISTERKARO.IN</h6>
      <h2 className="fw-bold">Explore Our Services</h2>
      <div className="row mt-4">
        {services.map((service, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="p-4 border rounded shadow-sm">
              <div className="fs-2 text-warning">{service.icon}</div>
              <h5 className="fw-bold mt-3">{service.title}</h5>
              <p className="text-muted">{service.description}</p>
              <a href="#" className="text-primary fw-bold">Learn more →</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection ;
