import { model, Schema } from 'mongoose';
import Tag from './tag';

const PostSchema = new Schema(
  {
    title: String,
    content: String,
    photo: String,
    like: Number,
    hashtag: [Tag],
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  },
);

const Post = model('Post', PostSchema);

export default Post;
