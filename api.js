let express = require('express')
let app = express();

const posts = [ 
  {id:10, name:'10'},
  {id:11, name:'11'},
  {id:12, name:'12'},
  {id:13, name:'13'},
  {id:14, name:'14'},
  {id:15, name:'15'},
  {id:16, name:'16'},
  {id:17, name:'17'},
  {id:18, name:'18'},
  {id:19, name:'19'},
]

app.get('/posts', (req, res) => {

  const page = parseInt(req.query.page) ? parseInt(req.query.page) : 1;
  const limit = parseInt(req.query.limit) ? parseInt(req.query.limit) : 2;

  const skiprecords = posts.length - (page * limit);
  const startIndex = page * limit - limit;
  const result = posts.slice(startIndex, posts.length - skiprecords);

  res.json(result).status(200);
});

app.listen(3008);

module.exports = app;