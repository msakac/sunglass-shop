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
    const glassesCollection = db.collection('glasses');
    glassesCollection.findOneAndDelete({ _id: objId }, function(err, transaction) {
        if(err)
            res.send(err);
        res.status(200).json({message: 'Glasses deleted'})
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

async function getAllGlasses(req: NextApiRequest, res: NextApiResponse) {
  let client = null;
  try {
    client = await MongoClient.connect(process.env.DB_URI as string);
    const db = client.db(process.env.DB_NAME);
    const glassesCollection = db.collection('glasses');
    const glasses = await glassesCollection.find().toArray();
    res.status(200).json(glasses);
  } catch (error) {}
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
    glassesCollection.insertOne(req.body);
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
