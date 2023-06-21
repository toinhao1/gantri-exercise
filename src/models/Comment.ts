import { Document, Model, Schema, model } from 'mongoose';
import { createIdSchema } from '../utils/createIdSchema';

export interface CommentDocument extends Document {
  _id: string;
  user: string;
  content: string;
}

export type CommentModelType = Model<CommentDocument>;

const schema = new Schema<CommentDocument>({
  _id: createIdSchema(),
  user: {
    type: String,
    required: true,
    ref: 'User',
  },
  content: {
    type: String,
    required: true,
  },
});
schema.set('toJSON', { versionKey: false });

export const CommentModel = model<CommentDocument, CommentModelType>('Comment', schema);
