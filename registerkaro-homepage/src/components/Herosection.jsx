import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Herosection = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
        <img className="navbar-brand" src="logo.webp" alt="RegisterKaro" />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Our Services</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Blog</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Contact Us</a></li>
            <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
          </ul>
          <button className="btn btn-warning ms-3">Talk An Expert</button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-md-6">
          <img className="navbar-brand" src="star-herosection.png" alt="star"></img>
            <h1>Your trusted partner for compliance business needs</h1>
            <p className="text-muted">
              An online business compliance platform that helps entrepreneurs and individuals with various
              <strong> registrations, tax filings,</strong> and other <strong>legal matters.</strong>
            </p>
            <div className="d-flex align-items-center mb-4">
              <div className="me-4"><strong>4.5+</strong> Customer Rating</div>
              <div className="me-4"><strong>20,000+</strong> Clients</div>
              <div><strong>99.8%</strong> Financial Stability</div>
            </div>
            <button className="btn btn-primary me-3">Talk An Expert</button>
            <button className="btn btn-outline-danger">See how it works</button>
          </div>
          <div className="col-md-6 text-center">
            <img src="/path-to-illustration.png" alt="Illustration" className="img-fluid" />
          </div>
        </div>
      </div>

      {/* Sidebar Buttons */}
      <div className="position-absolute end-0 top-50 translate-middle-y me-3">
        <button className="btn btn-light d-block mb-2">Annual Compliance</button>
        <button className="btn btn-light d-block mb-2">Payroll Services</button>
        <button className="btn btn-light d-block mb-2">Company Formation</button>
        <button className="btn btn-light d-block mb-2">Annual Compliance</button>
      </div>
    </div>
  );
};

export default Herosection;
