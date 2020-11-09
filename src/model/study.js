import { model, Schema } from 'mongoose';

const StudySchema = new Schema({
  subject: String,
  comment: String,
});

const Study = model('Study', StudySchema);

export default Study;
