import React from "react";
import ArticleCard from "../components/ArticleCard";
import Data from "../components/data.json";

function ArticleListings(){
//console.log(Data);
  const articleTitle=`Articles`;
  return(
    <div className="PageWrapper">
      <h2 className="HeaderOneStyle">{articleTitle}</h2>
      {Data.map((article, key) => (
        <ArticleCard article={article} key={key} />
      ))}
    </div>
  );
}

export default ArticleListings;
