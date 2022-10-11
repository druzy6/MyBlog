import React from 'react';
import {Form, Button} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import axios from 'axios';

function PostMaker(){
  const url = "http://localhost:5000/create/newpost";

  const [chars, setChars] = useState();
  const [pics, setPics] = useState([]);

  function charHandle(event){
    const {value} = event.target;
    setChars(value.length);
  }

  function picsAdd(event){
    setPics(event.target.value);
  }

  function formSub(event){
    axios.post(url, {
      content: chars
    }).then((response) =>{
      console.log(response);
    });
  }


  return(
    <div>
    <Form>
      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>post pictures</Form.Label>
        <Form.Control type="file" value={pics} onChange={picsAdd} multiple />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>char count: {chars}</Form.Label>
        <Form.Control as="textarea" rows={12} onChange={charHandle} />
      </Form.Group>
      <Button variant="primary" onClick={formSub} >
        Submit poster
      </Button>
    </Form>
    </div>
  );
}

export default PostMaker;
// <input
//   type='text'
//   name='content'
//   value={chars}
//   onChange={charHandle}
//   />
// <button onClick={formSub}>submit</button>
