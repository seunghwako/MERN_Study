import { model, Schema } from 'mongoose';

const UserSchema = new Schema({
  name: String,
  id: { type: String, unique: true },
  password: String,
  nickname: { type: String, unique: true },
});

const User = model('User', UserSchema);

export default User;
