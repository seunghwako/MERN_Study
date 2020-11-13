import { model, Schema } from 'mongoose';

const WannabeSchema = new Schema({
  wish: { type: String, required: true },
  haveToBuy: { type: String, required: true },
});

const Wannabe = model('Wannabe', WannabeSchema);

export default Wannabe;
