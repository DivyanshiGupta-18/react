import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const FAQSection = () => {
  const faqs = [
    "Can I recover deleted files from desktop with this software?",
    "Can I recover deleted files from desktop with this software?",
    "Can I recover deleted files from desktop with this software?",
    "Can I recover deleted files from desktop with this software?",
    "Can I recover deleted files from desktop with this software?"
  ];

  return (
    <div className="container my-5 text-center">
      <h6 className="text-warning">FAQ</h6>
      <h2 className="fw-bold">Frequent Ask Questions</h2>
      <div className="mt-4">
        {faqs.map((question, index) => (
          <div key={index} className="accordion-item mb-3 border rounded shadow-sm">
            <button className="accordion-button collapsed p-3 w-100 text-start" data-bs-toggle="collapse" data-bs-target={`#faq${index}`}>
              {question}
            </button>
            <div id={`faq${index}`} className="accordion-collapse collapse">
              <div className="accordion-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </div>
          </div>
        ))}
      </div>
      <button className="btn btn-dark mt-3">Show more →</button>
    </div>
  );
};

export default FAQSection;