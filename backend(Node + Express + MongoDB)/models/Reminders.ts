import mongoose, { Schema, Document } from 'mongoose';

interface IReminder extends Document {
  title: string;
  petName: string;
  customDate: Date;
  description: string;
}

const ReminderSchema : Schema = new Schema({
    title: {type: String,required: true},
    petName: {type: String, required: true},
    customDate: {type: Date, required: true },
    description: {type: String, required: true},
}, {
    timestamps: true,
});

const Reminder = mongoose.model<IReminder>('Reminder', ReminderSchema);

export default Reminder;