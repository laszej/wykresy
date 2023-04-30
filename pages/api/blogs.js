import { connectToDatabase } from "../../utils/mongodb";
import cors from "cors";

// Set up CORS options
const corsOptions = {
  origin: "*", // allow requests from all origins
  methods: ["GET"], // only allow GET requests
};

export default async function handler(req, res) {
  // Apply CORS middleware
  await cors(corsOptions)(req, res);

  const { collection } = req.query;
  const { db } = await connectToDatabase();

  const blogs = await db.collection(collection).find({}).toArray();

  res.status(200).json(blogs);
}