const mongoose = require('mongoose');
const dotenv = require('dotenv');
let connectStatus = false

dotenv.config({ path: './config.env' })

const connectMongoDB = async () => {
  try {
    const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD);
    await mongoose.connect(DB)
    connectStatus = true
    console.log('MongoDB 連線成功')
  } catch (error) {
    console.log(error)
  }
}
connectMongoDB()

const connectDbMiddleware = (req, res, next) => {
  if (connectStatus) {
    next();
  } else {
    res.status(503).send({
      status: 503,
      message: 'MongoDB 連線失敗'
    });
  }
}

module.exports = connectDbMiddleware;
