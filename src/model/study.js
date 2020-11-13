import { model, Schema } from 'mongoose';
import Subject from './subject';

const StudySchema = new Schema({
  subject: Subject,
  comment: String,
});

const Study = model('Study', StudySchema);

export default Study;
