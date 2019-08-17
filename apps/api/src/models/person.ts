import { Typegoose, prop, arrayProp } from 'typegoose';

import { Gender, NameType, NamePartType } from '@cedar/types';
import { PersonFact } from './fact';
import { NamePartQualifier } from './qualifier';

export class NamePart extends Typegoose {
  @prop({ enum: NamePartType })
  type: NamePartType;

  @prop()
  value: string;

  // ideally this would be generic types
  @arrayProp({ items: NamePartQualifier })
  qualifiers: NamePartQualifier[];
}

export class NameForm extends Typegoose {
  @arrayProp({ items: NamePart })
  parts: NamePart[];

  // TODO should just make an enum of common ones to choose from for this
  @prop({ default: 'en' })
  lang: string;

  /**
   * Gets the full text of this form of the name
   *
   * TODO: It is assumed it is already in order. There should be a util library with
   * some logic to order the name parts (and assign types to them) if the user doesn't
   */
  getFullText(): string {
    return this.parts.reduce(
      (acc, part, index) => acc + (index === 0 ? '' : ' ') + part.value,
      ''
    );
  }
}

export class Name extends Typegoose {
  @prop({ default: true })
  preferred: boolean;

  @prop()
  date?: Date;

  @arrayProp({ items: NameForm })
  nameForms: NameForm[];

  @prop({ enum: NameType })
  type: NameType;
}

export class Person extends Typegoose {
  @arrayProp({ items: PersonFact })
  facts: PersonFact[];

  @prop({ enum: Gender })
  gender: Gender;

  @arrayProp({ items: Name })
  names: Name[];

  @prop({ default: false })
  private: boolean;
}

export const PersonModel = new Person().getModelForClass(Person);
