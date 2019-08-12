import { Fact, PersonFactType } from './fact';
import { Qualifier, NamePartQualifier } from './qualifier';

export interface Person {
  facts: Fact<PersonFactType>[];
  gender: Gender; // GEDCOM has this be a whole type that inherits from Conclusion, but I don't know if that's necessary
  //living: boolean; can be derived from a death fact?
  names: Name[];
  private: boolean;
}

/**
 * Used by a Person class to output derived values from the above Person interface
 */
export interface PersonDisplay {
  id: string;
  name: string;
  gender: string;
  lifespan: string;
  birthDate: string;
  birthPlace: string;
  deathDate: string;
  deathPlace: string;
  marriageDate: string;
  marriagePlace: string;
}

export enum Gender {
  Male,
  Female,
  Intersex,
  Unknown,
}

export interface Name {
  preferred: boolean;
  /** The date the name was first used or adopted */
  date?: Date;
  nameForms: NameForm[];
  type?: string;
}

export enum NameType {
  Birth,
  Married,
  AlsoKnownAs,
  Nickname,
  Adoptive,
  Formal,
  Religious,
}

export interface NameForm {
  /** Usually the full name. TODO Should be derived from parts, this could get out of sync with them */
  fullText: string;
  parts: NamePart[];
  /** Should be one of http://www.w3.org/International/articles/language-tags/. Default to `en` */
  lang?: string;
}

export interface NamePart {
  type: NameFormType;
  value: string;
  qualifiers?: Qualifier<NamePartQualifier>[];
}

export enum NameFormType {
  Given,
  Surname,
  Prefix,
  Suffix,
}

const example: Person = {
  facts: [
    {
      type: PersonFactType.Birth,
      date: new Date('1990-04-22'),
      place: 'Fort Wayne, IN',
    },
    { type: PersonFactType.Occupation, value: 'Professional Baseball Player' },
  ],
  gender: Gender.Male,
  names: [
    {
      preferred: true,
      nameForms: [
        {
          fullText: 'Kevin James Kiermaier',
          lang: 'en',
          parts: [
            { value: 'Kevin', type: 0 }, // Given
            { value: 'James', type: 0 }, // Given
            { value: 'Kiermaier', type: 2 }, // Surname
          ],
        },
      ],
    },
  ],
  private: false,
};
