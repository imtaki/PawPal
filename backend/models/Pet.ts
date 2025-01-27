import mongoose, { Schema, Document } from 'mongoose';

interface IPet extends Document {
  name: string;
  age: number;
  breed: string;
  medicalHistory: string[];
  owner: mongoose.Types.ObjectId;
}

const PetSchema : Schema = new Schema({
    name: {type: String,required: true},
    age: {type: Number,required: true},
    breed: {type: String,required: true, default: 'Unknown Breed' },
    medicalHistory: {type: [String],required: true},
    owner: {type: mongoose.Types.ObjectId,ref: 'User'},

}, {
    timestamps: true,
});

const Pet = mongoose.model<IPet>('Pet', PetSchema);

export default Pet;
