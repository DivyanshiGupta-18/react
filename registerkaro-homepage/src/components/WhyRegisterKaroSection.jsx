import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const WhyRegisterKaroSection = () => {
  const stats = [
    { value: "1M+", label: "CUSTOMERS" },
    { value: "12+", label: "YEARS OF EXCELLENCE" },
    { value: "41+", label: "R&D ENGINEERS" },
    { value: "78+", label: "COUNTRIES" },
    { value: "3287+", label: "PARTNERS" },
    { value: "41+", label: "AWARDS RECEIVED" }
  ];

  return (
    <div className="container text-center my-5">
      <h6 className="text-warning">WHY REGISTER KARO</h6>
      <h2 className="fw-bold">Some Numbers are important</h2>
      <div className="row mt-4">
        {stats.map((stat, index) => (
          <div key={index} className="col-md-4 mb-4">
            <h3 className="fw-bold text-primary">{stat.value}</h3>
            <p className="text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyRegisterKaroSection;
