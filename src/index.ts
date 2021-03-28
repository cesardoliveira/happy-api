import app from './server';
import dotenv from 'dotenv';

dotenv.config();

app.listen(process.env.SERVER_PORT, () => {
  console.log('Started server');
})