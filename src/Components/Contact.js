import React from "react";

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // منطق إرسال النموذج هنا
  };

  return (
    <section id="contact" className="block contact-block">
      <div className="container-fluid">
        <div className="title-holder">
          <h2>Contact us</h2>
          <div className="subtitle">Get connected with us</div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-4">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your full name"
                required
                aria-label="Full name"
              />
            </div>
            <div className="col-sm-4">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email address"
                required
                aria-label="Email address"
              />
            </div>
            <div className="col-sm-4">
              <input
                type="tel"
                className="form-control"
                placeholder="Enter your contact number"
                required
                aria-label="Contact number"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <textarea
                className="form-control"
                placeholder="Enter your contact message"
                required
                aria-label="Contact message"
              ></textarea>
            </div>
          </div>
          <div className="btn-holder">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="google-map">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14048.211570060965!2d-0.1228208876550775!3d51.505942908931324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1481805868782"
          style={{ width: "100%", height: "300px", border: 0 }} // إضافات للعرض
          allowFullScreen
        ></iframe>
      </div>
      <div className="container-fluid">
        <div className="contact-info">
          <ul>
            <li>
              <i className="fas fa-envelope"></i>
              hello@domain.com
            </li>
            <li>
              <i className="fas fa-phone"></i>
              000-000-0000
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              London, United Kingdom
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
