import React from 'react'
import { withRouteData, Link } from 'react-static'
import Moment from 'react-moment'
import Markdown from 'react-markdown'
//

export default withRouteData(({ posts }) => (
  <section className="blog">
    <div className="typewriter-effect">
      <p className="typewritten-phrase blog-title">Taylor's Blog.</p>
    </div>
    <div className="posts-contain">
      {posts.map(post => (
        <section className="blog-post" key={post.data.slug}>
          <Link className="post-title" to={`/blog/post/${post.data.slug}`}>{post.data.title}</Link>
          <Moment format="MMMM Do, YYYY" className="post-date">{post.data.date}</Moment>
          <Markdown className="post-text-sample" source={post.excerpt} escapeHtml={false} />
          <Link to={`/blog/post/${post.data.slug}`} className="continue-reading">Continue reading &#8594;</Link>
        </section>
      ))}
    </div>
  </section>
))
