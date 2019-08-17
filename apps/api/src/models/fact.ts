import { Typegoose, prop, arrayProp } from 'typegoose';

import {
  PersonFactType,
  CoupleRelationshipFactType,
  ParentChildRelationshipFactType,
} from '@cedar/types';
import { FactQualifier } from './qualifier';

// like qualifier this is not ideal, and should use generics

class FactBase extends Typegoose {
  @prop()
  date?: Date;

  @prop()
  place?: string;

  @prop()
  value?: string;

  @arrayProp({ items: FactQualifier })
  qualifiers: FactQualifier[];
}

export class PersonFact extends FactBase {
  @prop({ enum: PersonFactType })
  type: PersonFactType;
}

export class CoupleRelationshipFact extends FactBase {
  @prop({ enum: CoupleRelationshipFactType })
  type: CoupleRelationshipFactType;
}

export class ParentChildRelationshipFact extends FactBase {
  @prop({ enum: ParentChildRelationshipFactType })
  type: ParentChildRelationshipFactType;
}
