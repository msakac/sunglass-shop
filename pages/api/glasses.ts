import { IncomingMessage, ServerResponse } from 'http';
import { NextApiResponse, NextApiRequest } from 'next';
import { MongoClient } from 'mongodb';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET': {
    }
    case 'POST': {
      return addGlasses(req, res);
    }
    case 'DELETE': {
    }
    case 'PUT': {
    }
  }
}

async function addGlasses(req: NextApiRequest, res: NextApiResponse) {
  try {
    const client = await MongoClient.connect(process.env.DB_URI as string);
    const db = client.db(process.env.DB_NAME);

    const glassesCollection = db.collection('glasses');
    const result = glassesCollection.insertOne(req.body);
    res.status(200).json({
      message: 'Glasses added successfully',
      success: true
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({
        message: error.message,
        success: false
      });
    }
  }
}

export default handler;
