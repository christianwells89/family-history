import { Schema } from 'mongoose';
import { Qualifier } from '@cedar/types';

export function QualifierFactory<T>() {
  return new Schema<Qualifier<T>>({
    name: Number,
    value: { type: String, required: false }
  })
}