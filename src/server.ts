import express = require('express');
import bodyParser = require('body-parser');

export default class Server {
  app: express.Application;

  constructor(port: number = 8080) {
    
    this.app = express();
    this.configureRoutes(port);
  }

  configureRoutes = (port: number) => {
    
    this.app.use(bodyParser.json());

    this.app.get('/foo', (req, res) => {
      res.send(200, 'bar');
    });


    this.app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  }
}