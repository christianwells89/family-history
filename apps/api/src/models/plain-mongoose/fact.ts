import { Schema } from 'mongoose';
import {
  Fact,
  FactQualifier,
  PersonFactType,
  CoupleRelationshipFactType,
  ParentChildRelationshipFactType,
} from '@cedar/types';
import { QualifierFactory } from './qualifier';

export function FactFactory<
  T extends
    | PersonFactType
    | CoupleRelationshipFactType
    | ParentChildRelationshipFactType
>(values: T[]): Schema<Fact<T>> {
  const qualifierSchema = QualifierFactory<FactQualifier>(
    Object.values(FactQualifier)
  );

  return new Schema<Fact<T>>({
    date: { type: Date, required: false },
    place: { type: String, required: false },
    type: { type: String, enum: [values] },
    value: { type: String, required: false },
    qualifiers: [qualifierSchema],
  });
}
