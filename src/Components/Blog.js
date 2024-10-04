import React from "react";
const blogData = [
  {
    id: 1,
    image: require("../assets/images/blog1.jpg"),
    time: "15 Nov 2016",
    title: "Coffee Lovers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.",
    link: "https://www.google.com",
  },
  {
    id: 2,
    image: require("../assets/images/blog2.jpg"),
    time: "10 Nov 2016",
    title: "Tips for UI Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.",
    link: "https://www.facebook.com",
  },
  {
    id: 3,
    image: require("../assets/images/blog3.jpg"),
    time: "07 Nov 2016",
    title: "Beautiful Day",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.",
    link: "https://www.twitter.com",
  },
];

function Blog() {
  return (
    <section id="blog" className="block blog-block">
      <div className="container-fluid">
        <div className="title-holder">
          <h2>Latest from blog</h2>
          <div className="subtitle">get our latest news from blog</div>
        </div>
        <div className="row">
          {blogData.map((blog) => {
            return (
              <div className="col-sm-4" key={blog.id}>
                <div className="holder">
                  <div class="card" style={{ width: "18rem" }}>
                    <img src={blog.image} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href="/#" class="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Blog;
