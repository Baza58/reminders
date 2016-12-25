import App from './app';

new App();

// import mongoose = require('mongoose');
// import jwt = require('jsonwebtoken');
// const expressJwt = require('express-jwt');

// mongoose.connect('mongodb://localhost/test');
// (mongoose as any).Promise = global.Promise;

// const UserSchema = new mongoose.Schema({
//   name: String,
//   password: String,
// });

// const User = mongoose.model('User', UserSchema)

// const Petr = new User({
//   name: 'Petr',
//   password: '1234',
// });

// // const petr = saveUser(Petr);

// // const app = express();

// // const secret: string = "ritknir";

// // app.use('/api', expressJwt({ secret }));

// // app.use(bodyParser.json());


// app.post('/authenticate', (req, res) => {

//   if(req.body.name !== 'johndoe' || req.body.password !== 'test') {
//     res.sendStatus(401);
//   }

//  const token = jwt.sign(req.body, secret, {
//    expiresIn: '2 minutes',
//  });

//   res.send({ token });
// })

// app.get('/api/foo', (req, res) => {

//   res.send(req.user.name)
// })

// app.listen(8080, () => {
//   console.log('App listening on port 8080');
// });

// async function saveUser(user) {
//   const savedUser = await user.save();
//   console.log('savedUser', savedUser)
//   return savedUser;
// }