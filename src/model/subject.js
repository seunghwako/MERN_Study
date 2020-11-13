import { model, Schema } from 'mongoose';

const SubjectSchema = new Schema({
  subName: String,
});
const Subject = model('Subject', SubjectSchema);
export default Subject;
