const mongoose = require("mongoose");
require("dotenv").config();

// const { MONGODB_URL_LOCAL } = process.env;

exports.connect = () => {
	mongoose
		.connect(process.env.MONGODB_URL, {
			// useNewUrlparser: true,
		
			// useUnifiedTopology: true,
		})
		.then(console.log(`DB Connection Success`))
		.catch((err) => {
			console.log(`DB Connection Failed`);
			console.log(err);
			process.exit(1);
		
		});


};

// exports.connect = async() => {
// mongoose.connect("mongodb+srv://diwanrahul419:Rahul@123@cluster0.ohuumln.mongodb.net/").
//   catch(error => console.log(error));

// // Or:
// try {
//   await mongoose.connect('mongodb+srv://diwanrahul419:Rahul@123@cluster0.ohuumln.mongodb.net/');
// } catch (error) {
//   console.log(error);
// }
// };


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://diwanrahul419:Rahul@123@cluster0.ohuumln.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
