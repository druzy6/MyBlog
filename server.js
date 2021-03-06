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
  console.log('works');
});

app.get('/posters', function(req, res) {
  connection.query('SELECT * FROM posters' ,function(err, rows){
    if(err){
      console.log(err);
    }else{
      res.send(rows);
    }
  });
});

app.post('/create/newpost', function(req, res){
  const data = req.body.content;
  console.log(data);
});

app.listen(port, function() {
  console.log('express is running here ' );
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
