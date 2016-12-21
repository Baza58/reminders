import express = require('express');
import lodash = require('lodash');
import mongoose = require('mongoose');
import bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/test');
(mongoose as any).Promise = global.Promise;

const UserSchema = new mongoose.Schema({
  name: String,
  password: String,
});

const User = mongoose.model('User', UserSchema)

const Petr = new User({
  name: 'Petr',
  password: '1234',
});

const petr = saveUser(Petr);

console.log('petr yo', petr);

// Petr.save().then((x) => {
//   console.log('yep', x);
// })

const app = express();

app.use(bodyParser.json());

app.get('/foo', (req, res) => {
  res.send('hello world')
});

app.post('/users', (req, res) => {
  console.log('params', req.body.name)

  res.send(req.body)
})

app.listen(8080, () => {
  console.log('App listening on port 8080');
});

async function saveUser(user) {
  const savedUser = await user.save();
  console.log('savedUser', savedUser)
  return savedUser;
}