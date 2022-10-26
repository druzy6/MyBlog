import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import BlogPost from './BlogPost'
import {useParams} from 'react-router-dom';

function Blog(props){
  const [posts, setPosts] = useState([]);
  const {title} = useParams();

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
  return(
    <div>
      {posts.map(post =>{
          if(post.post_title === title){
            return(
            <BlogPost
              title={post.post_title}
              content={post.content}
              />
          );
        }
      })}
    </div>
  );
}
export default Blog;
