import { Document, model, Schema } from 'mongoose';

import { Person, PersonFactType } from '@cedar/types';
import { FactFactory } from './fact';

const factSchema = FactFactory<PersonFactType>();

const PersonSchema = new Schema<Person>({
  facts: [factSchema],
  private: Boolean,
});

export const PersonModel = model<Person & Document>('Person', PersonSchema);
