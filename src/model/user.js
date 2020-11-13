import { model, Schema } from 'mongoose';

const UserSchema = new Schema({
  name: { type: String, required: true },
  id: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  nickname: { type: String, unique: true, required: true },
});

const User = model('User', UserSchema);

export default User;
