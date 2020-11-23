import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new Schema({
  name: { type: String, required: true },
  id: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  nickname: { type: String, unique: true, required: true },
});

UserSchema.method.setPassword = async function (password) {
  const hash = await bcrypt.hash(password, 10);
  this.hashedPassword = hash;
};

UserSchema.method.checkPassword = async function (password) {
  const result = await bcrypt.compare(password, this.hashedPassword);
  return result; // true, false
};

UserSchema.method.serialize = async function () {
  const data = this.toJSON();
  delete data.hashedPassword;
  return data;
};

UserSchema.statics.findById = function (id) {
  return this.findOne({ id });
};

const User = mongoose.model('User', UserSchema);
export default User;
