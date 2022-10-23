import React from 'react';
import {Form, Button} from 'react-bootstrap';
import {useState, useEffect, Fragment} from 'react';
import axios from 'axios';

function PostMaker(){
  const url = "http://localhost:5000/create/newpost";

  const [chars, setChars] = useState({
    content: String,
    numOfLetters: Number
  });
  const [pics, setPics] = useState([]);

  function charHandle(event){
    const {value} = event.target;
    setChars({
      content: value,
      numOfLetters: value.length
    });
  }

  function picsAdd(event){
    setPics(event.target.value);
  }

  function formSub(event){
    console.log(chars);
    const img_src = String(chars).match('/src=".*?/g');
    const img_file = pics;
    axios.post(url, {
      content: chars.content,
      img_src: img_src,
      img_file: img_file
    }).then((response) =>{
      console.log(response);
    });
  }//check useRef for the file upload.


  return(
    <Fragment>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>char count: {chars.numOfLetters}</Form.Label>
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
// <input
//   type='text'
//   name='content'
//   value={chars}
//   onChange={charHandle}
//   />
// <button onClick={formSub}>submit</button>
