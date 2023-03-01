<<<<<<< HEAD
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const posts = [
  {
    id: 1,
    author: "Next.js app",
    content: "Witamy wszystkich na naszym czacie!",
  }
];

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ posts });
  } else if (req.method === "POST") {
    const newPost = req.body;
    newPost.id = Date.now();
    posts.push(newPost);
    res.status(201).json({ post: newPost });
  } else if (req.method === "DELETE") {
    const postId = req.query.id;
    const index = posts.findIndex((post) => post.id == postId);
    if (index >= 0) {
      posts.splice(index, 1);
      res.status(200).json({ message: "Post deleted" });
    } else {
      res.status(404).json({ message: "Post not found" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
=======
export default function handler(req, res) {

  // Define an array of posts
  let posts = [
    {
      id: 1,
      author: 'next.app',
      content: 'Witam wszystkich na naszym czacie!',
    },
  ];

  // Set headers for CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  // Handle GET request
  if (req.method === 'GET') {
    res.status(200).json({ posts });
    return;
  } 

  // Handle POST request
  if (req.method === 'POST') {
    // Parse the request body
    const { posts: newPosts } = JSON.parse(req.body);

    // Add the new post to the array
    posts = [
      ...posts,
      {
        id: Math.floor(Math.random() * 1000000000000000),
        author: newPosts[0].author,
        content: newPosts[0].content,
      }
    ];

    // Return the updated array
    res.status(200).json({ posts });
    return;
  }

  // Handle DELETE request
  if (req.method === 'DELETE') {
    // Parse the request body
    const { id } = JSON.parse(req.body);

    // Remove the post from the array
    posts = posts.filter((post) => post.id !== id);

    // Return the updated array
    res.status(200).json({ posts });
    return;
  }

  // Handle unsupported methods
  res.status(405).end();
}

export const config = {
  api: {
    bodyParser: true,
  },
};
>>>>>>> 18b4913c9a8067f1c8277aa6d5811b4049266593
