import {
  afterAll, beforeAll, expect, describe, it,
} from 'vitest';
import request from 'supertest';
import { server } from '../initFastifyServer';

describe('Transactions routes', () => {
  beforeAll(async () => {
    await server.ready();
  });

  afterAll(async () => {
    await server.close();
  });

  it('should be able to create a new transaction', async () => {
    const response = await request(server.server)
      .post('/transactions')
      .send({
        title: 'New transaction',
        amount: 5000,
        type: 'credit',
      });

    expect(response.statusCode).toEqual(201);
  });

  it('should be able to list all transactions', async () => {
    const createTransactionResponse = await request(server.server)
      .post('/transactions')
      .send({
        title: 'New transaction',
        amount: 5000,
        type: 'credit',
      });

    const cookies = createTransactionResponse.get('Set-Cookie');

    const listTransactionsResponse = await request(server.server)
      .get('/transactions')
      .set('Cookie', cookies);

    console.log(createTransactionResponse.status);

    expect(listTransactionsResponse.body.transactions).toEqual([
      expect.objectContaining({
        title: 'New transaction',
        amount: 5000,
      }),
    ]);
  });
});
