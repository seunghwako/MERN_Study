import { model, Schema } from 'mongoose';

const TagSchema = new Schema({
  tagName: String,
});

const Tag = model('Tag', TagSchema);

export default Tag;
