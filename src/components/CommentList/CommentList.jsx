import React from 'react';

import { CommentInfo } from '../CommentInfo/CommentInfo'; // Vamos criar este em seguida

export const CommentList = ({ comments }) => {
  return (
    <div className="CommentList">
      <h3>Comments</h3>
      {comments.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
