const express = require('express');
require('dotenv').config();
const config = require('config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRouter = require('./routes/auth/auth.routes');

const app = express();


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
const PORT = config.get('port') || 5000;
const MONGODBURL = config.get('mongodbUrl') || process.env.MONGO_URL;

app.use('/api/auth', authRouter);

async function start(){
  try{
    await mongoose.connect(MONGODBURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}`));
  } catch(error){
    console.log("error server ", error.message);
    process.exit(1);
  }
}
start();

