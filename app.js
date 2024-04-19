const express = require('express')
const mongoose = require('mongoose');
const indexRouter = require('./routes');
const perfumesRouter = require('./routes/perfumes');
const app = express()
const port = 3000

// const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD);
const DB = 'mongodb://localhost:27017/test'
mongoose
  .connect(DB) // 連線資料庫
  .then(() => {
    console.log('資料庫連線成功');
  })
  .catch((error) => {
    console.log(error);
  });

app.use(express.json());
app.use('/', indexRouter);
app.use('/perfumes', perfumesRouter);


app.listen(port)
