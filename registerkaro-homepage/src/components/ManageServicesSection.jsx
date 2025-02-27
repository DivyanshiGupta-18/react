import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ManageServicesSection = () => {
  return (
    <div className="container-fluid bg-primary text-white py-5">
      <div className="container d-flex flex-wrap align-items-center">
        <div className="col-md-6">
          <h2 className="fw-bold">Manage Your Services by your Mobile Phone</h2>
          <p>
            Download our app to manage and track your services. Our app enables you to stay in touch with our experts
            and aids you in tracking your progress.
          </p>
          <div className="mt-4 d-flex">
            <button className="btn btn-light me-3">
              <img src="/path-to-appstore-logo.png" alt="App Store" height="30" className="me-2" /> Get it on App Store
            </button>
            <button className="btn btn-light">
              <img src="/path-to-googleplay-logo.png" alt="Google Play" height="30" className="me-2" /> Get it on Google Play
            </button>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <img src="/path-to-mobile-image.png" alt="Mobile App" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default ManageServicesSection;
