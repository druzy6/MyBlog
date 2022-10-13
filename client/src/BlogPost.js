import React from 'react';
import {Form, Button} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import axios from 'axios';

function BlogPost{

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
  function textComposer(){
    const reImg = /<img.*?>/g;
    const reSrc = /src=".*?"/;
    var postContent = posts.content;
    let text = postContent.split(reImg);
    let images = postContent.match(reSrc);
    for(i in text.length){

    }
  }// use exec on each img tag inside the original text by making a litteral
  //regex from them, then order everything by the found indexes. 
  return(

    );
}

// if(text.length > images.length){
  //   for(i in images.length){
    //       postContent += <h1> {text[i]} </h1>;
    //       postContent += <img {images[i]}>;
    //   }
    //   postContent += <h1>{text[images.length]}</h1>;
    //   return(postContent);
    // }else if (text.length == images.length) {
      //   for(i in images.length){
        //     postContent += <h1> {text[i]} </h1>;
        //     postContent += <img {images[i]}>;
        //     return(postContent);
        //   }
        // }
