import { Document, Model, Schema, model } from 'mongoose';
import { createIdSchema } from '../utils/createIdSchema';

export interface UserDocument extends Document {
  _id: string;
  name: string;
  age: number;
  location: string;
}

export type UserModelType = Model<UserDocument>;

const schema = new Schema<UserDocument>({
  _id: createIdSchema(),
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});
schema.set('toJSON', { versionKey: false });

export const UserModel = model<UserDocument, UserModelType>('User', schema);
