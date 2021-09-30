const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const authRouter = require('./routes/auth/auth.routes');
const todoRouter = require('./routes/todo/todo.routes');

const app = express();
app.use(express.json({ extended: true }));

const PORT = process.env.PORT || 5000;
const MONGODBURL = process.env.MONGO_URL;

app.use('/api/auth', authRouter);
app.use('/api/todo', todoRouter)

async function start() {
  try {
      await mongoose.connect(MONGODBURL, {
          useNewUrlParser: true,
          useUnifiedTopology: true
      })
      app.listen(PORT, () => console.log(`App listening ${PORT} port`));
  } catch (error) {
      console.log('error server', error.message);
      process.exit(1);
  }
}
start()