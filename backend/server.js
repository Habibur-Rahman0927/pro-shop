import express, { application } from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import productRoute from './routes/productRoute.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js';


dotenv.config();

connectDB()

const app = express();
app.get('/', (req, res) => {
    res.send('api is runing')
})

app.use('/api/products', productRoute);
app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server is runing in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold))