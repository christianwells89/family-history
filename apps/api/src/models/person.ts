import { Document, model, Schema } from 'mongoose';

export interface Person {
    fullName: string;
}

const PersonSchema = new Schema<Person>({
    fullName: String
});

export const PersonModel = model<Person & Document>('Person', PersonSchema);