const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 3000

// const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD);
const DB = 'mongodb://localhost:27017'
mongoose
  .connect(DB) // 連線資料庫
  .then(() => {
    console.log('資料庫連線成功');
  })
  .catch((error) => {
    console.log(error);
  });

app.get('/', (req, res) => {
  res.send('1234')
})

app.listen(port)
