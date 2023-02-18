import { Schema, model } from 'mongoose'

export const User = model(
  'User',
  new Schema({
    userId: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    type: {
      type: String,
      enum: ['user', 'bot'],
      required: true,
    },
    profiles: {
      default: { type: Schema.Types.ObjectId, ref: 'UserProfile' },
    },
  }),
  'user',
)
