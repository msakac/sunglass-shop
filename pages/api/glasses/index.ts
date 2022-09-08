import { NextApiResponse, NextApiRequest } from 'next';
import { MongoClient } from 'mongodb';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET': {
      return getAllGlasses(req, res);
    }
    case 'POST': {
      return addGlasses(req, res);
    }
  }
}

async function getAllGlasses(req: NextApiRequest, res: NextApiResponse) {
  let client = null;
  try {
    client = await MongoClient.connect(process.env.DB_URI as string);
    const db = client.db(process.env.DB_NAME);
    const glassesCollection = db.collection('glasses');
    const glasses = await glassesCollection.find().toArray();
    res.status(200).json(glasses);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({
        message: error.message,
        success: false,
      });
    }
  }
  if (client instanceof MongoClient) {
    client.close();
  }
}

async function addGlasses(req: NextApiRequest, res: NextApiResponse) {
  let client = null;
  try {
    client = await MongoClient.connect(process.env.DB_URI as string);
    const db = client.db(process.env.DB_NAME);

    const glassesCollection = db.collection('glasses');
    await glassesCollection.insertOne(req.body);
    res.status(200).json({
      message: 'Glasses added successfully',
      success: true,
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({
        message: error.message,
        success: false,
      });
    }
  }
  if (client instanceof MongoClient) {
    client.close();
  }
}

export default handler;
