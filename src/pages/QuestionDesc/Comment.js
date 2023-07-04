import moment from "moment";
import React from "react";

function Comment({ comment }) {
  return (
    <div className="bg-gray-100 border p-5 border-gray-300 flex flex-col gap-2 rounded">
      <div className="flex gap-2 items-center">
        <h1 className="bg-gray-500 text-white rounded-full h-8 w-8 flex items-center justify-center font-semibold">
          {comment.user.name[0].toUpperCase()}
        </h1>
        <h1 className="font-bold text-gray-600">{comment.user.name}</h1>
      </div>
      <hr />
      <div>
        <h1>{comment.comment}</h1>
        <h1 className="text-sm text-gray-500">
          {moment(comment.createdAt).format("DD-MM-YYYY hh:mm:ss")}
        </h1>
      </div>
    </div>
  );
}

export default Comment;
