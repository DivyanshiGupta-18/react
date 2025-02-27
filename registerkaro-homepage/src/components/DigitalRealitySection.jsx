import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const DigitalRealitySection = () => {
  return (
    <div className="container-fluid bg-primary text-white py-5 text-center">
      <h6 className="text-uppercase text-muted">1% OF THE INDUSTRY</h6>
      <h2 className="fw-bold">Welcome to your new digital reality. Now.</h2>
      <div className="d-flex justify-content-center mt-4">
        <input
          type="email"
          className="form-control w-50 me-2"
          placeholder="Enter Your Email"
        />
        <button className="btn btn-warning">Submit</button>
      </div>
      <div className="mt-3 d-flex justify-content-center gap-3">
        <span>✔ Instant results</span>
        <span>✔ User-friendly interface</span>
        <span>✔ Personalized customization</span>
      </div>
    </div>
  );
};

export default DigitalRealitySection;
