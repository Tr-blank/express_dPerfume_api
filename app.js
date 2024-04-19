const express = require('express')
const connectDbMiddleware = require('./middlewares/connectDB');
const indexRouter = require('./routes');
const perfumesRouter = require('./routes/perfumes');
const categoriesRouter = require('./routes/categories');
const app = express()
const port = 3000

app.use(express.json());
app.use(connectDbMiddleware);

app.use('/', indexRouter);
app.use('/perfumes', perfumesRouter);
app.use('/categories', categoriesRouter);

app.listen(process.env.PORT || port)
