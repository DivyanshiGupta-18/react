import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const WhyChooseSection = () => {
  const features = [
    { title: "Confidential & Safe", description: "All your private information is safe with us", icon: "🛡️" },
    { title: "No Hidden Fee", description: "Everything is put before you with no hidden charges or conditions", icon: "✅" },
    { title: "Guaranteed Satisfaction", description: "We ensure that you stay 100% satisfied with our offered services", icon: "😊" },
    { title: "Expert CA/CS Assistance", description: "Prompt support from our in-house expert professionals", icon: "👨‍⚖️" }
  ];

  return (
    <div className="container text-center my-5">
      <h6 className="text-warning">WHY REGISTERKARO.IN</h6>
      <h2 className="fw-bold">Why Choose Register Karo</h2>
      <p className="text-muted">
        It is with consistent services and results that build trust with the people and that in turn help us to serve the business better.
      </p>
      <div className="row mt-4">
        {features.map((feature, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="p-4 border rounded shadow-sm bg-light">
              <div className="fs-2">{feature.icon}</div>
              <h5 className="fw-bold mt-3">{feature.title}</h5>
              <p className="text-muted">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseSection;
