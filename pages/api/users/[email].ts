import { NextApiResponse, NextApiRequest } from "next";
import { MongoClient, ObjectId } from 'mongodb';
const bcrypt = require("bcrypt");


async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch(req.method) {
        case 'GET': {
            return getUser(req, res);
        }
    }
}

async function getUser(req: NextApiRequest, res: NextApiResponse) {
    const { email, password } = req.query;
    let client = null;
    
    try {
        client = await MongoClient.connect(process.env.DB_URI as string);
        const db = client.db(process.env.DB_NAME);
        const usersCollection = db.collection('users');
        const user = await usersCollection.findOne({email: email});

        if(user === null) {
            res.status(400).json({
                message: 'Invalid login credentials',
                success: false,
            })
        }
        if(await bcrypt.compare())
    }
}