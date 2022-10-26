import 'bootstrap/dist/css/bootstrap.min.css';
import NavHome from './NavHome';

function App() {
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
