import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ApplicationProcess = () => {
  const steps = [
    { icon: "📄", text: "Fill up Application Form" },
    { icon: "💳", text: "Make Online Payment" },
    { icon: "👨‍💼", text: "Executive will Process Application" },
    { icon: "📧", text: "Get Confirm Mail" }
  ];

  return (
    <div className="container-fluid bg-warning py-4">
      <div className="container d-flex justify-content-around flex-wrap">
        {steps.map((step, index) => (
          <div key={index} className="d-flex align-items-center text-dark">
            <span className="fs-2 me-2">{step.icon}</span>
            <span className="fw-bold">{step.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationProcess;
