import { Schema } from 'mongoose';

export const UserDatabaseSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  registrationDate: {
    type: Number,
    required: true,
    default: Date.now() / 1000,
  },
  lastActivityDate: {
    type: Number,
  },

  tokenLifetime: {
    type: Number,
    default: Number(process.env.TOKEN_LIFETIME || 30 * 60),
  },
});
