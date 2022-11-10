import React from 'react';
import {Form} from 'react-bootstrap';
import {useState, Fragment} from 'react';
import axios from 'axios';

function FileUploader(){

  const [file, setFile] = useState({
    name: 'choose file',
    fileContent: String
  });
  const [uploadedFile, setUploadedFile] = useState({});

  function fileHandler(event){
    setFile({
      name: e.target.files[0].name,
      fileContent: e.target.files[0]
    })
  }
  console.log(file);

  function uploadFile(event){
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    try{
      let res = axios.post('/create/newpost', formData);
    }catch(err){
      if(err.response.status === 500){
        console.log('there was a problem with the server');
      }else{
        console.log(err.response.data.msg);
      }
    }
  }

  return(
    <Fragment>
      <Form.Group controlId="formFile" className="mb-3" onSubmit={uploadFile}>
        <Form.Label>{file.name}</Form.Label>
        <Form.Control type="file" value={file} onChange={fileHandler}/>
      </Form.Group>
    </Fragment>
  );
}
export default FileUploader;
