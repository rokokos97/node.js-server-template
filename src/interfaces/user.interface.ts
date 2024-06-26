import { Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  age: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IUserInput {
  _id?: string;
  name: string;
  email: string;
  age: string;
}
