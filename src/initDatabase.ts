import { mongodbUrl } from './config';
import mongoose from 'mongoose';

export const initDatabase = async () => {
  await mongoose.connect(mongodbUrl, { autoIndex: false });
  console.log('MongoDB Connected!');
};
