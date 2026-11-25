import React from "react";
import Link from "next/link";
import blogPosts from "../../data/blogPosts";

const Blogpage = () => {
  return (
    <div className="blogpage">
      {/* <div className="blogpageHero">
        <h2>Blog</h2>
      </div> */}
      <div className="blogpageContainer">
        <div className="blogpageHead">
          <h2>Our Blog</h2>
          <p>Helpful ideas for happier, healthier days with your pet.</p>
        </div>
        <div className="blogpageContainerContent">
          {blogPosts.map((post) => (
            <div className="BlogContentCard" key={post.slug}>
              <img src={post.image} alt="" />
              <h2>{post.title}</h2>
              <span>{post.category}</span>
              <p>{post.excerpt}</p>
              <Link href={`/pages/Blog/${post.slug}`}>Read More</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogpage;
