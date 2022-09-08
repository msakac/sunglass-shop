import { MongoClient } from 'mongodb';
import { NextApiResponse, NextApiRequest } from 'next';
import { type } from 'os';

async function handler(req: NextApiRequest, res: NextApiResponse) {
		switch(req.method) {
				case 'GET': {
						return getAllUsers(req, res);
				}
				case 'POST': {
						return addUser(req, res);
				}
		}
}

async function getAllUsers(req: NextApiRequest, res: NextApiResponse) {
		let client = null;
		try {
				client = await MongoClient.connect(process.env.DB_URI as string);
				const db = client.db(process.env.DB_NAME);
				const usersCollection = db.collection('users');
				const users = await usersCollection.find().toArray();
				res.status(200).json(users);
		} catch (error) {
				if (error instanceof Error) {
						res.status(400).json({
								message: error.message,
								success: false,
						});
				}
		}
		if(client instanceof MongoClient){
				client.close();
		}
}


/**
 * TODO
 * Prije registracije treba provjeriti da li je email vec zauzet
 * 
 */
async function addUser(req: NextApiRequest, res: NextApiResponse) {
	let client = null;
	try {
		client = await MongoClient.connect(process.env.DB_URI as string);
		const db = client.db(process.env.DB_NAME);
		const usersCollection = db.collection('users');

		//Check if email is already in database
		const checkEmail = await usersCollection.findOne({email:req.body.email});
		console.log(`Email exist: ${checkEmail}`);

		//If email exist we send back error else insert
		if(checkEmail !== null) {
			res.status(400).json({
				message: 'E-mail has already been taken!',
				success: false
			})
		}else	{
			const promise = await usersCollection.insertOne(req.body);
			res.status(200).json({
				message: 'User added successfully',
				id: promise.insertedId,
				success: true,
			});
		}
	} catch (error) {
			if(error instanceof Error) {
					res.status(400).json({
							message: error.message,
							success: false,
					});
			}
	}
	if(client instanceof MongoClient) {
			client.close();
	}
}

export default handler;