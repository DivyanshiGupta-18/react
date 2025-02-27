import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const FooterSection = () => {
  return (
    <footer className="container-fluid bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <p>Design outstanding interfaces with advanced Figma features in a matter of minutes.</p>
            <div className="d-flex gap-3">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-google"></i>
              <i className="fab fa-apple"></i>
              <i className="fab fa-instagram"></i>
            </div>
          </div>
          <div className="col-md-3">
            <h6 className="text-warning">START A BUSINESS</h6>
            <ul className="list-unstyled">
              <li>Features</li>
              <li>Solutions</li>
              <li>Integrations</li>
              <li>Enterprise</li>
              <li>Solutions</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className="text-warning">GOVERNMENT REGISTRATION</h6>
            <ul className="list-unstyled">
              <li>Partners</li>
              <li>Community</li>
              <li>Developers</li>
              <li>App</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className="text-warning">COMPLIANCE & TAX</h6>
            <ul className="list-unstyled">
              <li>Channels</li>
              <li>Scale</li>
              <li>Watch the Demo</li>
              <li>Our Competition</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>© 2024 Registerkaro. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
