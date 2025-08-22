// src/components/CommentList/CommentList.jsx
import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = ({ comments }) => {
  return (
    <div className="CommentList">
      <h3>Comments</h3>
      {comments.map(comment => (
        <React.Fragment key={comment.id}>
          <CommentInfo comment={comment} />
        </React.Fragment>
      ))}
    </div>
  );
};
