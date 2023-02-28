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