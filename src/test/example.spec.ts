import {
  afterAll, beforeAll, expect, test,
} from 'vitest';
import request from 'supertest';
import { server } from '../initFastifyServer';

beforeAll(async () => {
  await server.ready();
});

afterAll(async () => {
  await server.close();
});

test('User must be able to create a new transaction', async () => {
  const response = await request(server.server)
    .post('/transactions')
    .send({
      title: 'New transaction',
      amount: 5000,
      type: 'credit',
    });

  expect(response.statusCode).toEqual(201);
});
