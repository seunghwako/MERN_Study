import { model, Schema } from 'mongoose';

// 비구조화 문법 사용 destructuring
const CommentSchema = new Schema({
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'User', unique: true, required: true },
  post: { type: Schema.Types.ObjectId, ref: 'Post', unique: true, required: true },
  parent: { type: Schema.Types.ObjectId, ref: 'Comment' },
});

const Comment = model('Comment', CommentSchema);

export default Comment;
