import express = require('express');
import lodash = require('lodash');

const app = express();

app.get('/foo', (req, res) => {

    res.send('hello world')
});

app.listen(8080, () => {
    console.log('App listening on port 8080');
});