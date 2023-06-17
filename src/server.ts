import fastify from 'fastify';
import { env } from './env';
import { transactionsRoutes } from './routes/transactions';

const server = fastify();

server.register(transactionsRoutes, {
  prefix: 'transactions',
});

server.listen({ port: env.PORT }, () => {
  console.log('HTTP Server Online!');
});
