import React from "react";

import CommentsList from "./CommentsList";
import { commentsData } from "../utils/constants";

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-lg m-2 font-bold">
        {" "}
        {commentsData.length} Comments{" "}
      </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
