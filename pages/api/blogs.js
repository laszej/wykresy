import { connectToDatabase } from "../../utils/mongodb";

export default async function handler(req, res) {
  const { db } = await connectToDatabase();

  const blogs = await db.collection("blogs").find({}).toArray();

  res.status(200).json(blogs);
}