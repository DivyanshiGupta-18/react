import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TrustedSection = () => {
  return (
    <div className="container text-center my-5">
      <h5 className="fw-bold">Trusted By Over 100+ Startups and freelance business</h5>
      <div className="d-flex justify-content-center flex-wrap gap-4 mt-4">
        <img src="/path-to-logo/oracle.png" alt="Oracle" height="40" />
        <img src="/path-to-logo/morpheus.png" alt="Morpheus" height="40" />
        <img src="/path-to-logo/samsung.png" alt="Samsung" height="40" />
        <img src="/path-to-logo/monday.png" alt="Monday" height="40" />
        <img src="/path-to-logo/segment.png" alt="Segment" height="40" />
      </div>
    </div>
  );
};

export default TrustedSection;
