import { Schema } from 'mongoose';
import { Qualifier, FactQualifier, NamePartQualifier } from '@cedar/types';

export function QualifierFactory<T extends FactQualifier | NamePartQualifier>(
  values: T[]
) {
  return new Schema<Qualifier<T>>({
    name: { type: String, enum: [values] },
    value: { type: String, required: false },
  });
}
