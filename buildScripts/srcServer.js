import express from 'express';
import path from 'path';
import open from 'open';

const port = 3000;
const app = express();

//when run with node command in CLI express is coming in, sees that we are requesting the root and then sending the file we specified here and opening the app at the local host 3000
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
})

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
})
