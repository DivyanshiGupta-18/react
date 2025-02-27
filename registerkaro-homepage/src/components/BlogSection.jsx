import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BlogsSection = () => {
  const blogs = [
    {
      image: "/path-to-image1.jpg",
      author: "Prabhash Mishra",
      date: "1 Jan 2023",
      title: "Small business & Startup",
      description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      tags: ["Tax & Audit", "Management"]
    },
    {
      image: "/path-to-image2.jpg",
      author: "Mahesh Kumar",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description: "Mental models are simple expressions of complex processes or relationships.",
      tags: ["Tax", "Research", "Compliance"]
    },
    {
      image: "/path-to-image3.jpg",
      author: "Rakhi Verma",
      date: "1 Jan 2023",
      title: "Growing Business Package",
      description: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      tags: ["Audit", "Money Back"]
    },
    {
      image: "/path-to-image4.jpg",
      author: "Karan Kumar",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description: "Collaboration can make our teams stronger, and our individual designs better.",
      tags: ["Money", "Management"]
    },
    {
      image: "/path-to-image5.jpg",
      author: "Richa Singh",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description: "JavaScript frameworks make development easy with extensive features and functionalities.",
      tags: ["Tax Return", "News", "Audit"]
    },
    {
      image: "/path-to-image6.jpg",
      author: "Miss Nora",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description: "Starting a community doesn’t need to be complicated, but how do you get started?",
      tags: ["Private Limited Company", "Customer Success"]
    }
  ];

  return (
    <div className="container my-5">
      <h6 className="text-center text-warning">EXPLORE OUR BLOGS</h6>
      <h2 className="text-center fw-bold">Accelerate Digital Transformation</h2>
      <div className="row mt-4">
        {blogs.map((blog, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card border-0 shadow-sm">
              <img src={blog.image} alt={blog.title} className="card-img-top" />
              <div className="card-body">
                <small className="text-muted">{blog.author} • {blog.date}</small>
                <h5 className="fw-bold mt-2">{blog.title}</h5>
                <p className="text-muted">{blog.description}</p>
                <div>
                  {blog.tags.map((tag, i) => (
                    <span key={i} className="badge bg-light text-dark me-1">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button className="btn btn-dark">Show more blogs →</button>
      </div>
    </div>
  );
};

export default BlogsSection;
