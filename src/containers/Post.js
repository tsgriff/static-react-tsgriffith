import React from 'react'
import { withRouteData, Link } from 'react-static'
//

export default withRouteData(({ post }) => (
  <section className="chosen-posts-section">  
        <section className="chosen-post">
          <Link to="/blog/">{'<'} Back</Link>
          <p className="chosen-post-title">{post.title.rendered}</p>
          {/* <div className="chosen-post-date"><Moment format="MMMM Do, YYYY" className="chosen-post-date">{propsArr[i].date}</Moment></div> */}
          <div dangerouslySetInnerHTML={{__html: post.content.rendered}} className="chosen-post-text"></div>
        </section>
      </section>
))
