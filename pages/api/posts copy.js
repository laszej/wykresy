export default function handler(req, res) {
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.status(204).end();
    return;
  }

  // Handle regular requests
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle GET request
  if (req.method === 'GET') {
    res.status(200).json({
      posts: [
        {
          id: 1,
          author: 'next.app',
          content: 'Witam wszystkich na naszym czacie!',
        },
      ],
    });
  } 

  // Handle POST request
  if (req.method === 'POST') {
    // Parse the request body
    const { posts } = JSON.parse(req.body);

    // Add the new post to the array
    posts.push({
      id: Math.floor(Math.random() * 1000000000000000),
      author: posts[0].author,
      content: posts[0].content,
    });

    // Return the updated array
    res.status(200).json({ posts });
  }

  // Handle DELETE request
  if (req.method === 'DELETE') {
    // Parse the request body
    const { id } = JSON.parse(req.body);

    // Find the index of the post to delete
    const index = posts.findIndex((post) => post.id === id);

    // Remove the post from the array
    if (index !== -1) {
      posts.splice(index, 1);
    }

    // Return the updated array
    res.status(200).json({ posts });
  }

  // Handle unsupported methods
  else {
    res.status(405).end();
  }
}