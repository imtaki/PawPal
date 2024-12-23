import mongoose, { Schema, Document } from 'mongoose';
export interface IUser extends Document {
    username: string;
    password: string;
    createdAt: Date;
  }
  const userSchema: Schema = new Schema(
    {
        username: { type: String, unique: true, required: true },
        email: { type: String,required: true,unique: true},
        password: { type: String, required: true },
        createdAt: { type: Date, default: new Date() },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model<IUser>("User", userSchema);

export default User;