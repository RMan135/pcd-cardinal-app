var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser');

var cors = require('cors')
const fs = require('fs');

app.post('/uploads/photos', bodyParser.raw({
    limit: '10mb'
}), (req, res) => {
  console.log("reggae");
    const title = req.params.title;
    const fd = fs.createWriteStream(`./${title}`, {
        flags: "w+",
        encoding: "binary"
    });
    fd.end(req.body);
    fd.on('close', () => res.send(title));
  });


app.use(cors())

var routes = require('./api/routes/NiceRoutes');
routes(app);

app.listen(port);


console.log('todo list RESTful API server started on: ' + port);