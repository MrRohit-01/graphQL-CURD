export const typeDefs = `#graphql

type User {
    id:ID!
    name:String!
    email:String!
    post:[Post]
    comment:[Comment]
}
type Post {
    id:ID!
    title:String!
    content:String!
    authorId: User!
    comment:[Comment]


}
type Comment{
    id:ID!
    authorId: User!
    postId:Post!
   content:String!

}

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    users: [User]!
     posts: [Post]!
    comments: [Comment]!
     user(id:ID!):User
     post(id:ID!):Post
     comment(id:ID!):Comment
  }
`;
//# sourceMappingURL=schema.js.map