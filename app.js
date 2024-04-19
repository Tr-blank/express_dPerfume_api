const express = require('express')
const cors = require('cors');
const connectDbMiddleware = require('./middlewares/connectDB');
const indexRouter = require('./routes');
const perfumesRouter = require('./routes/perfumes');
const categoriesRouter = require('./routes/categories');
const app = express()

app.use(cors());
app.use(express.json());
app.use(connectDbMiddleware);

app.use('/', indexRouter);
app.use('/perfumes', perfumesRouter);
app.use('/categories', categoriesRouter);

app.listen(process.env.PORT || 3000);
