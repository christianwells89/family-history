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
  Male = 'male',
  Female = 'female',
  Intersex = 'intersex',
  Unknown = 'unknown',
}

export interface Name {
  preferred: boolean;
  /** The date the name was first used or adopted */
  date?: Date;
  nameForms: NameForm[];
  type?: NameType;
}

export enum NameType {
  Birth = 'birth',
  Married = 'married',
  AlsoKnownAs = 'alsoKnownAs',
  Nickname = 'nickname',
  Adoptive = 'adoptive',
  Formal = 'formal',
  Religious = 'religious',
}

export interface NameForm {
  /** Usually the full name.
   * TODO: In the frontend if this is edited separately it should build the parts. If accompanied by parts let the user change it
   */
  fullText: string;
  parts: NamePart[];
  /** Should be one of http://www.w3.org/International/articles/language-tags/. Default to `en` */
  lang: string;
}

export interface NamePart {
  type: NamePartType;
  value: string;
  qualifiers?: Qualifier<NamePartQualifier>[];
}

export enum NamePartType {
  Given = 'given',
  Surname = 'surname',
  Prefix = 'prefix',
  Suffix = 'suffix',
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
            { value: 'Kevin', type: NamePartType.Given }, // Given
            { value: 'James', type: NamePartType.Given }, // Given
            { value: 'Kiermaier', type: NamePartType.Surname }, // Surname
          ],
        },
      ],
    },
  ],
  private: false,
};
