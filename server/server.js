import dotenv from 'dotenv';
import app from './express';
import mongoose from 'mongoose';

dotenv.config({ path: './config.env' });

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database`);
});

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.info('Server started on port %s.', process.env.PORT);
});
