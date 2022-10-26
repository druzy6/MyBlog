import React from 'react';
import './Article.css';
import _ from 'lodash';

function Article(props){

  const shortContent = _.slice(props.content, 0, 100);

  return(
    <div>
      <div className="headline"> {props.title} </div>
      <div className="content"> {shortContent} </div>
    </div>
  );
}

export default Article;
