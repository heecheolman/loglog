import React from 'react';
import { Link } from 'gatsby'
import './post-group.scss';

function PostGroup ({ title = '', postList = [] }) {
  return (
    <div className="post-group">
      <div className="card-title">
        <span>{title}</span>
      </div>
      <ul>
        {
          postList.map((post, index) => {
            return (
              <li key={index}>
                <Link to={post.path}>
                  <span className="post-date">{post.date}</span>
                  <span className="post-title">{post.title}</span>
                </Link>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default PostGroup;
