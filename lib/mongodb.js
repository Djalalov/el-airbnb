// mongodb.js

import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {
	useUnifiedTopology: true,
	useNewUrlParser: true,
};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
	throw new Error("Mongo URI is NOT ok");
}

if (process.env.NODE_ENV === "development") {
	if (!global._mongoClientPromise) {
		client = new MongoClient(uri, options);
		global._mongoClientPromise = client.connect();
	}
	clientPromise = global._mongoClientPromise;
} else {
	// In production mode, it's best to not use a global variable.
	client = new MongoClient(uri, options);
	clientPromise = client.connect();
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;