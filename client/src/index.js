import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './Home';
import PostMaker from './PostMaker';
import Blog from './Blog';

ReactDOM.render(
  <Router>
    <App />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/create" element={<PostMaker />} />
      <Route path="/:title" element={<Blog />}/>
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
