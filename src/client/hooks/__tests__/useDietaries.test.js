import useDietaries from '../useDietaries';

const input = [
  {
    dietaries: ['gf', 'df']
  },
  {
    dietaries: ['gf', 'df', 'rsf', 'n!']
  },
  {
    dietaries: ['gf', 'df', 'n!']
  }
];

const output = {
  'gf': 3,
  'df': 3,
  'rsf': 1,
  'n!': 2
};

describe('useDietaries hook', () => {
  it('Should count correct dietaries', () => {
    const countedDietaries = useDietaries(input);
    expect(countedDietaries).toMatchObject(output);
  });

  it('Should return empty', () => {
    const countedDietaries = useDietaries([]);
    expect(countedDietaries).toMatchObject({});
  });
});
