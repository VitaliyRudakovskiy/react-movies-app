import { sum } from './sum';

describe('sum', () => {
  it('correctly adds two numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('returns negative number when expected', () => {
    expect(sum(-4, -1)).toBe(-5);
  });
});
