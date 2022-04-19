import app from './app';
import pool from './database';
import dotenv from 'dotenv';

dotenv.config();

const { POSTGRES_HOST, POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_PORT, PORT } =
  process.env;

const Environment = [
  'POSTGRES_HOST',
  'POSTGRES_DB',
  'POSTGRES_USER',
  'POSTGRES_PASSWORD',
  'JWT_KEY',
  'POSTGRES_PORT',
  'PORT'
];

Environment.forEach((el) => {
  if (!process.env[el]) {
    throw new Error(`${el} Must Be Defined`);
  }
});

pool
  .connect({
    host: POSTGRES_HOST,
    database: POSTGRES_DB,
    user: POSTGRES_USER,
    port: POSTGRES_PORT as unknown as number,
    password: POSTGRES_PASSWORD,
  })
  .then(() => {
    const port: number = 3000 || PORT;
   
    app.listen(port, () => console.log(`Listening to port ${port}`));
  })
  .catch((err) => console.log(err));
