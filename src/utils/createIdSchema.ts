import { createId } from './createId';

export const createIdSchema = () => ({
  type: String,
  default: createId,
  required: true,
});
