import React from "react";

function Work() {
  const worksData = [
    {
      id: 1,
      link: "https://www.google.com",
      image: require("../assets/images/img2.jpg"),
      title: "Lonely Path",
      subtitle: "Web Design",
    },
    {
      id: 2,
      link: "https://www.google.com",
      image: require("../assets/images/img3.jpg"),
      title: "Photographer Girl",
      subtitle: "Branding",
    },
    {
      id: 3,
      link: "https://www.google.com",
      image: require("../assets/images/img4.jpg"),
      title: "The Difference",
      subtitle: "Web Design",
    },
    {
      id: 4,
      link: "https://www.google.com",
      image: require("../assets/images/img5.jpg"),
      title: "Nature Patterns",
      subtitle: "Branding",
    },
    {
      id: 5,
      link: "https://www.google.com",
      image: require("../assets/images/img6.jpg"),
      title: "The Difference",
      subtitle: "Photography",
    },
    {
      id: 6,
      link: "https://www.google.com",
      image: require("../assets/images/img7.jpg"),
      title: "Winter Sonata",
      subtitle: "Web Design",
    },
    {
      id: 7,
      link: "https://www.google.com",
      image: require("../assets/images/img8.jpg"),
      title: "Lonely Path",
      subtitle: "Branding",
    },
    {
      id: 8,
      link: "https://www.google.com",
      image: require("../assets/images/img9.jpg"),
      title: "Appreciation",
      subtitle: "Photography",
    },
    {
      id: 9,
      link: "https://www.google.com",
      image: require("../assets/images/img2.jpg"),
      title: "Happy Days",
      subtitle: "Web Design",
    },
  ];

  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <li
        className={`page-item ${number === active ? "active" : ""}`}
        aria-current={number === active ? "page" : undefined}
        key={number}
      >
        <span className="page-link">{number}</span>
      </li>
    );
  }

  return (
    <section id="works" className="block works-block">
      <div className="container-fluid">
        <div className="title-holder">
          <h2>Our works</h2>
          <div className="subtitle">our awesome works</div>
        </div>
      </div>
      <div className="row portfoliolist">
        {worksData.map((works) => {
          return (
            <div className="col-sm-4" key={works.id}>
              <div className="portfolio-wrapper">
                <a href={works.link}>
                  <img src={works.image} className="img-fluid" alt="..." />
                  <div className="label text-center">
                    <h3>{works.title}</h3>
                    <p>{works.subtitle}</p>
                  </div>
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <nav aria-label="...">
        <ul className="pagination pagination-sm">{items}</ul>
      </nav>
    </section>
  );
}

export default Work;
