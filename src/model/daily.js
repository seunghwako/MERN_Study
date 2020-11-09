import { model, Schema } from 'mongoose';

const DailySchema = new Schema({
  photo: String,
  comment: String,
  createDate: Date,
});

const Daily = model('Daily', DailySchema);

export default Daily;
