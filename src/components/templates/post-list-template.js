import React from 'react';
import PostGroup from '../post-group'

function PostListTemplate ({ postEntries }) {
  return postEntries.map(([title, postList]) =>
    <PostGroup
      key={title}
      title={title}
      postList={postList}
    />
  );

}

export default PostListTemplate;
