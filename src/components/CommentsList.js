import React from "react";
import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  return comments.map((comment) => (
    <div key={comment._id}>
      <Comment data={comment} />
      <div className="pl-5 border-gray-200 border-l-2 ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

export default CommentsList;
