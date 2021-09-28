import selectors from './module';

const example = {
  data: {
    name: "Some Module Name"
  }
};

describe('Module Selectors', () => {
  describe('getModuleName', () => {
    it('returns the module name', () => {
      expect(selectors.getModuleName(example)).toBe("Some Module Name");
    });
  });
})
