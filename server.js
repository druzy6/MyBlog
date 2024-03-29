const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');

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
app.use(fileUpload());

//API routes

app.get('/', (req, res) =>{
  console.log('express running');
});

app.post('/create/newpost', function(req, res){
  console.log(req.body.file);
});
  // need to send this here to the sql database
/*});TODO need to separate the image src from the entire content, add a title
  const data = req.body.content;
  console.log(data);
});

});/*TODO need to separate the image src from the entire content, add a title
to the PostMaker and send it though the post function
DONT separate the text, the function in BlogPost already does that*/

app.get('/posters', (req, res) =>{
  connection.query('SELECT * FROM posters' ,function(err, rows){
    if(err){
      console.log(err);
    }else{
      console.log(rows);
      res.send(rows);
    }
  });
});

app.listen(port, function() {
  console.log('works');
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
