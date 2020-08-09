import React from 'react'
import { Link } from 'gatsby'
import './index.scss'

const PostGroup = ({ postList = [] }) => {
  return (
    <div className="post-group">
      <ul>
        {postList.map((post, index) => {
          return (
            <li key={index}>
              <Link to={post.path}>
                <span className="post-date">{post.date}</span>
                <span className="post-title">{post.title}</span>
                {post.draft && <span className="post-dev">DEV</span>}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default PostGroup