import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutSection = () => {
  return (
    <div className="container my-5 d-flex align-items-center">
      <div className="col-md-6">
        <h6 className="text-warning">WELCOME TO REGISTERKARO.IN</h6>
        <h2 className="fw-bold">About <span className="text-warning">Register Karo</span></h2>
        <p className="text-muted">
          We have been using Intelegencia as our DevOps vendor for our field service applications over the last couple of years,
          and I’m extremely pleased with their performance, ability to execute, and willingness to adapt in our ever-changing environment.
          Perry is an outstanding leader who is fanatical about customer satisfaction. He has built a solid team which has consistently
          delivered on projects thereby exceeding everyone’s expectations.
        </p>
        <p className="text-muted">
          I would strongly recommend their services to any organization that is looking for solid, reliable, and predictable outcomes.
        </p>
        <button className="btn btn-primary">Learn More →</button>
      </div>
      <div className="col-md-6 text-center">
        <img src="/path-to-team-image.png" alt="Team" className="img-fluid rounded shadow" />
      </div>
    </div>
  );
};

export default AboutSection;
