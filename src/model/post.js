import { model, Schema } from 'mongoose';

const PostSchema = new Schema(
  {
    title: { type: String, required: true },
    content: String,
    photo: String,
    like: Number,
    hashtag: { type: [Schema.Types.ObjectId], ref: 'Tag' },
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
