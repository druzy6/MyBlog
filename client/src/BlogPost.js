import React from 'react';
import './BlogPost.css'

function BlogPost(props){

  const composedText = textComposer();

/*I want to take the raw text from the server, extract the text that calls
for an image in html, insent the image html instead while maintaining
it's position in the text. in order to put images in there relavent place
in the blog*/

  function assignIndex(content, postContent, re){
    let indexFound = 0;
    if(postContent != null){
      content.forEach((element, i) => {
        indexFound = postContent.match(content[i]);
        content[i] = [{
            content: content[i],
            index: indexFound.index
          }]
      });
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
        default:
          console.log('something went bad');
      }
    }
    return content;
  }

  function textComposer(){
    const reImg = RegExp('/<img.*?>/g');
    const reSrc = RegExp('/(src=").*?"/');
    const content = String(props.content);
    var text = content.split(reImg);
    var images = content.match(reSrc);
    text = assignIndex(text, content, reImg);
    if(images == null){
      return(<div class="content">{content}</div>);
    }
    images = assignIndex(images, content, reSrc);
    return(contentArrange(text ,images));
  }// use exec on each img tag inside the original text by making a litteral
  //regex from them, then order everything by the found indexes.
  return(
    <div>
      <div class="headline"> {props.title}</div>
      <div> {composedText} </div>
    </div>
  );
}
/*TODO when I put more posts, I need to change the way the posts are selected
from just one post being selected to id based selection*/
export default BlogPost;
