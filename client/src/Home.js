import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Article from './Article';
import {Container, Row, Col} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

function Home(){
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/')
    .then(res => {
      console.log(res);
      if(!!res){
        console.log(res.data);
        setPosts(res.data);
      }
    }).catch(err => console.log(err));
  });

  return(
    <Container>
      <Row>
      {posts.map((post, i) => {
        return(
          <Col xs={12} md={6}>
            <Link to={'/' + post.post_title}>
              <Article
                title={post.post_title}
                content={post.content}
                />
            </Link>
            </Col>);
        })}
      </Row>
    </Container>);
}

export default Home;
