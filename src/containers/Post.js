import React from 'react'
import { withRouteData, Link } from 'react-static'
import Moment from 'react-moment'
import Markdown from 'react-markdown'
//

import DocumentMeta from 'react-document-meta';

export default withRouteData(({ post }) => {

  const meta = {
    title: post.data.title + ' | Taylor Griffith',
    description: '',
    meta: {
      charset: 'utf-8',
    }
  }

  return (
  <section className="chosen-posts-section">
    <DocumentMeta {...meta} />
    <div className="chosen-post">
    <Link to="/blog/">{'<'} Back</Link>
      <p className="chosen-post-title">{post.data.title}</p>
      <div className="chosen-post-date"><Moment format="MMMM Do, YYYY" className="chosen-post-date">{post.data.date}</Moment></div>
      <Markdown className="chosen-post-text" source={post.content} escapeHtml={false} />
    </div>
  </section>
  )
})
