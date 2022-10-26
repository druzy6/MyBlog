import React from 'react';
import {Form, Button} from 'react-bootstrap';
import {useState, Fragment} from 'react';
import axios from 'axios';
import FileUploader from './FileUploader.js';

function PostMaker(){
  const url = "http://localhost:5000/create/newpost";

  const [chars, setChars] = useState();

  function charHandle(event){
    const {value} = event.target;
    setChars(value.length);
  }

  function formSub(event){
    axios.post(url, {
      content: chars
    }).then((response) =>{
      console.log(response);
    });
  }


  return(
    <Fragment>
      <Form>
      <FileUploader/>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>char count: {chars}</Form.Label>
          <Form.Control as="textarea" rows={12} onChange={charHandle} />
        </Form.Group>
        <Button variant="primary" onClick={formSub} >
          Submit poster
        </Button>
      </Form>
    </Fragment>
  );
}

export default PostMaker;
