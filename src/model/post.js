import { model, Schema } from 'mongoose';
import Tag from './tag';

const PostSchema = new Schema({
  title: String,
  content: String,
  createDate: Date,
  photo: String,
  emotion: Number,
  hashtag: [Tag],
});

const Post = model('Post', PostSchema);

export default Post;
