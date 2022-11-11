import React from 'react';
import {Form} from 'react-bootstrap';
import {useState, Fragment} from 'react';
import axios from 'axios';

function FileUploader(){

  const [file, setFile] = useState({
    name: 'choose file',
    fileContent: String
  });

  function fileHandler(e){
    setFile({
      name: e.target.files[0].name,
      fileContent: e.target.files[0]
    });
  }
  console.log(file);

  function uploadFile(event){
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    try{
      let res = axios.post('http://localhost:5000/create/newpost', formData);
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
      <form>
        <input type="file" onChange={fileHandler}/>
        <button type="submit" onClick={uploadFile}>upload</button>
      </form>
    </Fragment>
  );
}
export default FileUploader;
