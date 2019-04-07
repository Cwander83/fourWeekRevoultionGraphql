const { gql } = require('apollo-server');

module.exports = gql`
  type User {
    _id: ID
    name: String
    email: String
    picture: String
    
    
  }

  type Workouts {
      _id: ID
      createdAt: String
      nameOfExercise: String
      set: Float
      reps: Float
      author: User
      comments: [Comment]

  }

  type Comment {
      text: String
      createAt: String
      author: User
  }

  type Query {
    me: User
  }
`;
