import express from 'express'
import mongoose from 'mongoose';
const app = express();

mongoose.connect('mongodb://localhost:27017/app-to-test-docker', (err) => {
  if(err.name === 'MongooseServerSelectionError') {
    console.log(err.reason.servers);
  }
})

app.listen(3000, () => {
  console.log("Server running");
})