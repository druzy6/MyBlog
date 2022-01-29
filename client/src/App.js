
import 'bootstrap/dist/css/bootstrap.min.css';
import NavHome from './NavHome';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Article from './Article';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/posters')
    .then(res => {
      if(res){
        setPosts(res.data);
        console.log(posts);
      }
    }).catch(err => console.log(err));
  });

  return (
    <div className="App" >
        <NavHome />
    </div>
  );
}

export default App;
// <Routes>
//   <Route path="/" element={
      // <Container>
      //   <Row>
      //   {posts.map(post => {
      //       return(
      //           <Col xs={12} md={6}>
      //             <Article
      //               title={post.title}
      //               content={post.content}
      //               />
      //           </Col>);
      //         })}
      //       </Row>
      //     </Container>
      //   }/>
      // </Routes>
// <div>
//   {posts.map(post =>{
  //     return(<p> {post.title} </p>)
  //   })}
  // </div>

//   return(<div>
  //     {post.title}
  // {posts.map((post) => {
    //     </div>);
    //   })}
// {posts.map(poster => {
  //   return(<div> {poster.title} </div>)
  // })}
  //the bug was that I set posts to be const object({}) and the data that I recieved was an array
  //but was converted to be an object because of the const
