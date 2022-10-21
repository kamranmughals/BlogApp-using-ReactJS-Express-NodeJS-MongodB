import React, { useState } from "react";

const AddCommentForm = ({ articleName, setArticleInfo }) => {
  const [username, setusername] = useState("");
  const [commentText, setcommentText] = useState("");

  const addComments = async () => {
    const result = await fetch(`/api/articles/${articleName}/add-comments`, {
      method: "POST",
      body: JSON.stringify({ username, text: commentText }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await result.json();
    setArticleInfo(data);
    setcommentText("");
    setusername("");
  };

  return (
    <form action="" className="shadow rounde-lg px-8 pt-6 pb-8 mb-4">
      <h3 className="text-xl forn-bold mb-4 text-gray-900">Add a Comment</h3>
      <label htmlFor="" className="block text-gray-700 text-sm font-bold mb-2">
        Name:{" "}
      </label>
      <input
        type="text"
        value={username}
        onChange={(e) => setusername(e.target.value)}
        className="shadow appearance-none border rounded w-ful px-3 py-2 text-gray-700 leading-tight 
            focus:outline-none
            focus:shadow-outline"
      />
      <label htmlFor="" className="block text-gray-700 text-sm font-bold mb-2">
        Comment:{" "}
      </label>
      <textarea
        rows="4"
        cols="50"
        value={commentText}
        onChange={(e) => setcommentText(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <button
        onClick={() => addComments()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
      >
        Add Comment
      </button>
    </form>
  );
};

export default AddCommentForm;
