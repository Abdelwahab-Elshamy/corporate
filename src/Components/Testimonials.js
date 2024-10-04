import React, { useState } from "react";

var testimonialsData = [
  {
    id: 1,
    name: "John Wills",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.",
    designation: "Manager",
  },
  {
    id: 2,
    name: "Jasmine Perry",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, magni fugiat eveniet minus perspiciatis! Nostrum laborum maxime consequuntur repellat nam magni, quae incidunt distinctio enim itaque eligendi laboriosam, quod, ad!",
    designation: "Accountant",
  },
  {
    id: 3,
    name: "Rocky Johnson",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium facilis optio porro omnis alias eaque corporis error est ut, reprehenderit quae asperiores illum quo voluptates debitis non. Repellat fugit, asperiores?",
    designation: "CEO",
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0); // الحالة الحالية لمؤشر الشهادة

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length); // الانتقال إلى الشهادة التالية
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonialsData.length) % testimonialsData.length
    ); // الانتقال إلى الشهادة السابقة
  };

  return (
    <section id="testimonials" className="testimonials-block">
      <div className="container-fluid">
        <div className="title-holder">
          <h2>Client testimonials</h2>
          <div className="subtitle">What clients say about us</div>
        </div>
        <div
          id="testimonialCarousel"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            {testimonialsData.map((testimonial, index) => (
              <div
                className={`carousel-item ${
                  index === currentIndex ? "active" : ""
                }`}
                key={testimonial.id}
              >
                <blockquote>
                  <p>{testimonial.description}</p>
                  <cite>
                    <span className="name">{testimonial.name}</span>
                    <span className="designation">
                      {testimonial.designation}
                    </span>
                  </cite>
                </blockquote>
              </div>
            ))}
          </div>
          {/* إضافة أزرار التنقل */}
          <button
            className="carousel-control-prev"
            type="button"
            onClick={prevTestimonial}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            onClick={nextTestimonial}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
