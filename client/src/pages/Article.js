import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import articleContent from "./article-content";

//Components
import Articles from "../component/Articles";
import NotFound from "./NotFound";
import CommentsList from "../component/CommentsList";
import AddCommentForm from "../component/AddCommentForm";

const Article = () => {
  const { name } = useParams();
  const article = articleContent.find((article) => article.name === name);
  const [articleInfo, setarticleInfo] = useState({ comments: [] });

  useEffect(() => {
    const fetchdata = async () => {
      const data = await fetch(`/api/articles/${name}`);
      const result = await data.json();
      console.log(result);
      setarticleInfo(result);
    };
    fetchdata();
    console.log("Cmponent Mounted");
  }, [name]);
  if (!article) return <NotFound />;
  const otherArticles = articleContent.filter(
    (article) => article.name !== name
  );
  return (
    <>
      <h1 className="sm:text-4xl text-2xl font-bold my-6 text-gray-900">
        {article.title}
      </h1>
      {article.content.map((paragraphs, index) => {
        return (
          <p className="text-base leading-relaxed mx-auto mb-4" key={index}>
            {paragraphs}
          </p>
        );
      })}
      <CommentsList commemts={articleInfo.comments} />
      <AddCommentForm articleName={name} setArticleInfo={setarticleInfo} />
      <h1 className="sm:text-2xl text-xl font-bold text-gray-900 my-4">
        Other Articles
      </h1>
      <div className="flex flex-wrap -m-4">
        <Articles articles={otherArticles} />
      </div>
    </>
  );
};

export default Article;
