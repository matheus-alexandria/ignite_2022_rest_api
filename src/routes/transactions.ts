import crypto from 'node:crypto';
import { FastifyInstance } from 'fastify';
import { knex } from '../database';

export async function transactionsRoutes(server: FastifyInstance) {
  server.get('/hello', async () => {
    const transaction = await knex('transactions').insert({
      id: crypto.randomUUID(),
      title: 'Transação Teste',
      amount: 1000,
    }).returning('*');

    return transaction;
  });
}
