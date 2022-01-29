import React from 'react';
import {Form, Button} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import axios from 'axios';

function PostMaker(){
  const url = "https://localhost:5000/create/newpost";

  const [chars, setChars] = useState(0);
  const [pics, setPics] = useState([]);

  function charCount(event){
    const {value} = event.target;
    setChars(value.length);
  }

  function picsAdd(event){
    setPics(event.target.value);
  }

  function formSub(event){
    axios.post(url, {
      content: chars,
      img: pics
    }).then(() => {
      alert('successful insert');
    });
  }


  return(
    <div className='form'>
      <input type='text' name=> 
    </div>
  );
}

export default PostMaker;
// <Form onSubmit={formSub}>
//   <Form.Group controlId="formFileMultiple" className="mb-3">
//     <Form.Label>post pictures</Form.Label>
//     <Form.Control type="file" value={pics} onChange={picsAdd} multiple />
//   </Form.Group>
//   <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//     <Form.Label>char count: {chars}</Form.Label>
//     <Form.Control as="textarea" rows={12} onChange={charCount} />
//   </Form.Group>
//   <Button variant="primary" type="submit" >
//     Submit poster
//   </Button>
// </Form>
