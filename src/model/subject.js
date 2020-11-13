import { model, Schema } from 'mongoose';

const SubjectSchema = new Schema({
  subName: { type: String, unique: true, required: true },
});
const Subject = model('Subject', SubjectSchema);
export default Subject;
