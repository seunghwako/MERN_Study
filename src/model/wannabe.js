import { model, Schema } from 'mongoose';

const WannabeSchema = new Schema({
  wish: String,
  haveToBuy: String,
});

const Wannabe = model('Wannabe', WannabeSchema);

export default Wannabe;
