import mongoose from 'mongoose';

const userModel = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    fullName: { type: String, required: true, unique: true },
    password: { type: String, required: true, minLength: 6 },
    profilePic: { type: String, default: '' },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userModel);

export default User;
