const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const {
  v4: uuidv4
} = require('uuid');
const mysql = require('mysql');

const connection = mysql.createPool({
  host:'myblogdb.cqikwwgjyt7g.us-east-2.rds.amazonaws.com',
  user: 'admin',
  password: '1yshnusuI#',
  database: 'blogDB'
});

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());

//API routes

app.get('/', (req, res) =>{
  console.log('express running');
});

app.post('/create/newpost', function(req, res){
  const data = req.body.content;
  console.log(data);
});

app.get('/posters', (req, res) => {
  connection.query('SELECT * FROM posters' ,function(err, rows){
    if(err){
      console.log(err);
    }else{
      res.send(rows);
    }
  });
});

app.listen(port, function() {
  const re = /<img.*?>/g;
  const text = 'I was trying to gerpgreipgmnripbn create a regullar expression that can tell images in html from text <img src="frkgfwiprgn"> inside text while there could be another'
  +' <img src="aowefofje.jpg"> inside the thing'
  let smallText = ' <img src="aowefofje.jpg"> inside the thing';
  smallText = smallText.match(re)[0];
  let indexOfResult = text.match(smallText);
  console.log(indexOfResult.index);
});

//data schema
// const postSchema = new mongoose.Schema({
//   Key: String,
//   title: String,
//   content: String,
//   images: [{
//     url: String,
//     location: Number
//   }],
//   order: Number
// });
//
// const Poster = mongoose.model('Poster', postSchema);
