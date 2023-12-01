import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    title: { type: String, required: true, trim: true, minlength: 3 },
    description: { type: String, required: true, trim: true, minlength: 3 },
    status: { type: String, required: true, trim: true, default: "pending" },
    dateStart: { type: Date, required: true, default: Date.now() },
    dateEnd: { type: Date, required: true, default: Date.now() },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Task', taskSchema);
