import React from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

function Question({ question }) {
  const navigate = useNavigate();
  return (
    <div
      className="border shadow p-5 flex flex-col gap-3 cursor-pointer"
      onClick={() => {
        navigate(`/question/${question._id}`);
      }}
    >
      <h1 className="text-primary text-xl font-bold">{question.title}</h1>
      <hr />
      <p>{question.description}</p>
      <hr />

      <div className="flex justify-between items-center">
        <div>
          <h1>From: {question.user.name}</h1>
          <h1>
            Created: {moment(question.createdAt).format("DD-MM-YYYY hh:mm:ss")}
          </h1>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex gap-1 items-center">
            <i class="ri-heart-line"></i>
            <span>{question.likesCount}</span>
          </div>
          <div className="flex gap-1 items-center">
            <i class="ri-chat-new-line"></i>
            <span>{question.commentsCount}</span>
          </div>
          <div className="flex gap-1 items-center">
            <i class="ri-share-line"></i>
            <span>{question.sharesCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;
