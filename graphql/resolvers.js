//const { AuthenticationError } = require('apollo-server');

const user = {
  _id: '1',
  name: 'Chris',
  email: 'chriswandermail@gmail.com',
  picture: 'https://cloudinary.com/asdf',
};

module.exports = {
  Query: {
    me: () => user,
  },
};
