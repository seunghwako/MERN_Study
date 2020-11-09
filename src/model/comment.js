import { model, Schema } from 'mongoose';
import User from './user';
import Post from './post';
const ObjectId = Schema.Types.ObjectId;

const CommentSchema = new Schema({
  content: String,
  author: User,
  post: Post,
  parent: {
    type: ObjectId,
  },
});

const Comment = model('Comment', CommentSchema);

export default Comment;
