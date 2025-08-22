// src/components/PostList/PostList.jsx
import React from 'react';
import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts }) => {
  return (
    <div className="PostList">
      {posts.map(post => (
        <React.Fragment key={post.id}>
          <PostInfo post={post} />
        </React.Fragment>
      ))}
    </div>
  );
};
