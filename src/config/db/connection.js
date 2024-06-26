import mongoose from 'mongoose';
import logger from '../logger/winston.js';
import dotenv from 'dotenv';

dotenv.config();

console.log(process.env.MONGO_URI);

const db = async () => {
  try {
    logger.info('Connectiong to mongo server');
    await mongoose.connect(process.env.MONGO_URI).catch((err) => {
      throw new Error(err);
    });
    logger.info('Successfully connected to database');
  } catch (err) {
    logger.error('Unable to connect to database ' + err);
    throw new Error(err);
  }
};

export default db;
