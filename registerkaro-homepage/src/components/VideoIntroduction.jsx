import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const VideoIntroduction = () => {
  return (
    <div className="container-fluid bg-primary text-white py-5">
      <div className="container d-flex flex-wrap align-items-center">
        <div className="col-md-6">
          <h2 className="fw-bold">Our Video Introductions</h2>
          <p>
            Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
            vulputate pellentesque a diam tincidunt.
          </p>
          <div className="mt-4">
            <div className="d-flex align-items-start mb-3">
              <span className="fs-2 me-3">💡</span>
              <div>
                <h5 className="fw-bold">Explore ideas together</h5>
                <p className="mb-0">Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
              </div>
            </div>
            <div className="d-flex align-items-start">
              <span className="fs-2 me-3">🚀</span>
              <div>
                <h5 className="fw-bold">Bring those ideas to life</h5>
                <p className="mb-0">Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <div className="position-relative">
            <img src="/path-to-video-thumbnail.jpg" alt="Video Introduction" className="img-fluid rounded shadow" />
            <button className="btn btn-danger position-absolute top-50 start-50 translate-middle">
              ▶
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoIntroduction;
