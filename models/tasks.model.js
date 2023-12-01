import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    title: { type: String, required: true, trim: true, minlength: 3 },
    description: { type: String, required: true, trim: true, minlength: 3 },
    status: String,
    datestart: Date,
    dateend: Date,
    user: String,
    createdAt: Date,
    modifiedAt: Date,
}
);


// Cambia el nombre del modelo y exporta
export default mongoose.model('Task', taskSchema);
