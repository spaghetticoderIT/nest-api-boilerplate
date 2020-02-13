import { Document } from 'mongoose';

export interface User {
  email: string;
  passwordHash: string;

  registrationDate?: number;
  lastActivityDate?: number;

  tokenLifetime?: number;
}

export interface UserDatabaseDocument extends User, Document {}
