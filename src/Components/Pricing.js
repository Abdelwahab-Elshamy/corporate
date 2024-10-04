import React from "react";

const pricingData = [
  {
    id: 1,
    plan: "Basic",
    price: "£49",
    features: [
      "Wireframing",
      "Visual Design",
      "5 pages",
      "Free Hosting",
      "Support & Assistance",
    ],
    link: "https://www.google.com",
  },
  {
    id: 2,
    plan: "Premium",
    price: "£149",
    features: [
      "Wireframing",
      "Visual Design",
      "15 pages",
      "Free Hosting",
      "Support & Assistance",
    ],
    link: "https://www.facebook.com",
  },
  {
    id: 3,
    plan: "Ultimate",
    price: "£349",
    features: [
      "Wireframing",
      "Visual Design",
      "Unlimited pages",
      "Free Hosting",
      "Support & Assistance",
    ],
    link: "https://www.twitter.com",
  },
];

function Pricing() {
  return (
    <section id="pricing" className="block pricing-block">
      <div className="container-fluid">
        <div className="title-holder">
          <h2>Pricing &amp; Plans</h2>
          <div className="subtitle">Check our pricing &amp; plans</div>
        </div>
        <div className="row">
          {pricingData.map((pricing) => (
            <div className="col-sm-4" key={pricing.id}>
              <div className="heading">
                <h3>{pricing.plan}</h3>
                <span className="price">{pricing.price}</span>
              </div>
              <div className="content">
                <ul className="list-group">
                  {pricing.features.map((feature, index) => (
                    <li className="list-group-item" key={index}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="btn-holder">
                <a href={pricing.link} className="btn btn-primary">
                  Order Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
