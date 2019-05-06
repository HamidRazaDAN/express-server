import diamond from '../../extraTs/patterns/diamond';

test('Diamond Pattern Test with row 5', () => {
  // tslint:disable-next-line:max-line-length
  const expected: string = '    * \n   * * \n  * * * \n * * * * \n* * * * * \n* * * * * \n * * * * \n  * * * \n   * * \n    * \n';
  const received: string = diamond(5);
  expect(received).toMatch(expected);
});
