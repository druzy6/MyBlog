import React from 'react';
import {Form, Button} from 'react-bootstrap';
import {useState, useEffect, Fragment} from 'react';
import axios from 'axios';

function fileUploader(){
  return(
    <Form.Group controlId="formFileMultiple" className="mb-3">
      <Form.Label>post pictures</Form.Label>
      <Form.Control type="file" value={pics} onChange={picsAdd} multiple />
    </Form.Group>
  );
}
