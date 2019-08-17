import { Document, model, Schema } from 'mongoose';

import {
  Gender,
  Person,
  PersonFactType,
  Name,
  NameType,
  NameForm,
  NamePart,
  NamePartQualifier,
  NamePartType,
} from '@cedar/types';
import { FactFactory } from './fact';
import { QualifierFactory } from './qualifier';

const NamePartQualifierSchema = QualifierFactory<NamePartQualifier>(
  Object.values(NamePartQualifier)
);

const NamePartSchema = new Schema<NamePart>({
  type: { type: String, enum: [Object.values(NamePartType)] },
  value: String,
  qualifiers: [NamePartQualifierSchema],
});

const NameFormSchema = new Schema<NameForm>({
  fullText: String,
  parts: [NamePartSchema],
  lang: String,
});

const NameSchema = new Schema<Name>({
  preferred: Boolean,
  date: { type: Date, required: false },
  nameForms: [NameFormSchema],
  type: { type: String, enum: [Object.values(NameType)] },
});

const factSchema = FactFactory<PersonFactType>(Object.values(PersonFactType));

const PersonSchema = new Schema<Person>({
  facts: [factSchema],
  gender: { type: String, enum: [Object.values(Gender)] },
  names: [NameSchema],
  private: Boolean,
});

export const PersonModel = model<Person & Document>('Person', PersonSchema);
