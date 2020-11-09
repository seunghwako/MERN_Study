import { model, Schema } from 'mongoose';
import Tag from './tag';

const TravelSchema = new Schema({
  photo: String,
  comment: String,
  hashtag: [Tag],
});

const Travel = model('Travel', TravelSchema);

export default Travel;
