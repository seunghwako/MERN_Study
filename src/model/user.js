import { model, Schema } from 'mongoose';

const UserSchema = new Schema({
  name: String,
  id: String,
  password: String,
  nickname: String,
});

const User = model('User', UserSchema);

export default User;
