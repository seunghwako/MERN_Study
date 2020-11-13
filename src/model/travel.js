import { model, Schema } from 'mongoose';

const TravelSchema = new Schema({
  photo: String,
  comment: { type: String, required: true },
  hashtag: { type: [Schema.Types.ObjectId], ref: 'Tag' },
});

const Travel = model('Travel', TravelSchema);

export default Travel;
