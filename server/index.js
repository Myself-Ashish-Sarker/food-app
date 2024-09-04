const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require("dotenv").config();
const port = process.env.PORT || 3000
const app = express();

// food-app
// W7p2emZ8aJ3sQn44

// middleware
app.use(cors());
app.use(express.json());
// middleware

const uri = process.env.URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {

    const userCollection = client.db("food-app").collection("users");

    try {

        // api for user
        app.post("/users", async (req, res) => {
            const user = req.body;
            const email = user.email;
            const existingUser = await userCollection.findOne({ email });
            if (existingUser) {
                return res.status(409).json({ message: "user already exists" })
            };
            await userCollection.insertOne(user);
            res.status(201).json({message: "user created Succesfully"})
        })
        // api for user

        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {

    }
}
run().catch(console.dir);

app.get("/", (req, res) => {
    res.send("server is running")
})

app.listen(port, () => {
    console.log(`app is running on port ${port}`);
})