import React from "react";
import img1 from "../assets/images/img1.jpg";

export default function About() {
  const html = 80;
  const responsive = 95;
  const photoshop = 60;

  return (
    <section id="about" className="block about-block">
      <div className="container-fluid">
        <div className="title-holder">
          <h2>About Us</h2>
          <div className="subtitle">learn more about us</div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <img src={img1} className="img-fluid" alt="..." />
          </div>
          <div className="col-sm-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit dicta veritatis sint quidem asperiores magni eaque
              praesentium temporibus, magnam, eveniet consequatur possimus
              nihil? Nemo deserunt repudiandae soluta neque doloribus, quo!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
              alias ex error distinctio laudantium recusandae, iure. Vel nisi
              soluta, minus consectetur reiciendis laborum, laudantium
              perspiciatis quos molestias quam eum.
            </p>

            {/* Progress Bar for HTML/CSS/JavaScript */}
            <div className="progress-block">
              <h4>HTML / CSS / Javascript</h4>
              <div
                className="progress"
                role="progressbar"
                aria-label="Warning example"
                aria-valuenow={html}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar "
                  style={{ width: `${html}%` }}
                ></div>
              </div>
            </div>

            {/* Progress Bar for Responsive */}
            <div className="progress-block">
              <h4>Responsive</h4>
              <div
                className="progress"
                role="progressbar"
                aria-label="Warning example"
                aria-valuenow={responsive}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar "
                  style={{ width: `${responsive}%` }}
                ></div>
              </div>
            </div>

            {/* Progress Bar for Photoshop */}
            <div className="progress-block">
              <h4>Photoshop</h4>
              <div
                className="progress"
                role="progressbar"
                aria-label="Warning example"
                aria-valuenow={photoshop}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div
                  className="progress-bar"
                  style={{ width: `${photoshop}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
