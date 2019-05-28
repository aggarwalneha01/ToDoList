import add from './add';

describe('Add function', () => {
  test('should return the sum of two number', () => {
    expect(add(1,1)).toEqual(2);
  });

  test('should return the sum when the params are strings', () => {
    expect(add('1', '2')).toEqual(3);
  });

  test('should return the sum when the params are mixed strings and numbers', () => {
    expect(add(1, '2')).toEqual(3);
  });

  test('should return the sum when the params are mixed strings and numbers', () => {
    expect(add('1', 2)).toEqual(3);
  });

  test('throws on octopus', () => {
    expect(add(true, 1)).toEqual('error');
  });
});