import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoute from './routes/authRoute.js';
import userRoute from './routes/userRoute.js';
import productsRoute from './routes/productsRoute.js';

const app = express();
dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

//middlewares

app.use('/auth', authRoute);
app.use('/users', userRoute);
app.use('/api/products', productsRoute);
app.use('/api/product', productsRoute);

// Error handler
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || 'Something went wrong!';
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose
  .connect(process.env.DB_TRAVEL, dbOptions)
  .then(() => console.log('DB store connected!'))
  .catch((err) => console.log(err));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('running on port ' + port);
  console.log('Connected to backend');
});
