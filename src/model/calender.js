import { model, Schema } from 'mongoose';

const CalenderSchema = new Schema({
  comment: { type: String, required: true },
  startDay: { type: Date, required: true },
  endDay: { type: Date, required: true },
});

const Calender = model('Calender', CalenderSchema);

export default Calender;
