import React from "react";
import articleContent from "./article-content";
// import { Link } from "react-router-dom";

//component
import Articles from "../component/Articles";
const ArticleList = () => {
  return (
    <div>
      <h1 className="sm:text-4xl text-2xl font-bold mb-[2rem] text-gray-900">
        Articles
      </h1>
      <div className="container py-4 mx-auto">
        <div className="flex flex-wrap -m-4">
          <Articles articles={articleContent}/>
        </div>
      </div>
    </div>
  );
};

export default ArticleList;
