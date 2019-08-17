// can't import @cedar/types for some infuriating reason, so have to use raw enums
import { buildNameForm } from './name';

describe('Name utility functions', () => {
  describe('buildNameForm', () => {
    it('should assign the types correctly', () => {
      const result = buildNameForm('Mr. Test Person Jr.');
      const types = result.parts.map(part => part.type);

      expect(types).toEqual(['prefix', 'given', 'surname', 'suffix']);
    });

    it('should set last name type before suffixes', () => {
      const result = buildNameForm('John Smith Jr. MD');
      const types = result.parts.map(part => part.type);

      expect(types).toEqual(['given', 'surname', 'suffix', 'suffix']);
    });
  });
});
