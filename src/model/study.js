import { model, Schema } from 'mongoose';
import Subject from './subject';

const StudySchema = new Schema({
  subject: { type: Schema.Types.ObjectId, ref: 'Subject', required: true },
  comment: { type: String, required: true },
});

const Study = model('Study', StudySchema);

export default Study;
