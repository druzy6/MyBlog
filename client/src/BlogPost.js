import React from 'react';
import {Form, Button} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import axios from 'axios';

function BlogPost(){

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/posters')
    .then(res => {
      console.log(res);
      if(!!res){
        console.log(res.data);
        setPosts(res.data);
      }
    }).catch(err => console.log(err));
  });
/*I want to take the raw text from the server, extract the text that calls
for an image in html, insent the image html instead while maintaining
it's position in the text. in order to put images in there relavent place
in the blog*/

  function assignIndex(content, postContent, re){
    let indexFound = 0;
    for(let i in content.length){
      indexFound = postContent.match(re);
      content[i] = [{
        content: content[i],
        index: indexFound.index
      }]
    }
    return content;
  }

  function contentArrange(indexCase_1, indexCase_2){
    var i = 0;
    var j = 0;
    let content;
    while(i < indexCase_1.length && j < indexCase_2.length){
      switch (indexCase_1[i].index > indexCase_2[j].index){
        case true:
          content += <div class="content">{indexCase_1[i].text}</div>;
          i++;
          break;
        case false:
          content += <img class="postImg" src={indexCase_2[j].image.match('/".*?"')}/>;
          j++;
          break;
      }
    }
    return content;
  }

  function textComposer(){
    const reImg = /<img.*?>/g;
    const reSrc = /(src=").*?"/;
    const {content} = posts.content;
    var text = content.split(reImg);
    var images = content.match(reSrc);
    text = assignIndex(text, content, reImg);
    images = assignIndex(images, content, reSrc);
    if(images == null){
      return(<div class="content">{content}</div>);
    }
    return(contentArrange(text ,images));
  }// use exec on each img tag inside the original text by making a litteral
  //regex from them, then order everything by the found indexes.
  return(
    <div>
      <div class="headline"> {posts.headline}</div>
      <div class="content"> {textComposer} </div>
    </div>
  );
}
export default BlogPost;
