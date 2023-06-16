import fastify from 'fastify';
import crypto from 'node:crypto';
import { knex } from './database';
import { env } from './env';

const server = fastify();

server.get('/hello', async () => {
  const transaction = await knex('transactions').insert({
    id: crypto.randomUUID(),
    title: 'Transação Teste',
    amount: 1000,
  }).returning('*');

  return transaction;
});

server.listen({ port: env.PORT }, () => {
  console.log('HTTP Server Online!');
});
