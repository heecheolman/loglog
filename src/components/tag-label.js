import React from 'react';
import { Link } from 'gatsby'
import './tag-label.scss';

function TagLabel ({ label }) {
  return (
    <div className="tag-label">
      <Link
        to={'/tags/' + label}
      >
        #{label}
      </Link>
    </div>
  );
}

export default TagLabel;
