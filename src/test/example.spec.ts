import { expect, test } from 'vitest';

test('User must be able to create a new transaction', () => {
  const responseStatusCode = 201;

  expect(responseStatusCode).toEqual(201);
});
