import { Document, Model, Schema, model } from 'mongoose';
import { createIdSchema } from '../utils/createIdSchema';

export interface ArtDocument extends Document {
  _id: string;
  id: number;
  title: string;
  artist: string;
  year: number;
  comments: string[];
}

export type ArtModelType = Model<ArtDocument>;

const schema = new Schema<ArtDocument>({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  comments: [
    {
      type: String,
      ref: 'Comment',
    },
  ],
});
schema.set('toJSON', { versionKey: false });

export const ArtModel = model<ArtDocument, ArtModelType>('Art', schema);
