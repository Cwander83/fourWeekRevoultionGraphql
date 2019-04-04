//const { ApolloServer } = require('apollo-server');
//const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 3000;
//require('dotenv').config();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  })
  .then(() => console.log('DB connected!'))
  .catch(err => console.error(err));


app.get('/', (req, res) => res.send('Hello World!'));

app.listen(4000, () => console.log(`Express server running on port 4000`));

//const server = new ApolloServer({})
