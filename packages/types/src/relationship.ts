import {
  Fact,
  CoupleRelationshipFactType,
  ParentChildRelationshipFactType,
} from './fact';

export interface Relationship {
  person1: string;
  person2: string;
  type: RelationshipType;
  // this doesn't mutually exclude the types. Does it matter?
  facts: Fact<CoupleRelationshipFactType | ParentChildRelationshipFactType>[];
}

export enum RelationshipType {
  Couple = 'couple',
  ParentChild = 'parentChild',
}
