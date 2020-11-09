import { model, Schema } from 'mongoose';

const CalenderSchema = new Schema({
  comment: String,
  startDay: Date,
  endDay: Date,
});

const Calender = model('Calender', CalenderSchema);

export default Calender;
