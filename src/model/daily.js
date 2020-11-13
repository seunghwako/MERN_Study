import { model, Schema } from 'mongoose';

const DailySchema = new Schema(
  {
    photo: String,
    comment: String,
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
  },
);

const Daily = model('Daily', DailySchema);

export default Daily;
