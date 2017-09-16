import React from 'react';

const Article = (props) => {
  let {article,author} = props;
  return(
    <div>
      <div>{article.id}</div>
      <div>{article.title}</div>
      <div>{article.body}</div>
      <div>{article.date}</div>
      <div>{author.firstName}-{author.lastName}</div>
    </div>
  );
};
export default Article;