export const Users = [
  { "id": "1", "name": "Alice", "email": "alice@example.com" },
  { "id": "2", "name": "Bob", "email": "bob@example.com" },
  { "id": "3", "name": "Charlie", "email": "charlie@example.com" }
]

export const Posts = [
  { "id": "1", "title": "GraphQL Basics", "content": "Introduction to GraphQL.", "authorId": "1" },
  { "id": "2", "title": "Apollo Server Guide", "content": "How to set up Apollo Server.", "authorId": "2" },
  { "id": "3", "title": "TypeScript + GraphQL", "content": "Using TypeScript with GraphQL.", "authorId": "1" }
]

export const Comments =[
  { "id": "1", "postId": "1", "authorId": "2", "content": "Great intro!" },
  { "id": "2", "postId": "1", "authorId": "3", "content": "Thanks for sharing!" },
  { "id": "3", "postId": "2", "authorId": "1", "content": "Very helpful." },
  { "id": "4", "postId": "3", "authorId": "2", "content": "Looking forward to more posts." }
]
 