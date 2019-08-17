import {
  NameForm,
  NamePart,
  NamePartQualifier,
  NamePartType,
  Qualifier,
} from '@cedar/types';
import { strip } from './string';

export function buildNameForm(fullText: string, lang: string = 'en'): NameForm {
  const nameParts = fullText.split(' ');

  const parts: NamePart[] = nameParts.map((namePart, index) =>
    buildNamePart(namePart, nameParts, index)
  );

  return { fullText, parts, lang };
}

export function buildNamePart(
  value: string,
  nameParts: string[],
  index: number
): NamePart {
  let type: NamePartType,
    qualifiers: Qualifier<NamePartQualifier>[] = [];

  // assumes there would only ever be one prefix?
  if (isNamePartPrefix(value)) {
    type = NamePartType.Prefix;
    // check mapping for qualifiers
  } else if (isNamePartSuffix(value)) {
    type = NamePartType.Suffix;
    // check mapping for qualifiers
  } else if (
    index + 1 === nameParts.length ||
    isLastNamePartBeforeSuffix(nameParts, index)
  )
    type = NamePartType.Surname;
  else type = NamePartType.Given;

  return { type, value, qualifiers };
}

export function isNamePartPrefix(namePart: string): boolean {
  const strippedNamePart = strip(namePart);
  // TODO: These should be filled out, made to an enum too?
  // Could have a mapping to NamePartQualifier as well to tie them together eg. Rev -> Occupational
  return ['mr', 'mrs', 'ms', 'miss', 'rev', 'dr'].includes(strippedNamePart);
}

export function isNamePartSuffix(namePart: string): boolean {
  const strippedNamePart = strip(namePart);
  // TODO: These should be filled out, made to an enum too?
  // Could have a mapping to NamePartQualifier as well to tie them together eg. MD -> Occupational
  return ['jr', 'sr', 'md'].includes(strippedNamePart);
}

function isLastNamePartBeforeSuffix(
  nameParts: string[],
  index: number
): boolean {
  // Loop through the name parts backwards until we reach the part being tested.
  // If a part isn't a suffix, then the part being tested isn't a last name
  for (let step = nameParts.length - 2; step > index; step--) {
    if (!isNamePartSuffix(nameParts[step])) return false;
  }
  return true;
}
