import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
import { typeDefs } from "./schema.js";
import { Users, Posts, Comments } from "./db.js";
// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
        users: () => Users,
        posts: () => Posts,
        comments: () => Comments,
        user: (_, { id }) => Users.find((u) => u.id === id),
        post: (_, { id }) => Posts.find((p) => p.id === id),
        comment: (_, { id }) => Comments.find((c) => c.id === id),
    },
    User: {
        post: (parent) => Posts.filter((p) => p.authorId === parent.id),
        comment: (parent) => Comments.filter((c) => c.authorId === parent.id)
    },
    Post: {
        author: (parent) => { return Users.find((p) => p.id === parent.authorId); },
        comment: (parent) => { return Comments.filter((c) => c.postId === parent.id); }
    },
    Comment: {
        post: (parent) => { return Posts.find((p) => p.id === parent.postId); },
        author: (parent) => { return Users.find((c) => c.id === parent.authorId); }
    },
};
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);
//# sourceMappingURL=index.js.map