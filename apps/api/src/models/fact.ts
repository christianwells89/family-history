import { Schema } from 'mongoose';
import { Fact, FactQualifier } from '@cedar/types';
import { QualifierFactory } from './qualifier';

export function FactFactory<T>(): Schema<Fact<T>> {
  const qualifierSchema = QualifierFactory<FactQualifier>();

  return new Schema<Fact<T>>({
    date: { type: Date, required: false },
    place: { type: String, required: false },
    type: Number,
    value: { type: String, required: false },
    qualifiers: [qualifierSchema]
  })
}