import mongoose, { Document } from 'mongoose';

// Import the User interface
import { User } from './user';

// Define the user schema based on the User interface
const userSchema = new mongoose.Schema<User>({
    name: String,
    email: String,
    password: String,
    image: String,
});

// Create the User model
export const USER = mongoose.model<User & Document>('user', userSchema);
