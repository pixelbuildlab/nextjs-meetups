import { MongoClient } from "mongodb";
import React from "react";

const handler = async (req, res) => {
  const url =
    "mongodb+srv://furqanryk200:X8XNPhUAJ9clVfBA@cluster0.fa9wbc9.mongodb.net/?retryWrites=true&w=majority";
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(url);
    const db = client.db();
    const meetupCollection = db.collection("meetups");
    const results = await meetupCollection.insertOne(data);
    console.log(results);
    client.close();
    res.status(201).json({ message: "Data inserted" });
  }
};

export default handler;
