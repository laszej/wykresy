import { connectToDatabase } from '../../utils/mongodb';

export default async function handler(req, res) {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(422).json({ message: 'Invalid input' });
  }

  try {
    const { db } = await connectToDatabase(); // use the exported function

    const result = await db.collection('political').insertOne({
      title,
      content,
    });

    res.status(201).json({
      message: 'Blog added!',
      data: result.ops[0],
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Could not add blog' });
  }
}