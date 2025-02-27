import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
      name: "Chris",
      position: "President and CEO, PrintReach, USA",
      rating: 4.5,
      image: "/path-to-user-image.jpg"
    },
    {
      quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
      name: "Chris",
      position: "President and CEO, PrintReach, USA",
      rating: 4.5,
      image: "/path-to-user-image.jpg"
    },
    {
      quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
      name: "Chris",
      position: "President and CEO, PrintReach, USA",
      rating: 4.5,
      image: "/path-to-user-image.jpg"
    }
  ];

  return (
    <div className="container-fluid bg-primary text-white py-5">
      <div className="container text-center">
        <h2 className="fw-bold">What people say about us</h2>
        <div className="row mt-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="bg-white text-dark p-4 rounded shadow-sm">
                <span className="fs-1">\"</span>
                <p className="mt-3">{testimonial.quote}</p>
                <div className="d-flex align-items-center mt-4">
                  <img src={testimonial.image} alt={testimonial.name} className="rounded-circle me-3" width="50" height="50" />
                  <div>
                    <h5 className="fw-bold mb-0">{testimonial.name}</h5>
                    <small className="text-muted">{testimonial.position}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
