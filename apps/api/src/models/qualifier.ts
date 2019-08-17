import { Typegoose, prop } from 'typegoose';

import {
  FactQualifier as FactQualifierEnum,
  NamePartQualifier as NamePartQualifierEnum,
} from '@cedar/types';

// This is far less than ideal. But Typegoose doesn't like assigning an array of sub-documents to a generic type

class QualifierBase extends Typegoose {
  @prop()
  value?: string;
}

export class FactQualifier extends QualifierBase {
  @prop({ enum: FactQualifierEnum })
  name: FactQualifierEnum;
}

export class NamePartQualifier extends QualifierBase {
  @prop({ enum: NamePartQualifierEnum })
  name: NamePartQualifierEnum;
}
