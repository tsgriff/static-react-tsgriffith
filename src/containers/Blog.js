import React from 'react'
import { withRouteData, Link } from 'react-static'
// import Moment from 'react-moment';
import '../app.css';

export default withRouteData(({ posts }) => (
  <section className="blog">
    <div className="typewriter-effect">
      <p className="typewritten-phrase blog-title">Taylor's Blog.</p>
    </div>
    <div className="posts-contain">
    <section className="posts-section">
    {posts.map((post, i) => (
        <section className="blog-post" key={i}>
          <p className="post-title">{post.title.rendered}</p>
          {/* <Moment format="MMMM Do, YYYY" className="post-date">{post.date}</Moment> */}
          <div dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} className="post-text-sample"></div>
            <Link to={`/blog/post/${post.slug}`} className="continue-reading">Continue reading &#8594;</Link>
        </section>
    ))
    }
    </section>
    </div>
  </section>
))
