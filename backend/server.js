import express, { application } from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import productRoute from './routes/productRoute.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js';



dotenv.config();

connectDB()

const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.send('api is runing')
})

app.use('/api/products', productRoute);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

app.get('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID))
app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server is runing in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold))