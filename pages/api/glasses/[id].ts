import { NextApiResponse, NextApiRequest } from 'next';
import { MongoClient, ObjectId } from 'mongodb';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'DELETE': {
      return deleteGlasses(req, res);
    }
    case 'PUT': {
    }
  }
}

async function deleteGlasses(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  let client = null;
  const objId = new ObjectId(id as string);
  try {
    client = await MongoClient.connect(process.env.DB_URI as string);
    const db = client.db(process.env.DB_NAME);
    const glassesCollection = await db.collection('glasses').findOneAndDelete({ _id: objId });
    res.status(200).json(glassesCollection);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({
        message: error.message,
        success: false
      });
    }
  }
  if (client instanceof MongoClient) {
    client.close();
  }
}

export default handler;
